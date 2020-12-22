import React, { Component } from "react";

import FormInput from "../form-input/form-input";
import CustomButton from "../Custom-button/Custom-button";
// To use sign-in with Google
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";
import "./sign-in.scss";

class SignIn extends Component {
    state = {
        email: "",
        password: "",
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: "", password: "" });
        } catch (error) {
            console.log(error);
        }
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
                    <div className="buttons">
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton
                            isgooglesignin="true"
                            onClick={signInWithGoogle}
                        >
                            SIGN IN with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;

// isgooglesignin="true" Here I just passed any data to remove the warrning from the React library
