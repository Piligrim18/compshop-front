import {ADMIN_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts";
import Admin from "./pages/Admin";
import Product from "./pages/Product";
import Auth from "./pages/Auth";
import Shop from "./pages/Shop";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
    },
]

export const publicRoutes = [
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: Product,
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth,
    },
    {
        path: SHOP_ROUTE,
        Component: Shop,
    }
]