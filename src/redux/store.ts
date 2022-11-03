import { configureStore } from '@reduxjs/toolkit';
import slice from './slices/business/filtering_params';
import cart from './slices/business/cart';
import pizzas from './slices/business/pizzas';
import { useDispatch } from 'react-redux';
import { pizzaApi } from './services/pizza';
import footer from './slices/UI/footer';
import login from './slices/business/login';

export const store = configureStore({
      reducer: {
            params: slice,
            cart: cart,
            pizzas: pizzas,
            footer: footer,
            login: login,
            [pizzaApi.reducerPath]: pizzaApi.reducer
      },
      middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware({ serializableCheck: false }).concat(pizzaApi.middleware);
      }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
