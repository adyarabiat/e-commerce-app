import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import "./header.scss";
import Cart from "../cart/cart";
import CartDropdown from "../cart-dropdown/CartDropDown";
import { ReactComponent as Icon } from "../../assets/robot.svg";

const Header = (props) => {
    return (
        <div className="header">
            <Link to="/">
                <Icon className="icon" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    Shop
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
                <Cart />
            </div>
            {props.cartDropdown ? null : <CartDropdown />}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser,
        cartDropdown: state.cart.hidden,
    };
};

export default connect(mapStateToProps)(Header);
