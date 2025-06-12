import {createSlice} from '@reduxjs/toolkit';
import { addItemToCart } from './cart.utils';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        isCartOpen: false,
        cartItems: [],
     },
    reducers: {
        toggleCart: (state) => {
            state.isCartOpen = !state.isCartOpen;
        },
        closeCart: (state) => {
            state.isCartOpen = false;
        },
        openCart: (state) => {
            state.isCartOpen = true;
        },
        clearCart: (state) => {
            state.cartItems = [];
        },
        addItem: (state, action) => {
            state.cartItems = addItemToCart(state.cartItems, action.payload);
        },
    },
});

export const { toggleCart, closeCart, openCart, clearCart, addItem } = cartSlice.actions
export default cartSlice.reducer;