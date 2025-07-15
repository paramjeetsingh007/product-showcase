import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existing = state.cart.find(p => p.id === item.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existing = state.cart.find(p => p.id === id);
      if (existing && existing.quantity > 1) {
        existing.quantity -= 1;
      } else {
        state.cart = state.cart.filter(p => p.id !== id);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
