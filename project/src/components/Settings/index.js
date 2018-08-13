import React, {Component} from "react";
import { connect } from 'react-redux';

import './index.css';
import { Footer } from './components/Footer'

import { changeSettings } from '../../actions/settings/'

class Settings extends Component {
    
    state = {
        name: '',
        email: '',
        password: ''
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ submitted: true });
        const { name, email, password } = this.state;
        this.props.changeSettings({ name, email, password });
    };

    render()  {
        const { name, email, password } = this.state;
        const { changed, error } = this.props;
        return(
            <div className="wrapper">
            <div className="Settings">
                <h3 className="Settings__title">Settings</h3>
                <h6 className="Settings__subtitle">Change your user name, email address or password</h6>
                
                {error && <p className="Settings__error">{error}</p>}

                <form onSubmit={this.handleSubmit} className="Settings__form">
                    <div>
                        <h1 className="Settings__label">Name</h1>
                        <input className="Settings__input"
                            name="name"
                            placeholder="Lorem ipsum"
                            type="text"
                            value={name}
                            onChange={this.handleChange}
                        />
                        <h1 className="Settings__label">Email</h1>
                        <input className="Settings__input"
                            name="email"
                            placeholder="Lorem ipsum"
                            type="text"
                            value={email}
                            onChange={this.handleChange}
                        />
                        <h1 className="Settings__label">Password</h1>
                        <input className="Settings__input"
                            name="password"
                            placeholder="Lorem ipsum"
                            type="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button
                            className="Settings__submit"
                            disabled={!name || !email || !password || changed}
                        >
                            Save
                        </button>
                        {changed ? 
                            <span className="Settings__saved">Settings saved!</span> : ''}
                    </div>
                </form>
            </div>
            <Footer />
            </div>
        )
    }
}


const mapStateToProps = state => {
    const { chenged, error } = state.settings;
    return {
        chenged,
        error 
    };
}

const mapDispatchToProps = (dispatch) => ({
    changeSettings: (settings) => dispatch(changeSettings(settings))
});

const connectedSettings = connect(mapStateToProps, mapDispatchToProps)(Settings);

export { connectedSettings as Settings };

