import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../../history';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from '../Login';
import { RecoveryForm } from '../Login/components/RecoveryForm/index.js';
import { Dashboard } from '../Dashboard';
// import { ResetPasswordForm } from '../Login/components/ResetPasswordForm/index.js';

import './index.css'

class Main extends React.Component {
    componentDidMount () {
      const { loggedIn } = this.props;
      (!loggedIn && history.replace('/login'));
    }
    render() {
        return (
            <div className="Page">
                <Router history={history}>
                    <div>
                        <Switch>
                            <Route path="/login" component={Login} />
                            <Route path="/forgot-password" component={RecoveryForm} />
                            <PrivateRoute path="/" component={Dashboard} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggedIn } = state.authentication;
    return {
        loggedIn
    };
}

const connectedMain = connect(mapStateToProps)(Main);
export { connectedMain as Main };
