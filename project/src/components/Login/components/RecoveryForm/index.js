import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { recover } from '../../../../actions/auth/';

class RecoveryForm extends React.Component {

    state = {
        email: '',
        isIncorrectEmail: false
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const { email } = this.state;

        let regex = /\S+@\S+\.\S+/;

        if(regex.test(email) && email) {
          this.props.recover(email)
        } else {
          this.setState({isIncorrectEmail: true})
        }
    };

    render() {
        const { email, isIncorrectEmail } = this.state;
        const { recoveredIn, error } = this.props;
        return (
            <div className="Login">
                <h1 className="Login__logo">selko ai</h1>
                {!recoveredIn ?
                    <div>
                        <p className="Login__text">
                            Please enter your email to reset our password.
                            You'll receive an email with instructions.
                        </p>
                        <p className="Login__text">
                            If you are experiencing problems, please
                            contact us at
                            <Link to="/help" className="Login__link" style={{marginLeft: '5px'}}>
                                Selko Support.
                            </Link>
                        </p>

                         {error && <p className="Login__error">{error}</p>}
                        
                        <form onSubmit={this.handleSubmit} className="Login__form">
                            <input className="Login__input"
                                type="text"
                                name="email"
                                value={email}
                                placeholder="email"
                                onChange={this.handleChange}
                            />
                            {isIncorrectEmail &&
                                <p className="Login__error">
                                  Please enter a correct email example@mail.com
                                </p>
                            }
                            <div className="Login__actions">
                              <button className="Login__submit" disabled={!email}>Recover</button>
                            </div>
                        </form>
                    </div>
                    : (
                        <div>
                            <p className="Login__text">
                                Lorem ipsum dolor sit amet, consectetur ad
                                ipiscing elit, sed do eiusmod tempor.
                            </p>
                            <Link to="/login" className="Login__button Login__button--active">Back to login</Link>
                        </div>
                    )
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { recoveringIn, recoveredIn, error } = state.recovery;
    return {
        recoveringIn,
        recoveredIn,
        error
    };
}

const connectedRecoveryForm = connect(mapStateToProps, { recover })(RecoveryForm);
export { connectedRecoveryForm as RecoveryForm };

