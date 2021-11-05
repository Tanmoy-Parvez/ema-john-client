import React from 'react';

const ReviewItem = (props) => {
    const { name, key, quantity, price } = props.product;

    return (
        <div className="product">
            <div className="product-details">
                <h2 className="product-name">{name}</h2>
                <p>Price: ${price}</p>
                <p>Quantity: {quantity}</p>
                <button
                    className="regular-btn"
                    onClick={() => { props.handleRemove(key) }}>
                    Remove
                </button>
            </div>
        </div>
    );
};

export default ReviewItem;