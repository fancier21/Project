import * as ActionTypes from "./types";
import * as API from "../../services/auth";
import { history } from '../../history.js';
import { logoutUser } from '../../services/auth.js';

// Login
export const login = (user) => (dispatch) => {
    API.loginRequest(user).then(user => {
        dispatch(loginRequest(user))
        history.push('/projects');
    })
    .catch(error => (
            dispatch({
                error: error.response.data.errorMessage || error.response.data.result,
                type: ActionTypes.LOGIN_FAILURE
            })
        ))
};

export const loginRequest = user => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        user
    }
};

// Logout
export function logout() {
    logoutUser();
    return { type: ActionTypes.LOGOUT };
}

// Recover
export const recover = (userRecover) => (dispatch) => {
    API.recoverRequest(userRecover).then(userRecover => {
        dispatch(recoverRequest(userRecover))
    })
    .catch(error => (
        dispatch({
            error: error.response.data.errorMessage,
            type: ActionTypes.RECOVER_FAILURE
        })
    ))
};

export function recoverRequest (userRecover) {
    return {
        type: ActionTypes.RECOVER_SUCCESS,
        userRecover
    }
}



// Reset
export const resetPassword = (reset) => (dispatch) => {
    API.resetPasswordRequest(reset).then(reset => {
        dispatch(resetPasswordRequest(reset))
    })
    .catch(error => (
        dispatch({
            error: error.response.data.result,
            type: ActionTypes.RESET_FAILURE
        })
    ))
};

export function resetPasswordRequest(reset) {
    console.log(reset)
    return {
        type: ActionTypes.RESET_SUCCESS,
        reset
    }
}




// Check Token
export const checkToken = (userToken) => (dispatch) => {
    API.checkTokenRequest(userToken).then(userToken => {
        dispatch(checkTokenRequest(userToken))
    })
    .catch(error => (
        dispatch({
            error: error.response.data.result,
            type: ActionTypes.CHECK_TOKEN_FAILURE
        })
    ))
};


function checkTokenRequest(userToken) {
    console.log(userToken)
    return {
        type: ActionTypes.CHECK_TOKEN_SUCCESS,
        userToken
    }
}


