import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/consts";
import {useActions} from "../../hooks/useActions";

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {registerUser} = useActions();

    const handleEmailInput = (e: any) => {
        setEmail(e.target.value)
    };
    const handlePasswordInput = (e: any) => {
        setPassword(e.target.value)
    };

    const handleSumbitClick = () => {
        if(email.length > 0 && password.length > 0) {
            registerUser(email, password);
        }
    }

    return (
        <div>
            <p>Регистрация</p>
            <input onChange={handleEmailInput} type="text" placeholder='email' />
            <input onChange={handlePasswordInput} type="text" placeholder='password' />
            <button onClick={handleSumbitClick} type='submit'>Отправить</button>
            <div>
                <NavLink to={LOGIN_ROUTE}>Логин</NavLink>
            </div>
        </div>
    );
};

export default Registration;