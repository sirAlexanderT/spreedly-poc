import { ActionTypes } from "./ActionTypes";
import { FetchCategories } from "../services/FetchCategories";

export const categoriesIsLoading = bool => {
    return {
        type: ActionTypes.CATEGORIES_IS_LOADING,
        isLoading: bool
    };
};

export const categoriesFetchDataSuccess = categories => {
    return {
        type: ActionTypes.CATEGORIES_FETCH_DATA_SUCCESS,
        categories
    };
};

export const categoriesFetchData = url => {
    return async dispatch => {
        dispatch(categoriesIsLoading(true));
        const categories = await FetchCategories(url);
        dispatch(categoriesFetchDataSuccess(categories));
        dispatch(categoriesIsLoading(false));
    };
};
