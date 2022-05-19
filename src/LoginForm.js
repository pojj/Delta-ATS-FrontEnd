import React from "react";
import "./LoginForm.css"
import Header from "./components/Header";
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
            <div>
                <Header btn="Click Me" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />

                <form onSubmit={this.handleSubmit}>
                    <h1><b>Login to your account</b></h1>
                    <input
                        placeholder="Email"
                        onChange={this.handleEmailChange}
                        className="textbox" />
                    <br />

                    <input
                        placeholder="Password"
                        onChange={this.handlePasswordChange}
                        className="textbox" />
                    <br />

                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Forgot My Password</a>
                    <br />

                    {/* This is using the pre-made button Components from Bootstrap */}
                    <Button type="submit" variant="danger" onClick={this.handleSubmit} className="rounded-pill">
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}

export default LoginForm;