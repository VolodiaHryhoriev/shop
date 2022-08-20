import {actionsTypes} from "./action";

const initialState = {
    product: [],
    error: "",

}

const reducerImage = (state=initialState, action ) => {
    switch (action.type) {
        case actionsTypes.SET_PRODUCT_INFO:
            return {
                ...state,
                product: action.payload,
                error: ""
            }
        default:
            return state
    }
}

export default reducerImage;