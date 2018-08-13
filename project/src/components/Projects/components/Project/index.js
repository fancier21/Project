// @flow

import React from "react";

import './index.css'

type Props = {
  selectedProject: Object,
  project: Object
}

export const Project = (props: Props) => (
  <div className={`Project ${props.selectedProject.some(item => item === props.project.projectId) ? "Project--selected" : ""}`}
       onClick={(e) => props.selectProject(e, props.project.projectId)}>
    <div className="Project__container">
      <div className="Project__text-block">
        <p className="Project__title">{props.project.projectName}</p>
        <p className="Project__text">{props.project.sourceCount} documents</p>
      </div>
      <p className="Project__date">Updated 12.2.2018</p>
    </div>
  </div>
);