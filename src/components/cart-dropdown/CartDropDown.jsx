import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import CustomButton from "../Custom-button/Custom-button";
import "./CartDropDown.scss";
import CartItem from "../cart-item/cart-item";
import { setCartDropdown } from "../../redux/cart/cartActions";

const CartDropdown = (props) => {
    console.log(props);
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {props.item.length ? (
                    props.item.map((cartItem) => {
                        return <CartItem key={cartItem.id} item={cartItem} />;
                    })
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )}
                <CustomButton
                    onClick={() => {
                        props.history.push("/checkout");
                        props.toggleCartDropDown();
                    }}
                >
                    Go To Checkout
                </CustomButton>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        item: state.cart.cartItems,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartDropDown: () => dispatch(setCartDropdown()),
    };
};
export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
