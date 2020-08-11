import React from "react";
import { connect } from "react-redux";
import { removeProductFromCart } from "../actions/Cart";

const Cart = props => {
    const calculateTotal = (total, currentItem) =>
        parseFloat(total + currentItem.price * (currentItem.quantity || 1));

    const renderProduct = (product, index) => (
        <div key={index}>
            <span>{product.name} </span>
            <span className="ml-3"> ${product.price} </span>
            <span className="ml-3">{product.quantity}</span>
            <input
                className="mt-3 ml-3"
                type="button"
                onClick={() => props.removeProduct(index)}
                value="x"
            />
        </div>
    );

    const countItems = () =>
        props.products
            .reduce((acc, cur) => {
                return parseFloat(acc + (cur.quantity || 1));
            }, 0)
            .toFixed(0);

    return (
        <div className="card mb-4 box-shadow">
            <div className="card-header">Cart ({countItems()} items)</div>
            <div className="card-body">
                <div className="card-title pricing-card-title">
                    {props.products.length
                        ? props.products.map(renderProduct)
                        : "Cart is empty."}
                </div>
            </div>
            <div className="card-footer">
                <span>Total </span>
                <span> ${props.products.reduce(calculateTotal, 0).toFixed(2)}</span>
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
        removeProduct: index => dispatch(removeProductFromCart(index))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
