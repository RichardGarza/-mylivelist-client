import { Component } from "react";
import React from "react";
import axios from "axios";

class StorePage extends Component {
  componentDidMount = () => {
    let userCredentials = {
      userId: this.props.userId
    };

    axios({
      method: "post",
      url: "https://my-live-list-server.herokuapp.com/getStores",
      data: userCredentials
    })
      .then(result => {
        if (result.err !== null) {
          // Something Went Wrong
        } else if (result.stores.length === 0) {
          // No Stores Yet
        } else {
          // Got The Stores
          if (result.stores !== this.props.stores) {
            this.props.setStores(result.stores);
          }
        }
      })
      .catch(err => {
        console.log("Login Err", err);
      });
  };

  render() {
    return (
      <div>
        <h3>STORE ITEMS </h3>

        {this.props.stores.map(store => (
          <button className="nav-link btn btn-primary m-auto">
            {store.name}{" "}
          </button>
        ))}
      </div>
    );
  }
}

export default StorePage;
