import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shoppage/shoppage";
import Header from "./components/header/header";
import SingInAndSignUp from "./pages/sign-In-and-sign-up-page/sign-In-and-sign-up-page";
const App = () => {
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
};

export default App;
