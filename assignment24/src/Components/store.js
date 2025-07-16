import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartslices';

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

export default store;