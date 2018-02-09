import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };

        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleFormSubmit(event) {
        event.preventDefault();

        console.log(this.state);
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
