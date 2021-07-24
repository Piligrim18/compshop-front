import React, {FC, useState} from 'react';
import {useActions} from "../../hooks/useActions";
import {NavLink} from "react-router-dom";
import {REGISTRATION_ROUTE} from "../../utils/consts";

const Login: FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {loginUser} = useActions();

    const handleEmailInput = (e: any) => {
            setEmail(e.target.value)
    };

    const handlePasswordInput = (e: any) => {
        setPassword(e.target.value)
    };
    const handleSumbitClick = () => {
        if(email.length > 0 && password.length > 0) {
            loginUser(email, password);
        }
    }

    return (
        <div>
            <p>Логин</p>
            <input onChange={handleEmailInput} type="text" placeholder='email' />
            <input onChange={handlePasswordInput} type="text" placeholder='password' />
            <button onClick={handleSumbitClick} type='submit'>Отправить</button>
            <div>
                <NavLink to={REGISTRATION_ROUTE}>Зарегестрироваться</NavLink>
            </div>
        </div>
    );
};

export default Login;