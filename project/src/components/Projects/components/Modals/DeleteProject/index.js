// @flow

import React, {Component} from "react";
import { connect } from 'react-redux';
import { deleteProjectsRequest } from "../../../../../actions/projects";
import { closeSidebarDeleteProject } from "../../../../../actions/sidebars";

import './index.css'

type Props = {}

type State = {}

class DeleteProject extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { selectedProjectIds } = this.props;
    this.props.deleteProjectsRequest(selectedProjectIds);
  };

  closeSidebar = (e) => {
    e.preventDefault();
    this.props.closeSidebarDeleteProject();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} name="deleteProject" className="DeleteProject">
        <div className="DeleteProject__header">
          <p className="DeleteProject__title">Delete project</p>
          <button className="DeleteProject__button" onClick={this.closeSidebar}/>
        </div>
        <div className="DeleteProject__content">
          <h1>
            You are about to delete 3 projects
          </h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut.
          </h2>
        </div>
        <div className="DeleteProject__footer">
          <button type="submit" className="DeleteProject__submit">
            <svg className="DeleteProject__submit-icon" version="1.0" width="158.000000pt"
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
            <span className="DeleteProject__submit-text">CONFIRM</span>
          </button>
          <button type="reset" className="DeleteProject__reset" onClick={this.closeSidebar}>
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
  deleteProjectsRequest: (projects) => dispatch(deleteProjectsRequest(projects)),
  closeSidebarDeleteProject: () => dispatch(closeSidebarDeleteProject())
});

const ConnectedDeleteProject = connect(mapStateToProps, mapDispatchToProps)(DeleteProject);

export {ConnectedDeleteProject as DeleteProject}