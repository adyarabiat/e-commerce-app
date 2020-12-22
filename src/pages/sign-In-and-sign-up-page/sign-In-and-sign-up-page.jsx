import React from "react";

import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

import "./sign-In-and-sign-up-page.scss";
const SingInAndSignUp = () => {
    return (
        <div className="sign-In-and-sign-up-page">
            <SignIn />
            <SignUp />
        </div>
    );
};

export default SingInAndSignUp;
