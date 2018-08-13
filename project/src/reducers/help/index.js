import * as ActionTypes from '../../actions/help/types';


const initialState = {
  sending: false,
  sent: false,
  error: null
}

export function help(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SENT_QUESTION_REQUEST:
      return {
        ...state,
        sending: true
      };
    case ActionTypes.SENT_QUESTION_SUCCESS:
      return {
        ...state,
        sent: true,
        help: action.help
      };
    case ActionTypes.SENT_QUESTION_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state
  }
}