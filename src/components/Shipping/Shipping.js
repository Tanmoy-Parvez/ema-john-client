import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import "./Shipping.css"

const Shipping = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const savedCart = getStoredCart();
        data.order = savedCart;
        fetch("http://localhost:5000/order", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("Order Processed Successfully")
                    reset();
                    clearTheCart()
                }
            })
    };
    const { user } = useAuth();
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="shipping-form">
            <input defaultValue={user.displayName} {...register("name")} />
            <input defaultValue={user.email} {...register("email", { required: true })} />
            {errors.email && <span>This field is required</span>}
            <input placeholder="City" {...register("city")} />
            <input placeholder="Address"{...register("address")} />
            <input placeholder="Phone" {...register("phone")} />

            <input type="submit" />
        </form>
    );
};

export default Shipping;