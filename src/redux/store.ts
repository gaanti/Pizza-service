import { configureStore } from '@reduxjs/toolkit';
import slice from './slices/slice';
import cart from './slices/cart';
export const store = configureStore({
      reducer: {
            params: slice,
            cart: cart
      }
});

export type RootState = ReturnType<typeof store.getState>;
