import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let totalQuantity = 0;

    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 10 : 0;
    const tax = ((total + shipping) * 10) / 100;
    const grandTotal = total + shipping + tax;

    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Ordered: {totalQuantity}</p>
            <p>Total: $ {total.toFixed(2)}</p>
            <p>Shipping: $ {shipping}</p>
            <p>Tax: $ {tax.toFixed(2)}</p>
            <h4>Grand Total: $ {grandTotal.toFixed(2)}</h4>
            {props.children}
        </div>
    );
};

export default Cart;