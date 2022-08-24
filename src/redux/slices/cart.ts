import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
      total_price: 0,
      items: [] as PizzaForCart[]
};

export type PizzaForCart = {
      title: string;
      image: string;
      price: number;
      doughType: string;
      size: number;
      quantity: number;
};

export const cartSlice = createSlice({
      name: 'cart',
      initialState,
      reducers: {
            addItemOrIncreaseQuantity: (state, action: PayloadAction<PizzaForCart>) => {
                  //const addOrIncrease = state.items.indexOf(action.payload)
                  const indexOfItem = state.items.findIndex(
                        (elem: any[0]) =>
                              elem.price === action.payload.price &&
                              elem.doughType === action.payload.doughType &&
                              elem.size === action.payload.size &&
                              elem.title === action.payload.title
                  );
                  if (state.items[indexOfItem]) {
                        ++state.items[indexOfItem].quantity;
                        state.total_price += action.payload.price;
                  } else {
                        state.items.push(action.payload);
                        state.total_price = state.items.reduce((previousValue, currentValue) => previousValue + currentValue.price*currentValue.quantity, 0);

                        console.log(state.total_price);
                  }
            },
            deletePizzaByType: (state, action: PayloadAction<PizzaForCart>) => {
                  const indexOfItem = state.items.findIndex(
                        (elem: any[0]) =>
                              elem.price === action.payload.price &&
                              elem.doughType === action.payload.doughType &&
                              elem.size === action.payload.size &&
                              elem.title === action.payload.title
                  );
                  if (indexOfItem !== -1) {
                        state.items.splice(indexOfItem, 1);
                        state.total_price = state.items.reduce((previousValue, currentValue) => previousValue + currentValue.price*currentValue.quantity, 0);

                  }
            },
            decreasePizzaQuantity: (state, action: PayloadAction<PizzaForCart>) => {
                  const indexOfItem = state.items.findIndex(
                        (elem: any[0]) =>
                              elem.price === action.payload.price &&
                              elem.doughType === action.payload.doughType &&
                              elem.size === action.payload.size &&
                              elem.title === action.payload.title
                  );
                  if (!(state.items[indexOfItem].quantity<=1)) {
                        --state.items[indexOfItem].quantity;
                  } else state.items.splice(indexOfItem, 1);

                  state.total_price = state.items.reduce((previousValue, currentValue) => previousValue + currentValue.price*currentValue.quantity, 0);
            },
            deleteAllPizzas: (state) => {
                  state.items = [];
                  state.total_price = 0;
            }
      }
});

export const { addItemOrIncreaseQuantity, deletePizzaByType, decreasePizzaQuantity, deleteAllPizzas } = cartSlice.actions;

export default cartSlice.reducer;
