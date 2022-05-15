import React from "react";
import "./LoginForm.css"
import Button from 'react-bootstrap/Button';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "" };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        alert("Email: " + this.state.email + ", Password: " + this.state.password)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Login to your account</h1>
                <input type="text"
                    placeholder="Email"
                    onChange={this.handleEmailChange}
                    className="textbox" />
                <br />
                <input type="text"
                    placeholder="Password"
                    onChange={this.handlePasswordChange}
                    className="textbox" />
                <br />
                {/* This is using the pre-made button Components from Bootstrap */}
                <Button type="submit" variant="danger" onClick={this.handleSubmit}>
                    Login
                </Button>
            </form>
        );
    }
}

export default LoginForm;