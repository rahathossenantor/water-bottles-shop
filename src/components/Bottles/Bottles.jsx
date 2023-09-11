import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Bottle from "../Bottle/Bottle";

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
    }

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