import React from "react";
import { connect } from "react-redux";
import { removeProductFromCart } from "../actions/Cart";

const Cart = props => {
    const calculateTotal = (total, currentItem) =>
        parseFloat(total + currentItem.price * (currentItem.quantity || 1));

    const renderProduct = (product, index) => (
        <div key={index}>
            <span>{product.name} </span>
            <span> ${product.price} </span>
            <span>{product.quantity}</span>
            <input
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
        <div>
            <div className="header">Cart ({countItems()} items)</div>
            <div className="cart">
                {props.products.length
                    ? props.products.map(renderProduct)
                    : "Cart is empty."}
            </div>
            <div className="total">
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
