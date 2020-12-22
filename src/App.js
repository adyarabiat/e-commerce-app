import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shoppage/shoppage";
import Header from "./components/header/header";
import SingInAndSignUp from "./pages/sign-In-and-sign-up-page/sign-In-and-sign-up-page";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/userActions";

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
                <Header />
                <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/sign-In" component={SingInAndSignUp} />
                </Switch>
            </div>
        );
    }
}

const mapDispatchedToProps = (dispatch) => {
    return {
        setCurrentUser: (user) => dispatch(setCurrentUser(user)),
    };
};

export default connect(null, mapDispatchedToProps)(App);
