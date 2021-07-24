import {userAction, userActionTypes} from "../../types/user";
import {Dispatch} from "redux";
import axios from "axios";

export const loginUser = (email: string, password: string) => {
    return async (dispatch: Dispatch<userAction>) => {
        try {
            dispatch({type: userActionTypes.USER_LOGIN})
            const res = await axios.post('http://localhost:5000/api/user/login', {email, password});
            localStorage.setItem('token', res.data.token.toString());
            console.log(res);
            dispatch({type: userActionTypes.USER_LOGIN_SUCCESS, payload: res.data})
        } catch (e) {
            dispatch({type: userActionTypes.USER_LOGIN_ERROR, payload: 'Произошла ошибка при логине'})
        }
    }
}

export const registerUser = (email: string, password: string, role = "USER") => {
    return async (dispatch: Dispatch<userAction>) => {
        try {
            dispatch({type: userActionTypes.USER_REGISTRATION});
            const res = await axios.post('http://localhost:5000/api/user/registration', {email, password, role});
            dispatch({type: userActionTypes.USER_REGISTRATION_SUCCESS, payload: res.data})
        } catch (e) {
            dispatch({type: userActionTypes.USER_REGISTRATION_ERROR, payload: 'Произошла ошибка при регистрации'})
        }
    }
}