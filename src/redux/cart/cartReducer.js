import * as actionType from "../actionsType";

const INIT_STATE = {
    hidden: true,
};

const cartReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case actionType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            };

        default:
            return state;
    }
};

export default cartReducer;
