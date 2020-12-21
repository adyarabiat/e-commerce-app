import React from "react";

import "./Custom-button.scss";

const CustomButton = (props) => {
    return (
        <button className="custom-button" {...props}>
            {props.children}
        </button>
    );
};

export default CustomButton;
