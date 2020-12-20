import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item-style.scss";

const MenuItem = (props) => {
    // console.log(props);
    return (
        <div
            className={`menu-item ${props.size}`}
            onClick={() =>
                props.history.push(`${props.match.url}${props.linkURL}`)
            }
        >
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

export default withRouter(MenuItem);
