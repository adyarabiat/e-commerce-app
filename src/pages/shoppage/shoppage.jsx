import React, { useState } from "react";

import shopData from "./shopData";
import PreviewCollection from "../../components/preview-collection/preview-collection";

const ShopPage = (props) => {
  const [state, setState] = useState({
    collections: shopData,
  });

  return (
    <div>
      {state.collections.map((eachItem) => {
        return (
          <PreviewCollection
            key={eachItem.id}
            title={eachItem.title}
            items={eachItem.items}
          />
        );
      })}
    </div>
  );
};

export default ShopPage;
