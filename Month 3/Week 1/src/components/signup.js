import React, { Component } from "react";
import funcs from "./function";
import "./signup.css";

class signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      nameError: "",
      mailError: "",
      passwordError: "",
    };
  }

  updateName = (event) => {
    this.setState({
      name: event.target.value,
      nameError: "",
    });
  };

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
    let cc = event.target.value;
    this.setState({
      password: event.target.value,
      passwordError: funcs.checkPassword(cc),
    });

    if (cc === "") {
      this.setState({
        passwordError: "",
      });
    }
  };

  updatePasswordError = (msg) => {
    this.setState({
      passwordError: msg,
    });
  };

  stopClick = (event) => {
    event.preventDefault();
    if (this.state.name === "") {
      this.setState({
        nameError: "Cannot be empty",
      });
    } else if (this.state.email === "") {
      this.setState({
        mailError: "Cannot be empty",
      });
    } else if (this.state.password.length === 0) {
      this.setState({
        passwordError: "Cannot be empty",
      });
    } else if (this.state.mailError !== "No errors") {
      console.log("SignUp - Invalid mail syntax");
    } else if (this.state.passwordError !== "No errors") {
      console.log("Signup - Invalid password syntax");
    } else if (
      this.state.mailError === "No errors" &&
      this.state.passwordError === "No errors"
    ) {
      document.querySelector("#alert-signup").style.display = "flex";
      setTimeout(() => {
        console.log("Submitting login form");
        event.target.form.requestSubmit();
      }, 3000);
    }
  };

  render() {
    return (
      <form className="signup">
        <label id="alert-signup">SignUp Successful!!</label>
        <h1 className="signup-heading">Sign-UP</h1>
        <label className="label">Name</label>
        <input
          onChange={this.updateName}
          className="input"
          type="text"
          placeholder=""
        />
        <label className="error">{this.state.nameError}</label>
        <label className="label mt-custom">Email ID</label>
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
          Signup
        </button>
      </form>
    );
  }
}

export default signup;
