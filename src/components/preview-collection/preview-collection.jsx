import React from "react";

import "./preview-collection.scss";
import ItemCollection from "../item-collection/item-collection";
const PreviewCollection = (props) => {
    return (
        <div className="preview-collection">
            <h1 className="title">{props.title.toUpperCase()}</h1>
            <div className="preview">
                {props.items
                    .filter((item, index) => {
                        return index < 4;
                    })
                    .map((item) => {
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

export default PreviewCollection;
