import React from "react";

import "./chechout-item.scss";

const ChechoutItem = (props) => {
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img alt="item" src={props.cartItem.imageUrl} />
            </div>
            <span className="name">{props.cartItem.name}</span>
            <span className="quantity">{props.cartItem.quantity}</span>
            <span className="price">{props.cartItem.price}</span>
            <span className="remove-button">&#10005;</span>
        </div>
    );
};

export default ChechoutItem;
