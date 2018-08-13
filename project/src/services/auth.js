import { APIUrlencoded } from "./instance"
import { 
    setUser, 
    removeUser 
} from '../storage'

// Login
export const loginRequest = (user) => {
    console.log(user)
    const url = `/user/login`;
    const data = {
        email: user.email,
        password: user.password
    };

    return APIUrlencoded.post(url, data)
        .then(({data}) => setUser(data.result))
};

// Logout
export function logoutUser() {
    removeUser()
}

// Recover
export const recoverRequest = (userRecover) => {
    console.log(userRecover)
    const url = `/email/forgotPassword`;
    const data = {
        email: userRecover
    };

    return APIUrlencoded.post(url, data).then(({data}) => data.errorMessage)
};


// Reset
export const resetPasswordRequest = (reset) => {
    console.log(reset)
    const url = `/user/resetPassword`;
    const data = {
        password: reset
    };

    return APIUrlencoded.post(url, data).then(({data}) => data.result)
};



// Check Token
export const checkTokenRequest = (userToken) => {
    console.log(userToken)
    const url = `/user/verifyPasswordResetTokenValidity/`; /*${token}*/
    const data = {
        token: userToken
    };

    return APIUrlencoded.post(url, data).then(({data}) => data.result)
};


