export interface productState {
    product?: Product;
    loading: boolean;
    error: null | string;
}
export interface productsState {
    products: Product[];
    product?: Product;
    loading: boolean;
    error: null | string;
    page?: number;
    limit?: number;
    count: number;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    rating?: number;
    image: string;
    categoryId: number;
    brandId: number;
}

export enum productsActionTypes {
    FETCH_PRODUCTS = 'FETCH_PRODUCTS',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',
    GET_PRODUCT_PENDING = 'GET_PRODUCT_PENDING',
    GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS',
    GET_PRODUCT_ERROR = 'GET_PRODUCT_ERROR',
}

interface fetchProductsAction {
    type: productsActionTypes.FETCH_PRODUCTS;
}

interface fetchProductsSuccessAction {
    type: productsActionTypes.FETCH_PRODUCTS_SUCCESS;
    payload: {
        count: number,
        rows: Product[]
    };
}

interface fetchProductsErrorAction {
    type: productsActionTypes.FETCH_PRODUCTS_ERROR;
    payload: string;
}

interface getProductPendingAction {
    type: productsActionTypes.GET_PRODUCT_PENDING;
}
interface getProductSuccessAction {
    type: productsActionTypes.GET_PRODUCT_SUCCESS;
    payload: Product
}
interface getProductErrorAction {
    type: productsActionTypes.GET_PRODUCT_ERROR;
    payload: string;
}

export type ProductAction = fetchProductsAction | fetchProductsSuccessAction | fetchProductsErrorAction | getProductPendingAction | getProductSuccessAction | getProductErrorAction