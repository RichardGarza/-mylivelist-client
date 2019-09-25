import { Component } from "react";
import React from "react";
import "./App.css";
import axios from "axios";
const server = "https://my-live-list-server.herokuapp.com";

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: [{ name: "None Added Yet" }]
    };
  }

  componentDidMount() {
    axios
      .get(`${server}/home`)
      .then(response => {
        const names = response.data;
        this.setState({ names });
        console.log("WORKED!", response);
      })
      .catch(err => {
        console.log("Shit", err);
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span>{this.state.names[0].name}</span>
        </header>
      </div>
    );
  }
}

export default App;
