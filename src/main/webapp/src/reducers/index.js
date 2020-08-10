import { combineReducers } from "redux";
import { categories, categoriesIsLoading } from "./Categories";
import products from "./Cart";
export default combineReducers({
    categories,
    categoriesIsLoading,
    products: products
});
