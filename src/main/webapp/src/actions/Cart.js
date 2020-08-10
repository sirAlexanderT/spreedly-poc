import { ActionTypes } from "./ActionTypes";

export const addProductToCart = product => {
    return {
        type: ActionTypes.ADD_PRODUCT_TO_CART,
        product
    };
};

export const removeProductFromCart = index => {
    return {
        type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
        index
    };
};
