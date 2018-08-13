// @flow

import * as ActionTypes from "../../actions/sidebars/types";

export function sidebars(state = {}, action) {
  const { type } = action;

  switch (type) {
    case ActionTypes.OPEN_SIDEBAR_ADD_PROJECT_SUCCESS:
      return {
        ...state,
        addProject: true
      };
    case ActionTypes.CLOSE_SIDEBAR_ADD_PROJECT_SUCCESS:
      return {
        ...state,
        addProject: false
      };
    case ActionTypes.OPEN_SIDEBAR_DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        deleteProject: true
      };
    case ActionTypes.CLOSE_SIDEBAR_DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        deleteProject: false
      };
    default:
      return state;
  }
}
