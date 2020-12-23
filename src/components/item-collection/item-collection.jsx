import React from "react";

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
            <CustomButton inverted="true">Add to cart</CustomButton>
        </div>
    );
};
export default ItemCollection;
