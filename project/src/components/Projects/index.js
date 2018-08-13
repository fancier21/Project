// @flow

import React, {Component} from "react";
import { connect } from "react-redux";
import { fetchProjects } from "../../actions/projects";
import { openSidebarAddProject } from "../../actions/sidebars";
import { Project, AddProject, DeleteProject } from "./components"
import { RightSidebar } from "../Shared/RightSidebar"

import './index.css'

type Props = {}

type State = {}

class Projects extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedProjects: []
    };
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  selectProject = (e, id) => {
    const projects = [];
    const selectedProjects = this.state.selectedProjects;

    if (e.ctrlKey) {
      if (!selectedProjects.includes(id)) {
        projects.push(id);
        this.setState(prevState => ({ selectedProjects: [...prevState.selectedProjects, ...projects] }));
      } else {
        this.setState({ selectedProjects: selectedProjects.filter(item => item !== id) });
      }
    } else {
      this.setState({ selectedProjects: [id] });
    }
  };

  selectAllProjects = () => {
    this.setState({ selectedProjects: this.props.projects.map(item => item.projectId)});
  };

  deselectAllProjects = () => {
    this.setState({ selectedProjects: []});
  };

  render() {
    const { projects, openSidebarAddProject, sidebars } = this.props;
    const { selectedProjects } = this.state;
    return (
      <div className="Projects">
        <div className="Projects__container">
          <div className="Projects__header">
            <p className="Projects__text">8 projects - Last updated 12.6.2018</p>
            <div className="Projects__button-group">
              <button className="Projects__button" onClick={this.deselectAllProjects}>
                <p className="Projects__button-text">Deselect All</p>
              </button>
              <p className="Projects__button-text">({selectedProjects.length} projects selected)</p>
              <button className="Projects__button Projects__button-select" onClick={this.selectAllProjects}>
                <p className="Projects__button-text">Select All</p>
              </button>
            </div>
          </div>
          <div className="Projects__content">
            {projects && projects.map(item => (
              <Project
                project={item}
                key={item.projectId}
                selectProject={this.selectProject}
                selectedProject={selectedProjects}
                id="Project"/>
            ))}
            <div className="Projects__project-add" onClick={() => openSidebarAddProject()}/>
          </div>
        </div>
        <RightSidebar openRightSidebar={sidebars.addProject}>
            <AddProject/>
        </RightSidebar>
        <RightSidebar openRightSidebar={sidebars.deleteProject} >
          <DeleteProject selectedProjectId={selectedProjects}/>
        </RightSidebar>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  projects: state.projects,
  sidebars: state.sidebars,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => dispatch(fetchProjects()),
  openSidebarAddProject: () => dispatch(openSidebarAddProject())
});

const ConnectedProjects = connect(mapStateToProps, mapDispatchToProps)(Projects);

export { ConnectedProjects as Projects }
