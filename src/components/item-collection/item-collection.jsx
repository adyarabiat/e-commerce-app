import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cartActions";
import "./item-collection.scss";
import CustomButton from "../Custom-button/Custom-button";

const ItemCollection = (props) => {
    return (
        <div className="item-collection">
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${props.image}) `,
                }}
            />

            <div className="content">
                <span className="name">{props.name.toUpperCase()}</span>
                <span className="price">{props.price}</span>
            </div>
            <CustomButton
                onClick={() => props.item(props.theWholeItem)}
                inverted="true"
            >
                Add to cart
            </CustomButton>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        item: (item) => dispatch(addItem(item)),
    };
};
export default connect(null, mapDispatchToProps)(ItemCollection);
