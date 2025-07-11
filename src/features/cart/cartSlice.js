import { createSlice } from '@reduxjs/toolkit';
import { addItemToCart, decreaseItemInCart, removeItemFromCart } from './cart.utils';


const initialState = {
        isCartOpen: false,
        cartItems: [],
        itemCount: 0,
     };

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
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
        decreaseItem: (state, action) => {
            state.cartItems = decreaseItemInCart(state.cartItems, action.payload);
        },
        removeItem: (state, action) => {
            state.cartItems = removeItemFromCart(state.cartItems, action.payload);
        }
    },
});

export const { toggleCart, closeCart, openCart, clearCart, addItem, decreaseItem, removeItem,} = cartSlice.actions
export default cartSlice.reducer;