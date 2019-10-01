import React, { Component } from "react";
import "./App.css";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      userId: undefined,
      activePage: "homePage"
    };
  }

  setActivePage = activePage => {
    this.setState({ activePage });
  };

  signIn = userId => {
    this.setState({ signedIn: true, userId });
  };

  signOut() {
    this.setState({
      signedIn: false,
      userId: undefined
    });
  }

  componentDidMount() {
    console.log("App Mounted...");
  }

  render() {
    return (
      <div className="App">
        <Navbar
          activePage={this.state.activePage}
          setActivePage={this.setActivePage}
        />

        <Body
          signIn={this.signIn}
          activePage={this.state.activePage}
          setActivePage={this.setActivePage}
        />
      </div>
    );
  }
}

export default App;
