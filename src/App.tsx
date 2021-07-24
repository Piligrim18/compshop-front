import React from 'react';
import ProductsList from "./components/product/ProductsList";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {authRoutes, publicRoutes} from "./routes";
import {SHOP_ROUTE} from "./utils/consts";

const App = () => {
    const isAuth = false;
    return (
        <BrowserRouter>
            <Switch>
                {isAuth && authRoutes.map(({path, Component}) => (
                    <Route key={path} path={path} component={Component}/>
                ))}
                {publicRoutes.map(({path, Component}) => (
                    <Route key={path} path={path} component={Component}/>
                ))}
                <Redirect to={SHOP_ROUTE} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;