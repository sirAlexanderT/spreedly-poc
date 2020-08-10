import React from "react";
import { connect } from "react-redux";
import { addProductToCart } from "../actions/Cart";

const Product = props => {
    const { item } = props;
    return (
        <div className="card m-auto">
            <div className="card-header">{item.name}</div>
            <div className="card-body">
                <div className="card-text mb-3">${item.price}</div>
                <button className="btn btn-primary btn-sm"
                        onClick={() => props.addProduct(item)}>Add to cart</button>
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