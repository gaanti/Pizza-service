import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { PizzaForCart } from '../../types';
import isequal from 'lodash.isequal';
import { RootState } from '../../store';

export const func = () => {
      const getItemsInCart = () => {
            const itemsInCart = JSON.parse(window.localStorage.getItem('cart') as string) as PizzaForCart[];
            return itemsInCart ? itemsInCart : [];
      };
      let total_price = 0;
      total_price = getItemsInCart().reduce(
            (previousValue: number, currentValue: PizzaForCart) => previousValue + currentValue.price * currentValue.quantity,
            0
      );
      return { items: getItemsInCart(), total_price: total_price };
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
                  window.localStorage.setItem('cart', JSON.stringify(state.items));
            },
            increase: (state, action: PayloadAction<number>) => {
                  const specificItemInCartQty = state.items[action.payload];
                  ++specificItemInCartQty.quantity;
                  window.localStorage.setItem('cart', JSON.stringify(state.items));
                  state.total_price = state.items.reduce(
                        (previousValue, currentValue) => previousValue + currentValue.price * currentValue.quantity,
                        0
                  );
            },
            decrease: (state, action: PayloadAction<number>) => {
                  const specificItemInCartQty = state.items[action.payload];
                  if (specificItemInCartQty.quantity > 1) {
                        --specificItemInCartQty.quantity;
                  } else state.items.splice(action.payload, 1);
                  window.localStorage.setItem('cart', JSON.stringify(state.items));
                  state.total_price = state.items.reduce(
                        (previousValue, currentValue) => previousValue + currentValue.price * currentValue.quantity,
                        0
                  );
            },
            deleteLine: (state, action: PayloadAction<number>) => {
                  state.items.splice(action.payload, 1);
                  window.localStorage.setItem('cart', JSON.stringify(state.items));
                  state.total_price = state.items.reduce(
                        (previousValue, currentValue) => previousValue + currentValue.price * currentValue.quantity,
                        0
                  );
            },
            deleteAllPizzas: (state) => {
                  state.items = [];
                  state.total_price = 0;
                  window.localStorage.setItem('cart', JSON.stringify(state.items));
            }
      }
});

export const cartItemsSelect = (state: RootState) => state.cart.items;
export const cartTotalPriceSelect = (state: RootState) => state.cart.total_price;

export const { addItemOrIncreaseQuantity, deleteLine, increase, decrease, deleteAllPizzas } = cartSlice.actions;

export default cartSlice.reducer;
