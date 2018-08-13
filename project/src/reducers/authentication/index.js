import * as ActionTypes from "../../actions/auth/types.js";

let user = JSON.parse(localStorage.getItem('__selko_user__'));
const initialState = user ? { loggedIn: true, error: null, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        user: action.user
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: action.user
      };
    case ActionTypes.LOGIN_FAILURE:
    console.log(action.error)
      return {
        ...state,
        error: action.error
      };
    case ActionTypes.LOGOUT:
      return {};
    default:
      return state
  }
}




// import * as ActionTypes from "../../actions/auth/types.js";

// export function authentication(state = [], action) {
//   const { type } = action;

//   switch (type) {
//       case ActionTypes.LOGIN_SUCCESS:
//       return [...state, action.userData];
//     default:
//       return state;
//   }
// }



// import { userConstants } from '../../actions/auth/types';

// let user = JSON.parse(localStorage.getItem('__selko_user__'));
// const initialState = user ? { loggedIn: true, user } : {};

// export function authentication(state = initialState, action) {
//   switch (action.type) {
//     case userConstants.LOGIN_REQUEST:
//       return {
//         loggingIn: true,
//         user: action.user
//       };
//     case userConstants.LOGIN_SUCCESS:
//       return {
//         loggedIn: true,
//         user: action.user
//       };
//     case userConstants.LOGIN_FAILURE:
//       return {
//         error: action.error
//       };
//     case userConstants.LOGOUT:
//       return {};
//     default:
//       return state
//   }
// }