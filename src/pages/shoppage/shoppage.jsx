import React, { Component } from "react";

import shopData from "./shopData";
import PreviewCollection from "../../components/preview-collection/preview-collection";

class ShopPage extends Component {
    state = {
        collections: shopData,
    };
    render() {
        return (
            <div>
                {this.state.collections.map((eachItem) => {
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
    }
}

export default ShopPage;
