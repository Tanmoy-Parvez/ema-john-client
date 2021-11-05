import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css"
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props.product);
    const { name, seller, price, stock, img, star } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-details">
                <h2 className="product-name">{name}</h2>
                <p>by: {seller}</p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <p>Ratings: <Rating
                    readonly
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color" />

                </p>
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="regular-btn">
                    {cartIcon} add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;