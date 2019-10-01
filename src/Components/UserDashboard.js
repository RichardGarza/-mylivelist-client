import { Component } from "react";
import React from "react";
import StorePage from "./StorePage";

class UserDashboard extends Component {
  render() {
    return (
      <div>
        <h3>MyLiveList.</h3>
        <h6>USER DASHBOARD</h6>
        <br />
        <StorePage
          stores={this.props.stores}
          changeLoadingStatus={this.props.changeLoadingStatus}
          setStores={this.props.setStores}
          userId={this.props.userId}
        />
      </div>
    );
  }
}

export default UserDashboard;
