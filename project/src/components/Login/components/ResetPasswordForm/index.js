import React from 'react';
import { connect } from 'react-redux';

import { resetPassword } from '../../../../actions/auth';


class ResetPasswordForm extends Component {    
    constructor(props) {
        super(props);

        this.props.logout();

        this.state = {
            newPassword: '',
            repeatPassword: '',
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
        const { newPassword, repeatPassword } = this.state;
        this.props.resetPassword({ newPassword, repeatPassword });
    };

    render()  {
        const { error } = this.props;
        const { newPassword, repeatPassword, submitted} = this.state;
        return(
            <div className="Login">
                <h1 className="Login__logo">selko ai</h1>

                {error && <p className="Login__error">{error}</p>}

                <form onSubmit={this.handleSubmit} className="Login__form">
                    <input className="Login__input"
                        autoComplete="off"
                        name="newPassword"
                        placeholder="New Password"
                        type="newPassword"
                        value={newPassword}
                        onChange={this.handleChange}
                    />
                    {submitted && !newPassword && <div className="Login__error">Password is required</div>}
                    
                    <input className="Login__input"
                        autoComplete="off"
                        name="repeatPassword"
                        placeholder="Repeat Password"
                        type="repeatPassword"
                        value={repeatPassword}
                        onChange={this.handleChange}
                    />
                    {submitted && !repeatPassword && <div className="Login__error">Password is required</div>}

                    <div className="Login__actions">
                      <button
                        type="submit"
                        className="Login__submit"
                        disabled={!newPassword || !repeatPassword}>
                        Reset
                      </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { resetedIn, error } = state.reset;
    return {
        resetedIn,
        error
    };
}

const mapDispatchToProps = (dispatch) => ({
    resetPassword: (reset) => dispatch(resetPassword(reset)),
});

const ConnectedResetPasswordForm = connect(mapStateToProps, mapDispatchToProps)(ResetPasswordForm);

export { ConnectedResetPasswordForm as ResetPasswordForm }


