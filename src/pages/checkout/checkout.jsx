import React from "react";
import { connect } from "react-redux";

import "./checkout.scss";
import ChechoutItem from "../../components/checkout/chechout-item";
import StripeCheckoutButton from "../../components/strip-button/strip-button";

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
                <div className="warning">
                    *Please use the following test credit card for payments*
                    <br />
                    4242424242424242 Visa Any 3 digits Any future date
                    4000056655665556 Visa (debit) Any 3 digits Any future date
                    5555555555554444 Mastercard Any 3 digits Any future date
                </div>
            </div>
            <StripeCheckoutButton price={props.total} />
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
