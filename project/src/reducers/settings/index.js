import * as ActionTypes  from '../../actions/settings/types';


const initialState = {
  chenging: false,
  chenged: false,
  error: null
}

export function settings(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_SETTINGS_REQUEST:
      return {
        ...state,
        chenging: true
      };
    case ActionTypes.CHANGE_SETTINGS_SUCCESS:
      return {
        ...state,
        chenged: true,
        settings: action.settings
      };
    case ActionTypes.CHANGE_SETTINGS_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state
  }
}