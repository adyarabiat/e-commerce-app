import React, { useState } from "react";

import shopData from "./shopData";
import PreviewSelectedItem from "../../components/previewSelectedItem/previewSelectedItem";

const ItemShopPage = (props) => {
  const [state, setState] = useState({
    collections: shopData,
  });

  const selectedItem = props.match.params.item;

  const itemInfo = state.collections.filter((item) => {
    return item.title === selectedItem;
  });

  return (
    <div>
      {itemInfo.map((eachItem) => {
        return (
          <PreviewSelectedItem
            key={eachItem.id}
            title={eachItem.title}
            items={eachItem.items}
          />
        );
      })}
    </div>
  );
};

export default ItemShopPage;
