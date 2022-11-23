import "./App.css";
import React, { Component } from "react";
import Login from "./components/login";
import Signup from "./components/signup";

let counter = 0;

class MainDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      div: <Login />,
      changerMessage: "Need an account?",
      buttonText: "SignUp",
    };
  }

  updateState = () => {
    if (counter % 2 === 0) {
      this.setState({
        div: <Signup />,
        changerMessage: "Already have an account?",
        buttonText: "Login",
      });
      counter++;
    } else {
      this.setState({
        div: <Login />,
        changerMessage: "Need an account?",
        buttonText: "SignUp",
      });
      counter--;
    }
  };

  render() {
    return (
      <div className="Main">
        <div className="content">{this.state.div}</div>
        <div className="changer">
          <p className="p-changer">{this.state.changerMessage}</p>
          <button className="btn-changer" onClick={this.updateState}>
            {this.state.buttonText}
          </button>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <MainDiv />
    </div>
  );
}

export default App;
