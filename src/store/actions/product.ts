import {Dispatch} from "redux";
import axios from "axios";
import {ProductAction, productsActionTypes} from "../../types/product";

export const fetchProducts = (page = 1, limit = 5) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({type: productsActionTypes.FETCH_PRODUCTS})
            const res = await axios.get('http://localhost:5000/api/product/', {params: {
                page, limit
                }});
            dispatch({type: productsActionTypes.FETCH_PRODUCTS_SUCCESS, payload: res.data})
        } catch (e) {
            dispatch({type: productsActionTypes.FETCH_PRODUCTS_ERROR, payload: 'Произошла ошибка при загрузке пользователей'})
        }
    }
}

export const getProduct = (productId: number) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({type: productsActionTypes.GET_PRODUCT_PENDING});
            const res = await axios.get('http://localhost:5000/api/product/' + productId );
            dispatch({type: productsActionTypes.GET_PRODUCT_SUCCESS, payload: res.data})
        } catch (e) {
            dispatch({type: productsActionTypes.GET_PRODUCT_ERROR, payload: 'Произошла ошибка при загрузке продукта'})
        }
    }
}