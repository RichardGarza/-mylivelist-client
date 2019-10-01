import { Component } from "react";
import React from "react";
import Homepage from "./Homepage";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import AboutPage from "./AboutPage";
import HowToPage from "./HowToPage";
import StorePage from "./StorePage.js";
import UserDashboard from "./UserDashboard";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";

class Body extends Component {
  componentDidMount() {
    console.log("Body Mounted", this.props);
  }

  changeLoadingStatus = () => {
    this.props.changeLoadingStatus();
  };

  signIn = userId => {
    this.props.signIn(userId);
  };

  setError = error => {
    this.props.setError(error);
  };

  renderLoginPage = () => {
    this.props.setActivePage("loginPage");
  };

  renderSignUpPage = () => {
    this.props.setActivePage("signupPage");
  };

  renderHomePage = () => {
    this.props.setActivePage("homePage");
  };

  render() {
    if (this.props.activePage === "aboutPage") {
      return (
        <AboutPage
          renderHomePage={this.renderHomePage}
          renderSignUpPage={this.renderSignUpPage}
          renderLoginPage={this.renderLoginPage}
          renderAboutPage={this.renderAboutPage}
          renderHowToPage={this.renderHowToPage}
        />
      );
    } else if (this.props.activePage === "howToPage") {
      return (
        <HowToPage
          renderHomePage={this.renderHomePage}
          renderSignUpPage={this.renderSignUpPage}
          renderLoginPage={this.renderLoginPage}
          renderAboutPage={this.renderAboutPage}
          renderHowToPage={this.renderHowToPage}
        />
      );
    } else if (this.props.loading === true) {
      return <LoadingPage />;
    }

    if (this.props.signedIn === false) {
      if (this.props.activePage === "homePage") {
        return (
          <Homepage
            renderHomePage={this.renderHomePage}
            renderSignUpPage={this.renderSignUpPage}
            renderLoginPage={this.renderLoginPage}
            renderAboutPage={this.renderAboutPage}
            renderHowToPage={this.renderHowToPage}
          />
        );
      } else if (this.props.activePage === "loginPage") {
        return (
          <LoginPage
            changeLoadingStatus={this.changeLoadingStatus}
            signIn={this.signIn}
            renderHomePage={this.renderHomePage}
            renderSignUpPage={this.renderSignUpPage}
            renderLoginPage={this.renderLoginPage}
            renderAboutPage={this.renderAboutPage}
            renderHowToPage={this.renderHowToPage}
          />
        );
      } else if (this.props.activePage === "signUpPage") {
        return (
          <SignUpPage
            setError={this.setError}
            signIn={this.signIn}
            changeLoadingStatus={this.changeLoadingStatus}
            renderHomePage={this.renderHomePage}
            renderSignUpPage={this.renderSignUpPage}
            renderLoginPage={this.renderLoginPage}
            renderAboutPage={this.renderAboutPage}
            renderHowToPage={this.renderHowToPage}
          />
        );
      }
    } else if (this.props.signedIn === true) {
      if (this.props.activePage === "homePage") {
        return (
          <UserDashboard
            stores={this.props.stores}
            changeLoadingStatus={this.changeLoadingStatus}
            setStores={this.props.setStores}
            userId={this.props.userId}
            renderHomePage={this.renderHomePage}
            renderSignUpPage={this.renderSignUpPage}
            renderLoginPage={this.renderLoginPage}
            renderAboutPage={this.renderAboutPage}
            renderHowToPage={this.renderHowToPage}
          />
        );
      } else if (this.props.activePage === "storePage") {
        return (
          <StorePage
            renderHomePage={this.renderHomePage}
            renderSignUpPage={this.renderSignUpPage}
            renderLoginPage={this.renderLoginPage}
            renderAboutPage={this.renderAboutPage}
            renderHowToPage={this.renderHowToPage}
          />
        );
      }
    } else {
      return (
        <Homepage
          renderHomePage={this.renderHomePage}
          renderSignUpPage={this.renderSignUpPage}
          renderLoginPage={this.renderLoginPage}
          renderAboutPage={this.renderAboutPage}
          renderHowToPage={this.renderHowToPage}
        />
      );
    }
  }
}

export default Body;
