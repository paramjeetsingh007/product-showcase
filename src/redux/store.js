import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// Load cart from localStorage
const loadFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem('cart');
    return serializedCart ? JSON.parse(serializedCart) : [];
  } catch (e) {
    return [];
  }
};

// Save cart to localStorage
const saveToLocalStorage = (cart) => {
  try {
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem('cart', serializedCart);
  } catch (e) {
    console.warn('Error saving to localStorage', e);
  }
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: {
      cart: loadFromLocalStorage(),
    },
  },
});

store.subscribe(() => {
  saveToLocalStorage(store.getState().cart.cart);
});

export default store;
