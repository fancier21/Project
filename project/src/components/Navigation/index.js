// @flow

import React, {Component} from "react";
import {connect} from 'react-redux';
import { NavLink } from "react-router-dom";
import { openSidebarAddProject, openSidebarDeleteProject} from "../../actions/sidebars";
import img from "../../assets/icons/logo/SELKO_AI-logo_CMYK_WHITE.svg"

import './index.css'

type Props = {}

type State = {
  openLeftSidebar: boolean
}

class Navigation extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      openLeftSidebar: false
    };
  }

  openLeftSidebar() {
    this.setState({ openLeftSidebar: !this.state.openLeftSidebar });
  }

  render() {
    const { openSidebarAddProject, openSidebarDeleteProject } = this.props;
    return (
      <div className="Navigation">
        <div className={`Navigation__container ${this.state.openLeftSidebar ? "Navigation__container--opened" : ""}`}>
          <div className="Navigation__sidebar">
            <div className="Navigation__sidebar-container">
              <div className="Navigation__text-block">
                <div className="Navigation__sidebar-block">
                  <NavLink to="/projects" className="Navigation__nav-link">PROJECTS</NavLink>
                  <NavLink to="/model" className="Navigation__nav-link">MODEL</NavLink>
                </div>
                <div>
                  <NavLink to="/settings" className="Navigation__nav-link">SETTINGS</NavLink>
                  <NavLink to="/help" className="Navigation__nav-link">HELP</NavLink>
                  <NavLink to="/login" className="Navigation__nav-link">LOGOUT</NavLink>
                </div>
              </div>
              <img src={img} className="Navigation__logo"/>
            </div>
          </div>
          <div className="Navigation__buttons">
            <button className="Navigation__button" onClick={() => this.openLeftSidebar()}>
              <svg className="Navigation__svg" version="1.0" width="156.000000pt"
                   height="157.000000pt" viewBox="0 0 156.000000 157.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,157.000000) scale(0.100000,-0.100000)"
                   fill="#000000" stroke="none">
                  <path d="M0 785 l0 -785 780 0 780 0 0 785 0 785 -780 0 -780 0 0 -785z m1075
                    250 l0 -40 -292 -3 -293 -2 0 45 0 45 293 -2 292 -3 0 -40z m5 -125 l0 -40
                    -295 0 -295 0 0 40 0 40 295 0 295 0 0 -40z m-2 -127 l3 -43 -295 0 -296 0 0
                    45 0 45 293 -2 292 -3 3 -42z m-3 -128 l0 -40 -292 -3 -293 -2 0 45 0 45 293
                    -2 292 -3 0 -40z m-295 -125 l0 -40 -145 0 -145 0 0 40 0 40 145 0 145 0 0
                    -40z"
                  />
                </g>
              </svg>
            </button>
            <NavLink to="/model" className="Navigation__button">
              <svg className="Navigation__svg" version="1.0" width="156.000000pt"
                   height="157.000000pt" viewBox="0 0 156.000000 157.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,157.000000) scale(0.100000,-0.100000)"
                   fill="black
                   " stroke="none">
                  <path d="M0 785 l0 -785 780 0 780 0 0 785 0 785 -780 0 -780 0 0 -785z m698
                    253 l-3 -43 -62 -3 -63 -3 0 -59 0 -60 -45 0 -45 0 0 105 0 105 111 0 110 0
                    -3 -42z m382 -63 l0 -105 -45 0 -45 0 0 60 0 59 -62 3 -63 3 -3 43 -3 42 110
                    0 111 0 0 -105z m-510 -340 l0 -65 65 0 65 0 0 -40 0 -40 -110 0 -110 0 0 105
                    0 105 45 0 45 0 0 -65z m508 -42 l3 -103 -111 0 -110 0 0 40 0 40 65 0 65 0 0
                    66 0 65 43 -3 42 -3 3 -102z"
                  />
                </g>
              </svg>
            </NavLink>
            <button className="Navigation__button" onClick={() => openSidebarAddProject()}>
              <svg className="Navigation__svg" version="1.0" width="158.000000pt" height="158.000000pt"
                   viewBox="0 0 158.000000 158.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,158.000000) scale(0.100000,-0.100000)"
                   fill="#000000" stroke="none">
                  <path d="M0 795 l0 -785 785 0 785 0 0 785 0 785 -785 0 -785 0 0 -785z m830
                    165 l0 -130 125 0 125 0 0 -40 0 -40 -125 0 -125 0 0 -125 0 -125 -45 0 -45 0
                    0 125 0 125 -125 0 -125 0 0 40 0 40 125 0 125 0 0 123 c0 68 3 127 7 130 3 4
                    24 7 45 7 l38 0 0 -130z"
                  />
                </g>
              </svg>
            </button>
            <button className="Navigation__button" onClick={() => openSidebarDeleteProject()}>
              <svg className="Navigation__svg" version="1.0" width="157.000000pt" height="157.000000pt"
                   viewBox="0 0 157.000000 157.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,157.000000) scale(0.100000,-0.100000)"
                   fill="#000000" stroke="none">
                  <path d="M0 785 l0 -785 785 0 785 0 0 785 0 785 -785 0 -785 0 0 -785z m1080
                    0 l0 -45 -295 0 -295 0 0 45 0 45 295 0 295 0 0 -45z"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = (dispatch) => ({
  openSidebarAddProject: () => dispatch(openSidebarAddProject()),
  openSidebarDeleteProject: () => dispatch(openSidebarDeleteProject())
});

const ConnectedNavigation = connect(mapStateToProps, mapDispatchToProps)(Navigation);

export { ConnectedNavigation as Navigation }