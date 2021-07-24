import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {productsReducer} from "./productsReducer";
import {productReducer} from "./productReduser";

export const rootReducer = combineReducers({
    user: userReducer,
    products: productsReducer,
    product: productReducer,
})

export type RootState = ReturnType<typeof rootReducer>