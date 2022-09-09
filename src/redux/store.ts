import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import slice from './slices/filtering_params';
import cart from './slices/cart';
import pizzas from './slices/pizzas';
import { useDispatch } from 'react-redux';
import { pizzaApi, useGetPizzasQuery } from "./services/pizza";


export const store = configureStore({
      reducer: {
            params: slice,
            cart: cart,
            pizzas: pizzas,
            [pizzaApi.reducerPath]: pizzaApi.reducer
      },
      middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(pizzaApi.middleware);
      }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
