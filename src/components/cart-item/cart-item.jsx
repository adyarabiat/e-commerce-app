import React from "react";

import "./cart-item.scss";

const CartItem = (props) => {
    return (
        <div className="cart-item">
            <img src={props.item.imageUrl} alt="item" />
            <div className="item-details">
                <span className="name">{props.item.name}</span>
                <span className="prics">{props.item.price}</span>
                {props.item.quantity} X ${props.item.price}
            </div>
        </div>
    );
};

export default CartItem;
