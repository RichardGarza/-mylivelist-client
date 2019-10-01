import { Component } from "react";
import React from "react";

class Homepage extends Component {
  render() {
    return (
      <div>
        <h3>MyLiveList.</h3>
        <h6>The live grocery list for families.</h6>

        <button
          className="nav-link btn-primary m-auto"
          onClick={this.props.renderLoginPage.bind(this)}
        >
          Login
        </button>
        <br />
        <button
          className="nav-link btn-primary m-auto"
          onClick={this.props.renderSignUpPage.bind(this)}
        >
          SignUp
        </button>
      </div>
    );
  }
}

export default Homepage;
