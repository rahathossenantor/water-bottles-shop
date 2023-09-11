import "./bottle.css";

const Bottle = ({bottle, addToCart}) => {
    const {name, img, price} = bottle;
    return (
        <div className="bottle-card">
            <h3>Name: {name}</h3>
            <img src={img} alt="bottle" />
            <p>Price: ${price}</p>
            <button onClick={() => addToCart(bottle)}>Add to cart</button>
        </div>
    );
};

export default Bottle;