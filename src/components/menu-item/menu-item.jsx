import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./menu-item-style.scss";

const MenuItem = (props) => {
  // const ItemSelectedHandler = (title) => {
  //   props.history.push(`${title}`);
  // };

  return (
    <Link
      to={"/" + props.title}
      className={`menu-item ${props.size}`}
      // onClick={() => ItemSelectedHandler(props.title)}
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
    </Link>
  );
};

export default withRouter(MenuItem);
