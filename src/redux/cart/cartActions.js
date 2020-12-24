import * as actionType from "../actionsType";

export const setCartDropdown = () => {
    return {
        type: actionType.TOGGLE_CART_HIDDEN,
    };
};

export const addItem = (item) => {
    return {
        type: actionType.ADD_ITEM,
        payload: item,
    };
};
