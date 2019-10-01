import { Component } from "react";
import React from "react";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }

  renderLoginPage = () => {
    this.props.setActivePage("loginPage");
  };

  renderSignUpPage = () => {
    this.props.setActivePage("signUpPage");
  };

  renderHomePage = () => {
    this.props.setActivePage("homePage");
  };

  renderHowToPage = () => {
    this.props.setActivePage("howToPage");
  };

  renderAboutPage = () => {
    this.props.setActivePage("aboutPage");
  };

  render() {
    if (this.props.signedIn === false) {
      return (
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" onClick={this.renderHomePage}>
            MyLiveList
          </a>

          <ul className="navbar-nav mr-auto d-flex flex-row justify-content-end">
            <li className="nav-item p-2">
              <a className="nav-link" onClick={this.renderHomePage}>
                Home
              </a>
            </li>
            <li className="nav-item p-2">
              <a className="nav-link" onClick={this.renderHowToPage}>
                How It Works
              </a>
            </li>
            <li className="nav-item p-2">
              <a className="nav-link" onClick={this.renderAboutPage}>
                About
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto d-flex flex-row justify-content-end">
            <li className="nav-item p-2">
              <a className="nav-link" onClick={this.renderLoginPage}>
                Login
              </a>
            </li>
            <li className="nav-item p-2">
              <a className="nav-link" onClick={this.renderSignUpPage}>
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
      );
    } else {
      return (
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand">MyLiveList</a>

          <ul className="navbar-nav mr-auto d-flex flex-row justify-content-end">
            <li className="nav-item p-2">
              <a className="nav-link" onClick={this.renderHomePage}>
                Home
              </a>
            </li>
            <li className="nav-item p-2">
              <a className="nav-link" onClick={this.renderHowToPage}>
                How It Works
              </a>
            </li>
            <li className="nav-item p-2">
              <a className="nav-link" onClick={this.renderAboutPage}>
                About
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto d-flex flex-row justify-content-end">
            <li className="nav-item p-2">
              <a className="nav-link" onClick={this.props.signOut}>
                Logout
              </a>
            </li>
          </ul>
        </nav>
      );
    }
  }
}

export default Navbar;
