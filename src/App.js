import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shoppage/shoppage";
import Header from "./components/header/header";

const App = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/shop" component={ShopPage} />
            </Switch>
        </div>
    );
};

export default App;
