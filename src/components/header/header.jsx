import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <i className="fas fa-shipping-fast fa-3x logo-container"></i>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    Shop
                </Link>
                <Link className="option" to="/shop">
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default Header;
