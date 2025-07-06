import { createSelector } from "@reduxjs/toolkit";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectItemCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
);

export const selectIsCartOpen = createSelector(
  [selectCart],
  (cart) => cart.isCartOpen
);