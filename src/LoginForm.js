import React from "react";
import "./LoginForm.css";
import Header from "./components/Header";
import Button from "react-bootstrap/Button";
import axios from "axios";

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

  async handleSubmit(e) {
    e.preventDefault();
    await axios
      .post("http://localhost:3001/users/authenticate", this.state)
      .then((res) => {
        if (res.data.length > 0) {
          alert("success");
        } else {
          alert("password and email not matching");
        }
      })
      .catch((err) => {
        console.log("error");
      });
  }

  render() {
    return (
      <div>
        <Header btn="Register" href="https://www.google.com/" />

        <form onSubmit={this.handleSubmit} className="form-area center">
          <h1>
            <b>Login to your account</b>
          </h1>
          <input
            placeholder="Email"
            type="text"
            size="100px"
            onChange={this.handleEmailChange}
            className="textbox"
          />
          <br />

          <input
            placeholder="Password"
            type="password"
            onChange={this.handlePasswordChange}
            className="textbox"
          />
          <br />

          <div className="right-align">
            <a href="https://www.google.com/">Forgot My Password</a>
            <br />

            {/* This is using the pre-made button Components from Bootstrap */}
            <Button
              type="submit"
              variant="danger"
              onClick={this.handleSubmit}
              className="rounded-pill login-button"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
