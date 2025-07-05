import React from "react";
import "./cart-item.styles.scss";

export const CartItem = ({ item: {imageUrl, price, name, quantity}}) => (
    <div className="cart-item">
        <img src={imageUrl} alt="cartItem img"/>
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">{quantity} x {price}$</span>
        </div>
    </div>
)