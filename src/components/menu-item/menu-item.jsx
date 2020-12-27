import React from "react";
import { withRouter, Link } from "react-router-dom";

import "./menu-item-style.scss";

const MenuItem = (props) => {
    // console.log(props);
    return (
        <Link className={`menu-item ${props.size}`} to="/shop">
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
        </Link>
    );
};

export default withRouter(MenuItem);
