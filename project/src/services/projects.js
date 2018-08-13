// @flow

import {API} from "./instance"
import {APIUrlencoded} from "./instance"

export const loadProjects = () => {
  const url = `/project/list`;
  return API.get(url).then(({data}) => data.result);
};

export const addProject = (project) => {
  const url = `/project/create`;
  const data = {
    name: project.projectName,
    description: project.projectDescription
  };
  return APIUrlencoded.post(url, data).then(({data}) => data.result)
};

export const deleteProjects = (projectId) => {
  const url = `/project/delete`;
  const data = {
    projectIds: projectId
  };
  return APIUrlencoded.post(url, data).then(({data}) => data)
};
