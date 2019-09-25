import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    console.log("Homepage Mounted...");
  }
  render() {
    return (
      <div className="App">
        <Navbar />

        <Route className="content" exact path="/" component={Homepage} />

        {/* <Route className="content" path="/login" component={Login} />

        <Route className="album" path="/userhome" component={Userhome} />

        <Route className="album" path="/store" component={StoreList} /> */}
      </div>
    );
  }
}

export default App;
