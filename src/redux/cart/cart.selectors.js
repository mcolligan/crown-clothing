import { createSelector } from 'reselect';

// peel off the piece of state we want to use
const selectCart = (state) => state.cart;

// create the selector for what we want to watch in cart property
export const selectCartItems = createSelector(
  [selectCart], // the collection of selectors
  (cart) => cart.cartItems //function to return the value we want from the selector
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((sum, cartItem) => sum + cartItem.quantity, 0)
);