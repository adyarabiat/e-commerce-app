import React from "react";

import CustomButton from "../Custom-button/Custom-button";
import "./CartDropDown.scss";

const CartDropdown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                <CustomButton>Go To Checkout</CustomButton>
            </div>
        </div>
    );
};

export default CartDropdown;
