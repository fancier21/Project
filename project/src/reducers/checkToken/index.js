import * as ActionTypes from "../../actions/auth/types.js";


const initialState = {
  checkingTokenIn: false,
  checkedTokenIn: false,
  error: null
}

export function checkToken(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CHECK_TOKEN_REQUEST:
      return {
        checkingTokenIn: true,
        userToken: action.userToken
      };
    case ActionTypes.CHECK_TOKEN_SUCCESS:
      return {
        checkedTokenIn: true,
        userToken: action.userToken
      };
    case ActionTypes.CHECK_TOKEN_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}