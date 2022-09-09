import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { PizzaForCart } from '../types';
import isequal from 'lodash.isequal';

export const func = () => {
      const pflor = () => {
            const POPO = JSON.parse(window.localStorage.getItem('cart') as string) as PizzaForCart[];
            return POPO ? POPO : [];
      };
      let total_price = 0;
      total_price = pflor().reduce(
            (previousValue: number, currentValue: PizzaForCart) => previousValue + currentValue.price * currentValue.quantity,
            0
      );
      return { items: pflor(), total_price: total_price };
};

const initialState = {
      total_price: func().total_price,
      items: func().items as PizzaForCart[]
};

export const cartSlice = createSlice({
      name: 'cart',
      initialState,
      reducers: {
            addItemOrIncreaseQuantity: (state, action: PayloadAction<PizzaForCart>) => {
                  const indexOfItem = state.items.findIndex(
                        (elem: PizzaForCart) =>
                              elem.price === action.payload.price &&
                              elem.doughWidth === action.payload.doughWidth &&
                              elem.doughRadius === action.payload.doughRadius &&
                              elem.title === action.payload.title &&
                              isequal(elem.ingredients, action.payload.ingredients)
                  );
                  if (state.items[indexOfItem]) {
                        ++state.items[indexOfItem].quantity;
                        state.total_price += action.payload.price;
                  } else {
                        state.items.push(action.payload);
                        state.total_price = state.items.reduce(
                              (previousValue, currentValue) => previousValue + currentValue.price * currentValue.quantity,
                              0
                        );
                  }
                  // @ts-ignore
                  window.localStorage.setItem('cart', JSON.stringify(state.items));
            },
            increase: (state, action: PayloadAction<number>) => {
                  const popo = state.items[action.payload]
                  ++popo.quantity
                  window.localStorage.setItem('cart', JSON.stringify(state.items));
            },
            decrease: (state, action: PayloadAction<number>) => {
                  const popo = state.items[action.payload]
                  if (popo.quantity > 1){
                        --popo.quantity
                  }else state.items.splice(action.payload, 1);
                  window.localStorage.setItem('cart', JSON.stringify(state.items));
            },
            deleteLine: (state, action: PayloadAction<number>) => {
                  state.items.splice(action.payload, 1);
                  window.localStorage.setItem('cart', JSON.stringify(state.items));
            },
            deleteAllPizzas: (state) => {
                  state.items = [];
                  state.total_price = 0;
                  window.localStorage.setItem('cart', JSON.stringify(state.items));
            },
      }
});

export const { addItemOrIncreaseQuantity, deleteLine, increase, decrease, deleteAllPizzas } = cartSlice.actions;

export default cartSlice.reducer;
