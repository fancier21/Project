import * as ActionTypes from "../../actions/auth/types.js";

const initialState = {
  recoveringIn: false,
  recoveredIn: false,
  error: null
}

export function recovery(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.RECOVER_REQUEST:
      return {
        recoveringIn: true,
      };
    case ActionTypes.RECOVER_SUCCESS:
      return {
        recoveredIn: true,
        email: action.email
      };
    case ActionTypes.RECOVER_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}


