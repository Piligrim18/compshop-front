import {ProductAction, productsActionTypes, productsState} from "../../types/product";

const initState: productsState = {
    products: [{
        id: 0,
        name: '',
        price: 0,
        rating: 0,
        categoryId: 0,
        brandId: 0,
        image: '',
    }],
    product: undefined,
    loading: false,
    error: null,
    page: 1,
    limit: 5,
    count: 0,
}

export const productsReducer = (state = initState, action: ProductAction): productsState => {
    switch (action.type) {
        case productsActionTypes.FETCH_PRODUCTS: {
            return {...state, loading: true, error: null, products: [], count: 0}
        }
        case productsActionTypes.FETCH_PRODUCTS_SUCCESS: {
            return {...state, loading: false, error: null, products: action.payload.rows, count: action.payload.count}
        }
        case productsActionTypes.FETCH_PRODUCTS_ERROR:
            return {loading: false, error: action.payload, products: [], count: 0}
        default:
            return state
    }
}