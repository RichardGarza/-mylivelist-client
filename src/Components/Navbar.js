import { Component } from "react";
import React from "react";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  // componentDidMount() {
  //   axios
  //     .get(`${server}/home`)
  //     .then(response => {
  //       const names = response.data;
  //       this.setState({ names });
  //       console.log("WORKED!", response);
  //     })
  //     .catch(err => {
  //       console.log("Shit", err);
  //     });
  // }
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          MyLiveList
        </a>

        <ul className="navbar-nav mr-auto d-flex flex-row justify-content-end">
          <li className="nav-item active p-2">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item p-2">
            <a className="nav-link" href="#">
              How It Works
            </a>
          </li>
          <li className="nav-item p-2">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto d-flex flex-row justify-content-end">
          <li className="nav-item p-2">
            <a className="nav-link" href="/login">
              Login
            </a>
          </li>
          <li className="nav-item p-2">
            <a className="nav-link" href="#">
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
