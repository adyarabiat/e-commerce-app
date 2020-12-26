import * as actionType from "../actionsType";

const INIT_STATE = {
    hidden: true,
    cartItems: [],
};

const cartReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case actionType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            };
        case actionType.ADD_ITEM:
            // To check if the item was selected more than one time:
            const addITemToCart = (cartItems, cartItemToAdd) => {
                const existingCartItem = cartItems.find((cartItem) => {
                    return cartItem.id === cartItemToAdd.id;
                });

                if (existingCartItem) {
                    return cartItems.map((cartItem) => {
                        return cartItem.id === cartItemToAdd.id
                            ? { ...cartItem, quantity: cartItem.quantity + 1 }
                            : cartItem;
                    });
                }

                return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
            };
            // here is the ADD_ITEM return
            return {
                ...state,
                cartItems: addITemToCart(state.cartItems, action.payload),
            };

        case actionType.CLEAR_ITEM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((cartItem) => {
                    return cartItem.id !== action.payload.id;
                }),
            };

        case actionType.REMOVE_ITEM:
            const removeItemFromCart = (cartItems, cartItemToRemove) => {
                const exitingCartITem = cartItems.find((cartItem) => {
                    return cartItem.id === cartItemToRemove.id;
                });
                if (exitingCartITem.quantity === 1) {
                    return cartItems.filter((cartItem) => {
                        return cartItem.id !== cartItemToRemove.id;
                    });
                }

                return cartItems.map((cartItem) => {
                    return cartItem.id === cartItemToRemove.id
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem;
                });
            };
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload),
            };
        default:
            return state;
    }
};

export default cartReducer;
