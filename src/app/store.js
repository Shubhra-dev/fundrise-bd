import { configureStore } from '@reduxjs/toolkit';
import auth from '@/features/authentication/authSlice';
import cartReducer from '@/features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    auth,
    cart: cartReducer,
  },
  // (optional) add middleware or devTools config here
});

export default store;
