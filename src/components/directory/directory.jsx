import React, { Component } from "react";

import MenuItem from "../menu-item/menu-item";
import "./directory-style.scss";
import mobilesPic from "../../assets/mobiles.jpg";
import tabletsPic from "../../assets/tablets.jpg";
import laptopsPic from "../../assets/laptops.jpg";
import camerasPic from "../../assets/cameras.jpg";

import smartWatchs from "../../assets/smart-watch.jpg";

class Directory extends Component {
    state = {
        sections: [
            {
                title: "mobiles",
                imgeUrl: mobilesPic,
                id: 1,
            },
            {
                title: "laptops",
                imgeUrl: laptopsPic,
                id: 2,
            },
            {
                title: "watches",
                imgeUrl: smartWatchs,
                id: 5,
            },
            {
                title: "tablets",
                imgeUrl: tabletsPic,
                size: "large",
                id: 4,
            },
            {
                title: "cameras",
                imgeUrl: camerasPic,
                size: "large",
                id: 3,
            },
        ],
    };
    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map((section) => {
                    return (
                        <MenuItem
                            key={section.id}
                            title={section.title}
                            image={section.imgeUrl}
                            size={section.size}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Directory;
