import React, { Component } from "react";

import FormInput from "../form-input/form-input";
import CustomButton from "../Custom-button/Custom-button";
// To use sign-in with Google
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.scss";

class SignIn extends Component {
    state = {
        email: "",
        password: "",
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ email: "", password: "" });
    };

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your Email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        required
                        onChange={(e) =>
                            this.setState({ email: e.target.value })
                        }
                        label="Email"
                    />

                    <FormInput
                        name="password"
                        value={this.state.password}
                        required
                        type="password"
                        onChange={(e) =>
                            this.setState({ password: e.target.value })
                        }
                        label="Password"
                    />

                    <CustomButton type="submit">SIGN IN</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>
                        SIGN IN with Google
                    </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;
