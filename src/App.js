import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage";

const mobilesPage = () => {
    return (
        <div>
            <h1>Mobiles</h1>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/mobiles" component={mobilesPage} />
            </Switch>
        </div>
    );
};

export default App;
