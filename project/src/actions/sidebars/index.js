// @flow

import * as ActionTypes from "./types";

export const openSidebarAddProject = () => ({
  type: ActionTypes.OPEN_SIDEBAR_ADD_PROJECT_SUCCESS,
});

export const closeSidebarAddProject = () => ({
  type: ActionTypes.CLOSE_SIDEBAR_ADD_PROJECT_SUCCESS,
});

export const openSidebarDeleteProject = () => ({
  type: ActionTypes.OPEN_SIDEBAR_DELETE_PROJECT_SUCCESS,
});

export const closeSidebarDeleteProject = () => ({
  type: ActionTypes.CLOSE_SIDEBAR_DELETE_PROJECT_SUCCESS,
});