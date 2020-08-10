import React from "react";
import Products from "../components/Products";
import Cart from "../components/Cart";
import {Provider} from "react-redux";
import ConfigureStore from "./ConfigureStore";

const Store = props => {
    const {active, item, index, handleSelection} = props;

    const initialState = {
        categories: [],
        categoriesIsLoading: false,
        products: []
    };

    const store = ConfigureStore(initialState);

    return (
        <Provider store={store}>
            <div className="list row mb-3">
                <h1>Shopping Cart</h1>
            </div>

            <div className="list row">
                <div className="list row mb-3">
                    <Products/>
                </div>
                <div className="list row">
                    <Cart/>
                </div>
            </div>

        </Provider>
    );
};

export default Store;
