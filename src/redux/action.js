

export const actionsTypes = {
    SET_PRODUCT_INFO: "SET_PRODUCT_INFO",
    SET_PRODUCT_NAME: "SET_PRODUCT_NAME",
    SET_PRODUCT_PRICE: "SET_PRODUCT_NAME",
    SET_CART: "SET_CART",
}


export const actionInfo = {
    setProductInfo: (product) => ({type: actionsTypes.SET_PRODUCT_INFO, payload: product}),
    setCart: (cart) => ({type: actionsTypes.SET_CART, payload: cart})
    // setProductName: (name) => ({type: actionsTypes.SET_PRODUCT_NAME, payload: name}),
    // setProductPrice: (price) => ({type: actionsTypes.SET_PRODUCT_PRICE, payload: price}),
}

// export const getInfo = () => async (dispatch) =>{
//     await
// }