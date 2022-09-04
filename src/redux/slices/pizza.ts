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
                  const temp = Number(action.payload)
                  if (typeof temp == 'number' && !isNaN(temp)) {
                        console.log("index changed");
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
                        console.log('SUCCESS!!!', action.payload.pizzas);
                        const POP = action.payload.pizzas.content;
                        POP.forEach((e: any) => {
                              e.doughType = JSON.parse(e.doughType);
                              e.size = JSON.parse(e.size);
                        });
                        state.pizzas = POP;
                        state.total_pages_qty = action.payload.pizzas.totalPages;
                        state.current_page_index = action.payload.pizzas.pageable.pageNumber;
                        state.status = 'success';
                  });
      }
});

export const { setPizzas, setCurrentPage, setTotalPagesQuantity } = pizzaSlice.actions;

export default pizzaSlice.reducer;
