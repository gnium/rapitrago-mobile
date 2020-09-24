import { AuthActionType } from "../actions/auth";

export default (
    state = {
        isLoggingIn: false,
        isLoggingOut: false,
        isVerifying: false,
        loginError: false,
        logoutError: false,
        isAuthenticated: false,
        user: {},
        token: null,
    },
    action: { type: string; user: any, token: string, isLoading: boolean, error: any }
) => {
    switch (action.type) {
        case AuthActionType.GET_TOKEN:
            return { ...state, token: action.token };
        case AuthActionType.SAVE_TOKEN:
            return { ...state, token: action.token };
        case AuthActionType.REMOVE_TOKEN:
            return { ...state, token: action.token };
        case AuthActionType.LOADING:
            return { ...state, loading: action.isLoading };
        case AuthActionType.ERROR:
            return { ...state, error: action.error };
        case AuthActionType.LOGIN_REQUEST:
            return {
                ...state,
                isLoggingIn: true,
                loginError: false,
            };
        case AuthActionType.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                isAuthenticated: true,
                user: action.user,
            };
        case AuthActionType.LOGIN_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                isAuthenticated: false,
                loginError: true,
            };
        case AuthActionType.LOGOUT_REQUEST:
            return {
                ...state,
                isLoggingOut: true,
                logoutError: false,
            };
        case AuthActionType.LOGOUT_SUCCESS:
            return {
                ...state,
                isLoggingOut: false,
                isAuthenticated: false,
                isVerifying: false,
                user: {},
            };
        case AuthActionType.LOGOUT_FAILURE:
            return {
                ...state,
                isLoggingOut: false,
                logoutError: true,
            };
        case AuthActionType.VERIFY_REQUEST:
            return {
                ...state,
                isVerifying: true,
                verifyingError: false,
            };
        case AuthActionType.VERIFY_SUCCESS:
            return {
                ...state,
                isVerifying: false,
            };
        case AuthActionType.SET_GLOBAL_USER:
            return {
                ...state,
                user: action.user,
                isVerifying: false,
            };
        default:
            return state;
    }
};
