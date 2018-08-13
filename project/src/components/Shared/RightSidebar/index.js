// @flow

import React from "react";
import {connect} from 'react-redux';

import './index.css'

type Props = {
  openRightSidebar: boolean,
}

const RightSidebar = (props: Props) => (
  <div className={`RightSidebar ${props.openRightSidebar ? "RightSidebar--opened" : ""}`}>
    <div className="RightSidebar__container">
      {props.children}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  state
});

const connectedRightSidebar = connect(mapStateToProps)(RightSidebar);

export {connectedRightSidebar as RightSidebar};