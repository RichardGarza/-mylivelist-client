import { Component } from "react";
import React from "react";

class ErrorPage extends Component {
  render() {
    if (this.props.error !== undefined) {
      return (
        <div>
          <h3>Error!</h3>
          <h6> {this.props.error} </h6>
          <button
            className="nav-link btn-primary m-auto"
            onClick={this.props.cancelError}
          >
            Dismiss Error
          </button>

          <br />
          <br />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ErrorPage;
