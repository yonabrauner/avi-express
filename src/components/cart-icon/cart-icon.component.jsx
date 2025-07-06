import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCart } from '../../features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectItemCount } from '../../features/cart/cart.selectors';
import './cart-icon.styles.scss';

export const CartIcon = () => {
    const dispatch = useDispatch();
    const itemCount = useSelector(selectItemCount);

    return (
        <div className='cart-icon' onClick={() => {dispatch(toggleCart());}}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}