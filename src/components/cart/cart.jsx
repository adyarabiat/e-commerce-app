import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart.scss";
import { setCartDropdown } from "../../redux/cart/cartActions";

const Cart = (props) => {
    return (
        <div className="cart-icon" onClick={props.toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{props.itemCount}</span>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHidden: () => dispatch(setCartDropdown()),
    };
};

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        itemCount: state.cart.cartItems.reduce((acc, cartItem) => {
            return acc + cartItem.quantity;
        }, 0),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
