import React, {Component} from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { login, logout } from "../../actions/auth";


import './index.css'

class Login extends Component {    
    constructor(props) {
        super(props);

        this.props.logout();

        this.state = {
            email: '',
            password: '',
            submitted: false
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        this.props.login({ email, password });
    };

    render()  {
        const { error } = this.props;
        const { email, password, submitted} = this.state;
        return(
            <div className="Login">
                <h1 className="Login__logo">selko ai</h1>

                {error && <p className="Login__error">{error}</p>}

                <form onSubmit={this.handleSubmit} className="Login__form">
                    <input className="Login__input"
                        autoComplete="off"
                        name="email"
                        placeholder="Email"
                        type="text"
                        value={email}
                        onChange={this.handleChange}
                    />
                    {submitted && !email && <p className="Login__error">Email is required</p>}

                    <input className="Login__input"
                        autoComplete="off"
                        name="password"
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    {submitted && !password && <div className="Login__error">Password is required</div>}

                    <div className="Login__actions">
                      <button
                        type="submit"
                        className="Login__submit"
                        disabled={!password || !email}>
                        Login
                      </button>
                    </div>

                    <Link to="/forgot-password" className="Login__button Login__forgot-password">
                        Forgot password?
                    </Link>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { error } = state.authentication;
    return {
        error
    };
}

const mapDispatchToProps = (dispatch) => ({
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout())
});

const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);

export { ConnectedLogin as Login }




