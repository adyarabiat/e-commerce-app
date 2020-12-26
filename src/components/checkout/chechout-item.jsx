import React from "react";
import { connect } from "react-redux";

import "./chechout-item.scss";
import {
    clearItemFromCart,
    removeItem,
    addItem,
} from "../../redux/cart/cartActions";

const ChechoutItem = (props) => {
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img alt="item" src={props.cartItem.imageUrl} />
            </div>
            <span className="name">{props.cartItem.name}</span>
            <span className="quantity">
                <div
                    className="arrow"
                    onClick={() => props.removeItem(props.cartItem)}
                >
                    &#10094;
                </div>
                <span className="value">{props.cartItem.quantity}</span>

                <div
                    className="arrow"
                    onClick={() => props.addItem(props.cartItem)}
                >
                    &#10095;
                </div>
            </span>
            <span className="price">{props.cartItem.price}</span>
            <span
                className="remove-button"
                onClick={() => props.clearItem(props.cartItem)}
            >
                &#10005;
            </span>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearItem: (cartItem) => dispatch(clearItemFromCart(cartItem)),
        addItem: (cartItem) => dispatch(addItem(cartItem)),
        removeItem: (cartItem) => dispatch(removeItem(cartItem)),
    };
};

export default connect(null, mapDispatchToProps)(ChechoutItem);
