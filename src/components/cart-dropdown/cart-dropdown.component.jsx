import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CustomButton } from '../custom-button/custom-button.component';
import { CartItem } from '../cart-item/cart-item.component';
import { selectCartItems } from '../../features/cart/cart.selectors';
import { toggleCart } from '../../features/cart/cartSlice';
import './cart-dropdown.styles.scss';

export const CartDropdown = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
                { 
                    cartItems.length ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                    : <span className='empty-message'>Your cart is empty</span>
                }
            </div>
            <Link to="/checkout" onClick={() => dispatch(toggleCart())}><CustomButton>GO TO CHECKOUT</CustomButton></Link>
        </div>
    )
}