import {ProductAction, productsActionTypes, productsState, productState} from "../../types/product";

const initState: productState = {
    product: undefined,
    loading: false,
    error: null,
}

export const productReducer = (state = initState, action: ProductAction): productState => {
    switch (action.type) {
        case productsActionTypes.GET_PRODUCT_PENDING: {
            return {...state, loading: true, error: null, product: undefined}
        }
        case productsActionTypes.GET_PRODUCT_SUCCESS: {
            return {...state, loading: false, error: null, product: action.payload}
        }
        case productsActionTypes.GET_PRODUCT_ERROR:
            return {loading: false, error: action.payload, product: undefined}
        default:
            return state
    }
}