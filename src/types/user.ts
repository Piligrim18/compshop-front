export interface userState {
    user?: User;
    isAuth: boolean;
    loading: boolean;
    error: null | string;
}

export interface User {
    id: number;
    email: string;
    role: string;
    accessToken: string;
}

export enum userActionTypes {
    USER_LOGIN = 'USER_LOGIN',
    USER_REGISTRATION = 'USER_REGISTRATION',
    USER_CHECK = 'USER_CHECK',
    USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
    USER_REGISTRATION_SUCCESS = 'USER_REGISTRATION_SUCCESS',
    USER_LOGIN_ERROR = 'USER_LOGIN_ERROR',
    USER_REGISTRATION_ERROR = 'USER_REGISTRATION_ERROR',
}

interface userLoginAction {
    type: userActionTypes.USER_LOGIN;
}
interface userLoginSuccessAction {
    type: userActionTypes.USER_LOGIN_SUCCESS;
    payload: User;
}
interface userLoginErrorAction {
    type: userActionTypes.USER_LOGIN_ERROR;
    payload: string;
}
interface userRegistrationAction {
    type: userActionTypes.USER_REGISTRATION;
}
interface userRegistrationSuccessAction {
    type: userActionTypes.USER_REGISTRATION_SUCCESS;
    payload: User;
}
interface userRegistrationErrorAction {
    type: userActionTypes.USER_REGISTRATION_ERROR;
    payload: string;
}
interface userCheckAction {
    type: userActionTypes.USER_CHECK;
    payload: User;
}

export type userAction = userLoginAction
    | userLoginSuccessAction
    | userLoginErrorAction
    | userRegistrationAction
    | userRegistrationAction
    | userRegistrationSuccessAction
    | userRegistrationErrorAction
    | userCheckAction