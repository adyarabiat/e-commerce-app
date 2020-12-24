import React from "react";
import { connect } from "react-redux";

import CustomButton from "../Custom-button/Custom-button";
import "./CartDropDown.scss";
import CartItem from "../cart-item/cart-item";

const CartDropdown = (props) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {props.item.map((cartItem) => {
                    return <CartItem key={cartItem.id} item={cartItem} />;
                })}
                <CustomButton>Go To Checkout</CustomButton>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        item: state.cart.cartItems,
    };
};
export default connect(mapStateToProps)(CartDropdown);
