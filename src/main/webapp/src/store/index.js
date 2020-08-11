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
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Online Services</h1>
                <p className="lead">Get something.</p>
            </div>

            <Products/>

            <a href="/details" className="btn btn-block btn-primary">Next</a>


            <div className="pt-4 my-md-5 pt-md-5 border-top">
                <Cart/>
            </div>

        </Provider>
    );
};

export default Store;
