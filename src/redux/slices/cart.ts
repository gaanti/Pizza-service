import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
      total_price: 0,
      items: [] as PizzaForCart[]
};

export type PizzaForCart = {
      title: string;
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
                  } else state.items.push(action.payload);
            },
            deletePizza: (state, action: PayloadAction<PizzaForCart>) => {
                  const addOrIncrease = state.items.indexOf(action.payload);
                  if (addOrIncrease !== -1) {
                        state.items.splice(addOrIncrease, 1);
                  }
            },
            deleteAllPizzas: (state, action: PayloadAction<PizzaForCart>) => {
                  const addOrIncrease = state.items.indexOf(action.payload);
                  if (addOrIncrease !== -1) {
                        state.items = [];
                  }
            }
      }
});

export const { addItemOrIncreaseQuantity, deletePizza, deleteAllPizzas } = cartSlice.actions;

export default cartSlice.reducer;