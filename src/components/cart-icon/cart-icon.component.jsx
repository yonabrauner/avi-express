import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCart } from '../../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

export const CartIcon = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector((state) => state.cart.isCartOpen);
    console.log(isCartOpen);
    return (
        <div className='cart-icon' onClick={() => {dispatch(toggleCart());}}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}