import { useEffect } from "react";
import { useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedProduct = getStoredCart();
        const keys = Object.keys(savedProduct);

        fetch('http://localhost:5000/products/byKeys', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(products => {
                // console.log(products);
                if (products.length) {
                    const savedCart = [];
                    for (const key in savedProduct) {
                        const addedProduct = products.find(product => product.key === key);
                        if (addedProduct) {
                            const quantity = savedProduct[key];
                            addedProduct.quantity = quantity
                            savedCart.push(addedProduct);
                        }
                    }
                    setCart(savedCart);

                }
            })



    }, []);

    return [cart, setCart]
}

export default useCart;