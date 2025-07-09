import React from "react";
import { selectCartItems, selectTotalPrice } from "../../features/cart/cart.selectors";
import { useSelector } from "react-redux";
import { CheckoutItem } from "../../components/checkout-item/checkout-item.component";
import './checkout.styles.scss';

export const  CheckoutPage = () => {
    const totalPrice = useSelector(selectTotalPrice);
    const cartItems = useSelector(selectCartItems);

    return(
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block product">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
            }
            <div className="total">total: {totalPrice}$</div>
        </div>
    )
}