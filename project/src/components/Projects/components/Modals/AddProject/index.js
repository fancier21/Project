// @flow

import React, {Component} from "react";
import {connect} from 'react-redux';
import {addProjectRequest} from "../../../../../actions/projects";
import {closeSidebarAddProject} from "../../../../../actions/sidebars";

import './index.css'

type Props = {}

type State = {}

class AddProject extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      projectName: '',
      projectDescription: ''
    };
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {projectName, projectDescription} = this.state;
    this.props.addProjectRequest({projectName, projectDescription});
  };

  closeSidebar = (e) => {
    e.preventDefault();
    this.props.closeSidebarAddProject();
  };

  render() {
    const {projectName, projectDescription} = this.state;
    return (
      <form
        onSubmit={this.handleSubmit}
        name="addProject"
        className="AddProject">
        <div className="AddProject__header">
          <p className="AddProject__title">Add project</p>
          <button className="AddProject__button" onClick={this.closeSidebar}/>
        </div>
        <div className="AddProject__content">
          <h1>Project name</h1>
          <input
            name="projectName"
            className="AddProject__input"
            placeholder="Lorem ipsum"
            type="text"
            value={projectName}
            onChange={this.handleChange}
          />
          <h1>Project description</h1>
          <input
            name="projectDescription"
            className="AddProject__input"
            placeholder="Lorem ipsum"
            type="text"
            value={projectDescription}
            onChange={this.handleChange}
          />
        </div>
        <div className="AddProject__footer">
          <button type="submit" className="AddProject__submit">
            <svg className="AddProject__submit-icon" version="1.0" width="158.000000pt"
                 height="158.000000pt" viewBox="0 0 158.000000 158.000000"
                 preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,158.000000) scale(0.100000,-0.100000)"
                 fill="#000000" stroke="none">
                <path d="M0 795 l0 -785 785 0 785 0 0 785 0 785 -785 0 -785 0 0 -785z m830
                                    165 l0 -130 125 0 125 0 0 -40 0 -40 -125 0 -125 0 0 -125 0 -125 -45 0 -45 0
                                    0 125 0 125 -125 0 -125 0 0 40 0 40 125 0 125 0 0 123 c0 68 3 127 7 130 3 4
                                    24 7 45 7 l38 0 0 -130z"/>
              </g>
            </svg>
            <span className="AddProject__submit-text">CONFIRM</span>
          </button>
          <button type="reset" className="AddProject__reset" onClick={this.closeSidebar}>
            Cancel
          </button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = (dispatch) => ({
  addProjectRequest: (project) => dispatch(addProjectRequest(project)),
  closeSidebarAddProject: () => dispatch(closeSidebarAddProject())
});

const ConnectedAddProject = connect(mapStateToProps, mapDispatchToProps)(AddProject);

export {ConnectedAddProject as AddProject}