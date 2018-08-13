import React, {Component} from "react";
import { connect } from 'react-redux';
// /*sanna@sanna.com code*/
import './index.css';

import { sendQuestion } from '../../../../actions/help/'

class HelpForm extends Component {
    
    state = {
        name: '',
        email: '',
        message: ''
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ submitted: true });
        const { name, email, message } = this.state;
        this.props.sendQuestion({ name, email, message });
    };

    render()  {
        const { name, email, message, error } = this.state;
        return(
            <div className="form">
                <h3 className="form__title">Send us a question!</h3>

                {error && <p className="form__error">{error}</p>}

                <form onSubmit={this.handleSubmit}>
                    <div className="form-container">
                        <h1 className="form__label">Name</h1>
                        <input className="form__input"
                            name="name"
                            placeholder="Lorem ipsum"
                            type="text"
                            value={name}
                            onChange={this.handleChange}
                        />
                        <h1 className="form__label">Email</h1>
                        <input className="form__input"
                            name="email"
                            placeholder="Lorem ipsum"
                            type="text"
                            value={email}
                            onChange={this.handleChange}
                        />
                        <h1 className="form__label">message</h1>
                        <textarea className="form__textarea"
                            name="message"
                            placeholder="Lorem ipsum"
                            type="text"
                            value={message}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form__btn">
                        <button
                            className="form__submit"
                            disabled={!name || !email || !message || this.props.chenged}
                        >
                            Send
                        </button>
                        {this.props.sent ? 
                        <span className="sent">Question sent!</span> : ''}
                    </div>
                </form>
            </div>
        )
    }
}


const mapStateToProps = state => {
    const { sent, error } = state.help;
    return {
        sent,
        error
    };
}

const mapDispatchToProps = (dispatch) => ({
    sendQuestion: (help) => dispatch(sendQuestion(help))
});

const connectedHelpForm = connect(mapStateToProps, mapDispatchToProps)(HelpForm);

export { connectedHelpForm as HelpForm };





