import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { GlobalStyle } from "./global-styles";
import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shoppage/shoppage";
import ItemShopPage from "./pages/shoppage/ItemShopPage";
import Header from "./components/header/header";
import SingInAndSignUp from "./pages/sign-In-and-sign-up-page/sign-In-and-sign-up-page";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/userActions";
import CheckoutPage from "./pages/checkout/checkout";
import Footer from "./components/footer/footer";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot((snapShot) => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        this.props.setCurrentUser(user);
      }

      // console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/shop" exact component={ShopPage} />

          <Route
            path="/sign-In"
            render={() => {
              return this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SingInAndSignUp />
              );
            }}
          />
          <Route path="/checkout" exact component={CheckoutPage} />
          <Route path="/:item" exact component={ItemShopPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  };
};

const mapDispatchedToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchedToProps)(App);
