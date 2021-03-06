import React from "react";

import "./Custom-button.scss";

const CustomButton = (props) => {
    return (
        <button
            className={`${props.inverted ? "inverted" : ""} ${
                props.isgooglesignin ? "google-sign-in" : ""
            } custom-button`}
            {...props}
        >
            {props.children}
        </button>
    );
};

export default CustomButton;
