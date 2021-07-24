import React from 'react';
import Login from "../components/auth/Login";
import {useLocation} from "react-router";
import {LOGIN_ROUTE} from "../utils/consts";
import Registration from "../components/auth/Registration";

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    return (
        <div>
            {isLogin ? <Login /> : <Registration />}
        </div>
    );
};

export default Auth;