import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Navigation } from "../Navigation";
import { Projects } from '../Projects/';
import { Settings } from '../Settings/';
import { Help } from '../Help/';

export const Dashboard = () => (
  <Fragment>
    <Navigation />
    <Switch>
      <Route exact path="/" render={() => (
        <Redirect to="/projects" />
      )} />
      <Route path="/projects" component={Projects} />
      <Route path="/model" render={() => <div>Model Component</div>} />
      <Route path="/settings" component={Settings} />
      <Route path="/help" component={Help} />
    </Switch>
  </Fragment>
)
