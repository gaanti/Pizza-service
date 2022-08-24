import { configureStore } from '@reduxjs/toolkit';
import slice from './slices/slice';
import cart from './slices/cart';
import pizza from './slices/pizza';
import { useDispatch } from 'react-redux';

export const store = configureStore({
      reducer: {
            params: slice,
            cart: cart,
            pizza: pizza
      },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
