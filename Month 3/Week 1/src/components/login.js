import React, { Component } from "react";
import "./login.css";
import funcs from "./function";

class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      mailError: "",
      passwordError: "",
    };
  }

  updateMail = (event) => {
    let p = event.target.value; 
    this.setState({
      email: event.target.value,
      mailError: funcs.checkEmail(p),
    });

    if (p === "") {
      
      this.setState({
        mailError: "",
      });
    }
  };

  updatePassword = (event) => {
    this.setState({
      password: event.target.value,
      passwordError: "",
    });
  };

  updatePasswordError = (msg) => {
    this.setState({
      passwordError: msg,
    });
  };

  stopClick = (event) => {
    event.preventDefault();
    if (this.state.email === "") {
      this.setState({
        mailError: "Cannot be empty",
      });
    } else if (this.state.password.length === 0) {
      this.setState({
        passwordError: "Cannot be empty",
      });
    } else if (this.state.mailError !== "No errors") {
      console.log("Login - Invalid mail syntax");
    } else if (this.state.password !== "macbook") {
      event.preventDefault();
      this.updatePasswordError("Wrong Password");
    } else {
      document.querySelector("#alert").style.display = "flex";
      setTimeout(() => {
        console.log("Submitting login form");
        event.target.form.requestSubmit();
      }, 3000);
    }
  };

  render() {
    return (
      <form className="login">
        <label id="alert">Login Successful </label>
        <h1 className="login-heading">Login</h1>
        <label className="label">Email ID</label>
        <input
          onChange={this.updateMail}
          className="input"
          type="text"
          placeholder=""
        />
        <label className="error">{this.state.mailError}</label>
        <label className="label mt-custom">Password</label>
        <input
          onChange={this.updatePassword}
          className="input"
          type="password"
          placeholder=""
        />
        <label className="error">{this.state.passwordError}</label>
        <button onClick={this.stopClick} className="btn" type="submit">
          Login
        </button>
      </form>
    );
  }
}

export default login;
