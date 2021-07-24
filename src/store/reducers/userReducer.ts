import {userAction, userActionTypes, userState} from "../../types/user";

const initState: userState = {
    user: undefined,
    isAuth: false,
    loading: false,
    error: null,
}

export const userReducer = (state = initState, action: userAction): userState => {
    switch (action.type) {
        case userActionTypes.USER_LOGIN:
            return {...state, loading: true, error: null, isAuth: false}
        case userActionTypes.USER_LOGIN_SUCCESS:
            return {...state, loading: false, error: null, user: action.payload, isAuth: true}
        case userActionTypes.USER_LOGIN_ERROR:
            return {...state, loading: false, error: action.payload, isAuth: false}
        default:
            return state
    }
}