import { ActionTypes } from "../actions/ActionTypes";

export const categoriesIsLoading = (state = false, action) => {
    switch (action.type) {
        case ActionTypes.CATEGORIES_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
};

export const categories = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.CATEGORIES_FETCH_DATA_SUCCESS:
            return action.categories;
        default:
            return state;
    }
};
