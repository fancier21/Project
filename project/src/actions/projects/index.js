// @flow

import * as ActionTypes from "./types";
import * as API from "../../services/projects";

export const fetchProjects = () => (dispatch) => {
  API.loadProjects().then(result => {
    dispatch(loadProjects(result))
  });
};

export const loadProjects = projects => ({
    type: ActionTypes.LOAD_PROJECTS_SUCCESS,
    projects
});

export const addProjectRequest = (project) => (dispatch) => {
    API.addProject(project).then(project => {
        dispatch(addProject(project))
    });
};

export const addProject = project => ({
    type: ActionTypes.ADD_PROJECT_SUCCESS,
    project
});

export const deleteProjectsRequest = (projectIds) => (dispatch) => {
  API.deleteProjects(projectIds).then(() => {
    dispatch(deleteProjects(projectIds))
  });
};

export const deleteProjects = projectIds => ({
  type: ActionTypes.DELETE_PROJECTS_SUCCESS,
  projectIds
});
