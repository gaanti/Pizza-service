import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { PizzaForCart } from '../types';

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
            setCartPizzas: (state, action: PayloadAction<PizzaForCart>) => {
                  //const addOrIncrease = state.items.indexOf(action.payload)
                  // @ts-ignore
                  state.items = action.payload;
                  state.total_price = state.items.reduce(
                        (previousValue, currentValue) => previousValue + currentValue.price * currentValue.quantity,
                        0
                  );
            },
            addItemOrIncreaseQuantity: (state, action: PayloadAction<PizzaForCart>) => {
                  console.log(state.items);
                  //const addOrIncrease = state.items.indexOf(action.payload)
                  const indexOfItem = state.items.findIndex(
                        (elem: PizzaForCart) =>
                              elem.price === action.payload.price &&
                              elem.doughWidth === action.payload.doughWidth &&
                              elem.doughRadius === action.payload.doughRadius &&
                              elem.title === action.payload.title
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
            deletePizzaByType: (state, action: PayloadAction<PizzaForCart>) => {
                  const indexOfItem = state.items.findIndex(
                    (elem: PizzaForCart) =>
                      elem.price === action.payload.price &&
                      elem.doughWidth === action.payload.doughWidth &&
                      elem.doughRadius === action.payload.doughRadius &&
                      elem.title === action.payload.title
                  );
                  if (indexOfItem !== -1) {
                        state.items.splice(indexOfItem, 1);
                        state.total_price = state.items.reduce(
                              (previousValue, currentValue) => previousValue + currentValue.price * currentValue.quantity,
                              0
                        );
                  }
                  // @ts-ignore
                  window.localStorage.setItem('cart', JSON.stringify(state.items));
            },
            decreasePizzaQuantity: (state, action: PayloadAction<PizzaForCart>) => {
                  const indexOfItem = state.items.findIndex(
                    (elem: PizzaForCart) =>
                      elem.price === action.payload.price &&
                      elem.doughWidth === action.payload.doughWidth &&
                      elem.doughRadius === action.payload.doughRadius &&
                      elem.title === action.payload.title
                  );
                  if (!(state.items[indexOfItem].quantity <= 1)) {
                        --state.items[indexOfItem].quantity;
                  } else state.items.splice(indexOfItem, 1);

                  state.total_price = state.items.reduce(
                        (previousValue, currentValue) => previousValue + currentValue.price * currentValue.quantity,
                        0
                  );
                  // @ts-ignore
                  window.localStorage.setItem('cart', JSON.stringify(state.items));
            },
            deleteAllPizzas: (state) => {
                  state.items = [];
                  state.total_price = 0;
                  // @ts-ignore
                  window.localStorage.setItem('cart', JSON.stringify(state.items));
            }
      }
});

export const { addItemOrIncreaseQuantity, deletePizzaByType, decreasePizzaQuantity, deleteAllPizzas } = cartSlice.actions;

export default cartSlice.reducer;
