import { Component } from "react";
import React from "react";
import axios from "axios";
const server = "https://my-live-list-server.herokuapp.com";

class SignUpPage extends Component {
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

  handleSubmit(event) {}

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
            <legend>Sign Up</legend>
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
                  Password must be between 5 and 12 characters.
                </small>
              </div>
            </div>
            <button onClick={this.handleSubmit.bind(this)}>Sign Up</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default SignUpPage;
