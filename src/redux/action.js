

export const actionsTypes = {
    SET_PRODUCT_INFO: "SET_PRODUCT_INFO",
    SET_CART: "SET_CART",
    REMOVE_CART: "REMOVE_CART",
}


export const actionInfo = {
    setProductInfo: (product) => ({type: actionsTypes.SET_PRODUCT_INFO, payload: product}),
    setCart: (cart) => ({type: actionsTypes.SET_CART, payload: cart}),
}