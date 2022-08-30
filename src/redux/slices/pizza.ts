import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { pizzaApi } from '../services/pizza';
import { pizza } from '../types';

const initialState = {
      pizzas: [] as pizza[],
      total_pages_qty: 1,
      current_page_index: 0,
      status: ''
};

export const pizzaSlice = createSlice({
      name: 'pizza',
      initialState,

      reducers: {
            setPizzas: (state, action: PayloadAction<any>) => {
                  state.pizzas = action.payload;
            },
            setCurrentPage: (state, action: PayloadAction<number>) => {
                  if (typeof Number(action.payload) == 'number') {
                        state.current_page_index = action.payload;
                  }
            },
            setTotalPagesQuantity: (state, action: PayloadAction<number>) => {
                  state.current_page_index = action.payload;
            }
      },

      extraReducers: (builder) => {
            builder
                  .addMatcher(pizzaApi.endpoints.getPizzas.matchPending, (state, action) => {
                        state.status = 'loading';
                        console.log("I'm fetching", action);
                  })
                  .addMatcher(pizzaApi.endpoints.getPizzas.matchRejected, (state, action) => {
                        //state.status = "error";
                        console.log('error happened', action);
                  })
                  .addMatcher(pizzaApi.endpoints.getPizzas.matchFulfilled, (state, action) => {
                        console.log('SUCCESS!!!', action);
                        const POP = action.payload.content;
                        POP.forEach((e: any) => {
                              e.doughType = JSON.parse(e.doughType);
                              e.size = JSON.parse(e.size);
                        });
                        state.pizzas = POP;
                        state.total_pages_qty = action.payload.totalPages;
                        state.current_page_index = action.payload.pageable.pageNumber;
                        state.status = 'success';
                  });
      }
});

export const { setPizzas, setCurrentPage, setTotalPagesQuantity } = pizzaSlice.actions;

export default pizzaSlice.reducer;
