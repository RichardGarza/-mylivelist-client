import { Component } from "react";
import React from "react";
import axios from "axios";
const server = "https://my-live-list-server.herokuapp.com";

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      names: [{ name: "None Added Yet" }],
      currentName: "Loading...",
      number: 0
    };
  }

  changeName() {
    let e = this.state.number + 1;
    if (this.state.number === this.state.names.length - 1) {
      e = 0;
    }
    this.setState({ number: e, currentName: this.state.names[e].name });
  }

  componentDidMount() {
    axios
      .get(`${server}/home`)
      .then(response => {
        const names = response.data;
        this.setState({ names });
        this.setState({ currentName: names[0].name });
      })
      .catch(err => {
        console.log("Shit", err);
      });
  }

  render() {
    return (
      <div>
        <h3>Welcome to MyLiveList.</h3>
        <h6>The live grocery list for families.</h6>
        <br />
        <button onClick={() => this.changeName()}>
          {this.state.currentName}
        </button>
      </div>
    );
  }
}

export default Homepage;
