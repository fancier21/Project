import * as ActionTypes from "../../actions/auth/types.js";

const initialState = {
  resetingIn: false,
  resetedIn: false,
  error: null
}

export function reset(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.RESET_REQUEST:
      return {
        resetingIn: true
      };
    case ActionTypes.RESET_SUCCESS:
      return {
        resetedIn: true,
        password: action.reset
      };
    case ActionTypes.RESET_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}


