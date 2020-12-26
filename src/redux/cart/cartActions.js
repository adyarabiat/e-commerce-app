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

export const clearItemFromCart = (item) => {
    return {
        type: actionType.CLEAR_ITEM_CART,
        payload: item,
    };
};

export const removeItem = (item) => {
    return {
        type: actionType.REMOVE_ITEM,
        payload: item,
    };
};
