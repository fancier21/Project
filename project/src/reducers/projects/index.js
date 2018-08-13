// @flow

import * as ActionTypes from "../../actions/projects/types";

export function projects(state = [], action) {
  const { type } = action;

  switch (type) {
    case ActionTypes.LOAD_PROJECTS_SUCCESS:
      return action.projects;
    case ActionTypes.ADD_PROJECT_SUCCESS:
      return [...state, action.project];
    case ActionTypes.DELETE_PROJECTS_SUCCESS:
      return state.filter(project => project.projectIds !== action.projectIds);
    default:
      return state;
  }
}
