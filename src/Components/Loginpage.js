import { Component } from "react";
import React from "react";
import axios from "axios";
const server = "https://my-live-list-server.herokuapp.com";
const localserver = "https://localhost:4000";

class Loginpage extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  loginRequest(event) {
    event.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*"
      }
    };
    const userCredentials = {
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post(`${localserver}/users`, userCredentials)
      .then(result => {
        console.log("Worked");
      })
      .catch(err => {
        console.log("Fucking Friday", err);
      });
  }

  componentDidMount() {
    axios
      .get(`${server}`)
      .then(response => {
        console.log(response.data.message);
      })
      .catch(err => {
        console.log("Shit", err);
      });
  }

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>Login</legend>
            <div className="form-group row">
              <label htmlFor="email" className="col-sm-2 col-form-label">
                Email:
              </label>
              <div className="">
                <input
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleEmailChange.bind(this)}
                  type="text"
                  className="form-control-plaintext"
                  id="staticEmail"
                  ref="formEmail"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="password" className="col-sm-2 col-form-label">
                Password:
              </label>
              <div className="">
                <input
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange.bind(this)}
                  type="text"
                  className="form-control-plaintext"
                  id="staticPassword"
                  ref="formPassword"
                />
                <small id="passwordHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
            </div>

            <button
              onClick={this.loginRequest.bind(this)}
              id="login-button"
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Loginpage;
