import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";
import ErrorPage from "./Components/ErrorPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      userId: undefined,
      activePage: "homePage",
      stores: [],
      loading: false,
      error: undefined
    };
  }

  setError = error => {
    this.setState({ error });
  };

  cancelError = () => {
    this.setState({ error: undefined });
  };

  changeLoadingStatus = () => {
    if (this.state.loading === false) {
      this.setState({ loading: true });
    } else {
      this.setState({ loading: false });
    }
  };

  setActivePage = activePage => {
    this.setState({ activePage });
  };

  setStores = stores => {
    this.setState({ stores });
    console.log("STORES SET", stores);
  };

  signIn = userId => {
    this.changeLoadingStatus();
    this.setState({ signedIn: true, userId, activePage: "homePage" });

    axios({
      method: "post",
      url: "https://my-live-list-server.herokuapp.com/getStores",
      data: { userId }
    })
      .then(result => {
        if (result.data.err !== null && result.data.err !== undefined) {
          console.log("Error Retrieving Stores");
        } else if (result.data.stores.length === 0) {
          console.log("No Stores Available");
        } else {
          console.log("Got Stores", result);
          if (result.data.stores !== this.props.stores) {
            console.log("Set STORES");
            this.setStores(result.data.stores);
          }
        }
      })
      .catch(err => {
        console.log("Login Err", err);
      });
    this.changeLoadingStatus();
  };

  signOut = () => {
    this.setState({
      signedIn: false,
      userId: undefined
    });
  };

  componentDidMount() {
    console.log("App Mounted...");
  }

  render() {
    return (
      <div className="App">
        <Navbar
          signOut={this.signOut}
          signedIn={this.state.signedIn}
          activePage={this.state.activePage}
          setActivePage={this.setActivePage}
        />
        <ErrorPage error={this.state.error} cancelError={this.cancelError} />
        <Body
          setStores={this.setStores}
          userId={this.state.userId}
          setError={this.setError}
          loading={this.state.loading}
          stores={this.state.stores}
          changeLoadingStatus={this.changeLoadingStatus}
          signIn={this.signIn}
          activePage={this.state.activePage}
          signedIn={this.state.signedIn}
          setActivePage={this.setActivePage}
        />
      </div>
    );
  }
}

export default App;
