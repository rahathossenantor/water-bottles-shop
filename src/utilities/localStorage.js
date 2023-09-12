const getStoredData = () => {
    const cart = window.localStorage.getItem("cart");
    if (cart) {
        return JSON.parse(cart)
    }
    return [];
}

const setDataToLocalStorage = (cart) => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
}

const addDataToCart = (id) => {
    const cart = getStoredData();
    cart.push(id);
    setDataToLocalStorage(cart);
}

export {addDataToCart, getStoredData};