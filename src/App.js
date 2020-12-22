import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shoppage/shoppage";
import Header from "./components/header/header";
import SingInAndSignUp from "./pages/sign-In-and-sign-up-page/sign-In-and-sign-up-page";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import "./firebase/firebase.utils";

class App extends Component {
    state = {
        currentUser: null,
    };

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const userRef = await createUserProfileDocument(user);
                userRef.onSnapshot((snapShot) => {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data(),
                        },
                    });
                });
            } else {
                this.setState({ currentUser: null });
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
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/sign-In" component={SingInAndSignUp} />
                </Switch>
            </div>
        );
    }
}

export default App;
