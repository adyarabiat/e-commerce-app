import React from "react";

import "./previewSelectedItem.scss";

import ItemCollection from "../item-collection/item-collection";

const PreviewSelectedItem = (props) => {
  return (
    <div className="preview-collection">
      <h1 className="title">{props.title.toUpperCase()}</h1>
      <div className="preview">
        {props.items.map((item) => {
          return (
            <ItemCollection
              key={item.id}
              name={item.name}
              image={item.imageUrl}
              price={item.price}
              theWholeItem={item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PreviewSelectedItem;
