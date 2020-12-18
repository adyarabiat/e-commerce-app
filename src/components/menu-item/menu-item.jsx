import React from "react";

import "./menu-item-style.scss";

const MenuItem = (props) => {
    return (
        <div className={`menu-item ${props.size}`}>
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${props.image}) `,
                }}
            />
            <div className="content">
                <h1 className="title">{props.title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
};

export default MenuItem;
