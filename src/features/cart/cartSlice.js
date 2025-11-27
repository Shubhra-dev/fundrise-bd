import { createSlice } from '@reduxjs/toolkit';

const CART_KEY = 'cart';

const loadCartFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem(CART_KEY);
    return serializedCart ? JSON.parse(serializedCart) : [];
  } catch (error) {
    console.error('Failed to load cart from localStorage', error);
    return [];
  }
};

const saveCartToLocalStorage = (cart) => {
  try {
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem(CART_KEY, serializedCart);
  } catch (error) {
    console.error('Failed to save cart to localStorage', error);
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: loadCartFromLocalStorage(),
  },
  reducers: {
    addToCart: (state, action) => {
      const project = action.payload;
      const exists = state.items.find((item) => item.id === project.id);
      if (!exists) {
        state.items.push(project);
        saveCartToLocalStorage(state.items);
      }
    },
    removeFromCart: (state, action) => {
      const projectId = action.payload;
      state.items = state.items.filter((item) => item.id !== projectId);
      saveCartToLocalStorage(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      saveCartToLocalStorage(state.items);
    },
    rehydrateCart: (state) => {
      state.items = loadCartFromLocalStorage();
    },
  },
});

export const { addToCart, removeFromCart, clearCart, rehydrateCart } = cartSlice.actions;
export default cartSlice.reducer;
