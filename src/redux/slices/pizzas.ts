import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { pizzaApi } from '../services/pizza';
import { doughRadius, doughWidths, ingredient, pizza } from '../types';
import { RootState } from '../store';

const initialState: pizzas = {
      pizzas: [],
      ingredients: [],
      dough_radius: [],
      dough_widths: [],
      total_pages_qty: 1,
      current_page_index: 0,
      status: ''
};
interface pizzas {
      pizzas: pizza[];
      ingredients: ingredient[];
      dough_radius: doughRadius[];
      dough_widths: doughWidths[];
      total_pages_qty: number;
      current_page_index: number;
      status: string;
}

export const pizzaSlice = createSlice({
      name: 'pizzas',
      initialState,

      reducers: {
            setCurrentPage: (state, action: PayloadAction<number>) => {
                  const temp = Number(action.payload);
                  if (typeof temp == 'number' && !isNaN(temp)) {
                        console.log('index changed');
                        state.current_page_index = action.payload;
                  }
            },
            setTotalPagesQuantity: (state, action: PayloadAction<number>) => {
                  state.total_pages_qty = action.payload;
            }
      },

      extraReducers: (builder) => {
            builder
                  .addMatcher(pizzaApi.endpoints.getPizzas.matchPending, (state, action) => {
                        state.status = 'loading';
                        console.log("I'm fetching", action);
                  })
                  .addMatcher(pizzaApi.endpoints.getPizzas.matchRejected, (state, action) => {
                        //state.status = "ERROR";
                        console.log('error happened', action);
                  })
                  .addMatcher(pizzaApi.endpoints.getPizzas.matchFulfilled, (state, action) => {
                        console.log('SUCCESS!!!', action.payload);
                        state.pizzas = action.payload.pizzas.content;
                        state.total_pages_qty = action.payload.pizzas.totalPages;
                        state.current_page_index = action.payload.pizzas.pageable.pageNumber;
                        state.dough_radius = action.payload.doughRadius;
                        state.dough_widths = action.payload.doughWidths;
                        state.ingredients = action.payload.ingredients;
                        state.status = 'success';
                  });
      }
});

export const ingredientsSelect = (state: RootState) => state.pizzas.ingredients;
export const dough_radiusSelect = (state: RootState) => state.pizzas.dough_radius;
export const dough_widthsSelect = (state: RootState) => state.pizzas.dough_widths;
export const total_pages_qtySelect = (state: RootState) => state.pizzas.total_pages_qty;
export const current_page_indexSelect = (state: RootState) => state.pizzas.current_page_index;
export const statusSelect = (state: RootState) => state.pizzas.status;

export const { setCurrentPage, setTotalPagesQuantity } = pizzaSlice.actions;

export default pizzaSlice.reducer;
