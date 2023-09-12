import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Bottle from "../Bottle/Bottle";
import { addDataToCart, getStoredData } from "../../utilities/localStorage";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch("https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json");
            const data = await response.json();
            setBottles(data);
        })()
    }, [])

    const [cartItem, setCartItem] = useState([]);

    const addToCart = (product) => {
        setCartItem([...cartItem, product]);
        addDataToCart(product.id);
    }

    useEffect(() => {
        if (bottles.length) {
            const cartProducts = getStoredData();

            const cartBottles = [];
            for (const id of cartProducts) {
                const products = bottles.find(product => product.id === id);
                if (products) {
                    cartBottles.push(products);
                }
            }
            setCartItem(cartBottles);
        }
    }, [bottles])

    return (
        <div>
            <Header></Header>
            <h2>Total bottles: {bottles.length}</h2>
            <h2>Items in cart: {cartItem.length}</h2>
            {bottles.map((bottle, id) => <Bottle key={id} bottle={bottle} addToCart={addToCart}></Bottle>)}
        </div>
    );
};

export default Bottles;