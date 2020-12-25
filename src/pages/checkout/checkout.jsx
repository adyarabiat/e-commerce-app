import React from "react";
import { connect } from "react-redux";

import "./checkout.scss";
import ChechoutItem from "../../components/checkout/chechout-item";

const CheckoutPage = (props) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {props.cartItems.map((item) => {
                return <ChechoutItem key={item.id} cartItem={item} />;
            })}
            <div className="total">
                <span>Total: ${props.total}</span>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        total: state.cart.cartItems.reduce((acc, cartItem) => {
            return acc + cartItem.quantity * cartItem.price;
        }, 0),
        cartItems: state.cart.cartItems,
    };
};

export default connect(mapStateToProps)(CheckoutPage);
