import { configureStore } from '@reduxjs/toolkit';
import auth from '@/features/authentication/authSlice';

export const store = configureStore({
  reducer: {
    auth,
  },
  // (optional) add middleware or devTools config here
});

export default store;
