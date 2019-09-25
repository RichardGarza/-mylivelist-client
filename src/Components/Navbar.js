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
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="/">
          MyLiveList
        </a>

        <ul class="navbar-nav mr-auto d-flex flex-row justify-content-end">
          <li class="nav-item active p-2">
            <a class="nav-link" href="/">
              Home
            </a>
          </li>
          <li class="nav-item p-2">
            <a class="nav-link" href="#">
              How It Works
            </a>
          </li>
          <li class="nav-item p-2">
            <a class="nav-link" href="#">
              About
            </a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto d-flex flex-row justify-content-end">
          <li class="nav-item p-2">
            <a class="nav-link" href="#">
              Login
            </a>
          </li>
          <li class="nav-item p-2">
            <a class="nav-link" href="#">
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
