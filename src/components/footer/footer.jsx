import React from "react";

import "./footer.scss";
import visa from "../../assets/symbols.png";
import master from "../../assets/mastercard.png";

const Footer = () => {
    return (
        <div className="footer-main">
            <div className="icons">
                <img src={visa} alt="visa-card" />
                <img src={master} alt="master-card" />
            </div>
            <p>© 2021 Electronics Online. All Rights Reserved</p>
        </div>
    );
};

export default Footer;
