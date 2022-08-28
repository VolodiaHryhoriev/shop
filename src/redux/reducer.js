import {actionsTypes} from "./action";

const initialState = {
    product: {},
    cart: [],
    error: "",

}

const productReducer = (state=initialState, action ) => {
    switch (action.type) {
        case actionsTypes.SET_PRODUCT_INFO:
            return {
                ...state,
                product: action.payload,
                error: ""
            }
        case actionsTypes.SET_CART:
            return {
                ...state,
                cart: [...state.cart, {...action.payload, qty: 1}] ,
                error: ""
            }
        default:
            return state
    }
}

export default productReducer;