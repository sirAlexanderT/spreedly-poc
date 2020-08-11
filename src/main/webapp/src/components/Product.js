import React from "react";
import { connect } from "react-redux";
import { addProductToCart } from "../actions/Cart";

const Product = props => {
    const { item } = props;
    return (
        <div className="card mb-4 box-shadow">
            <div className="card-header"><h4 className="my-0 font-weight-normal">{item.name}</h4></div>
            <div className="card-body">
                <h3 className="card-title pricing-card-title">${item.price}</h3>
                <div className="mb-3"><i>description goes here</i></div>
                <button type="button"
                        className="btn btn-lg btn-block btn-outline-primary"
                        onClick={() => props.addProduct(item)}>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        products: state.products
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addProduct: product => dispatch(addProductToCart(product))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Product);