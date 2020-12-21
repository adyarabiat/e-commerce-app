import React from "react";

import "./item-collection.scss";

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
        </div>
    );
};
export default ItemCollection;
