import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import isEmail from 'validator/lib/isEmail';

export default class Login extends Component {
    state = { email: '', password: '', errors: {} };
    handleFieldChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    validateUserInput = userData => {
        // email is required, password is required
        // valid email, password > 8 characters.
        let errors = { email: [], password: [] };
        if (!userData.email) {
            errors.email.push('The email is required');
        }
        if (!userData.password) {
            errors.password.push('The password is required');
        }
        if (!isEmail(userData.email)) {
            errors.email.push('The email must be a valid email address.');
        }
        if (userData.password.length < 8) {
            errors.password.push('The password must be 8 characters or more.');
        }

        return errors;
    }

    renderErrorsFor = field => {
        if (this.state.errors[field]) {
            return this.state.errors[field].map(error => (
                <span key={error}>
                    <small style={{ color: "#E27C3E" }}>{error}</small> <br />
                </span>
            ));
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        const errors = this.validateUserInput(this.state);
        if (errors.email.length > 0 || errors.password.length > 0) {
            this.setState({
                errors
            });
            return;
        }

        // post the data to the server.
        axios.post('/login', this.state).then(response => {
            window.location = '/';
        }).catch(error => {
            this.setState({
                errors: error.response.data.errors
            });
        });
    }
    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h3 className="text-center my-5">Login</h3>
                <div className="form-group row">
                    <label htmlFor="staticEmail" className="col-sm-3 col-form-label">Email</label>
                    <div className="col-sm-9">
                        <input
                            type="text"
                            className="form-control"
                            id="staticEmail"
                            placeholder="email@example.com"
                            name="email"
                            onChange={this.handleFieldChange}
                        />
                        {this.renderErrorsFor('email')}
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Password</label>
                    <div className="col-sm-9">
                        <input
                            type="password"
                            className="form-control"
                            id="inputPassword"
                            placeholder="Password"
                            name="password"
                            onChange={this.handleFieldChange}
                        />
                        {this.renderErrorsFor('password')}
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label" />
                    <div className="col-sm-9">
                        <button className="btn btn-primary form-control" type="submit">Login</button>
                    </div>
                </div>
            </form>
        );
    }
}

if (document.getElementById('login')) {
    ReactDOM.render(<Login />, document.getElementById('login'));
}
