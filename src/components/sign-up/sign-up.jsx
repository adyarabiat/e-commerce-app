import React, { Component } from "react";

import FormInput from "../form-input/form-input";
import CustomButton from "../Custom-button/Custom-button";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.scss";

class SignUp extends Component {
    state = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Password don't match");
            return;
        }

        try {
            // it is a method from google to create account with a given info
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            // here we neet await until it is finish of saving the data in our firestore
            await createUserProfileDocument(user, { displayName });
            // then we clear the form
            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return (
            <div className="sign-up">
                <h2 className="title"> I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        name="displayName"
                        type="text"
                        value={this.state.displayName}
                        required
                        onChange={(e) =>
                            this.setState({ displayName: e.target.value })
                        }
                        label="Display Name"
                    />
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
                        type="password"
                        value={this.state.password}
                        required
                        onChange={(e) =>
                            this.setState({ password: e.target.value })
                        }
                        label="Password"
                    />
                    <FormInput
                        name="confirmPassword"
                        type="password"
                        value={this.state.confirmPassword}
                        required
                        onChange={(e) =>
                            this.setState({ confirmPassword: e.target.value })
                        }
                        label="Confirm Password"
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;
