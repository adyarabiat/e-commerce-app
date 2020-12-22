import * as actionType from "../actionsType";

export const setCurrentUser = (user) => {
    return {
        type: actionType.SET_CURRENT_USER,
        payload: user,
    };
};
