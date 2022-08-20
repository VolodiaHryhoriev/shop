export const actionsTypes = {
    SET_PRODUCT_INFO: "SET_PRODUCT_INFO",
}

export const actionInfo = {
    setProductInfo: (product) => ({type: actionsTypes.SET_PRODUCT_INFO, payload: product}),
}

// export const actionInfoProduct =>