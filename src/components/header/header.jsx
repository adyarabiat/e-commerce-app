import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import "./header.scss";

const Header = (props) => {
    return (
        <div className="header">
            <Link to="/">
                <i className="fas fa-shipping-fast fa-3x logo-container"></i>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    Shop
                </Link>
                <Link className="option" to="/shop">
                    Contact
                </Link>
                {props.currentUser ? (
                    <div className="option" onClick={() => auth.signOut()}>
                        Sign Out
                    </div>
                ) : (
                    <Link className="option" to="/sign-in">
                        Sign In
                    </Link>
                )}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser,
    };
};

export default connect(mapStateToProps)(Header);
