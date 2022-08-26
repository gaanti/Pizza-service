import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
      pizzas: [] as pizza[],
      total_pageas_qty: 1,
      current_page_index: 0,
      status: ''
};
export type pizza = {
      title: string;
      image: string;
      doughType: string[];
      size: number[];
      price: number;
      category: string;
      rank: number;
};

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzas', async (params: any, { dispatch, getState }) => {
      const state: any = getState();
      const { sortBy, filterByCategory, currentPage, filterTitle } = params;
      const sortBy1 = `sortBy=${sortBy ? sortBy : 'price'}`;
      const filterByCategory1 = `&filterByCategory=${filterByCategory ? filterByCategory : 'All'}`;
      const currentPage1 = `&currentPage=${state.pizza.current_page_index}`;
      const filterTitle1 = filterTitle ? `&filterByTitle=${filterTitle}` : '';
      const { data } = await axios.get(`http://localhost:8080/pizzas?${sortBy1}${filterByCategory1}${currentPage1}${filterTitle1}`);
      dispatch(setCurrentPage(data.pageable.pageNumber));
      return data;
});

export const pizzaSlice = createSlice({
      name: 'pizza',
      initialState,
      reducers: {
            setPizzas: (state, action: PayloadAction<any>) => {
                  state.pizzas = action.payload;
            },
            setCurrentPage: (state, action: PayloadAction<number>) => {
                  if (typeof action.payload == 'number') {
                        state.current_page_index = action.payload;
                  }
            },
            setTotalPageasQuantity: (state, action: PayloadAction<number>) => {
                  state.current_page_index = action.payload;
            }
      },
      extraReducers: (builder) => {
            builder.addCase(fetchPizzas.pending, (state, action) => {
                  state.status = 'loading';
            });
            builder.addCase(fetchPizzas.rejected, (state, action) => {
                  state.status = 'error';
                  console.log(action.payload);
            });
            builder.addCase(fetchPizzas.fulfilled, (state, action) => {
                  const POP = action.payload.content;
                  POP.forEach((e: any) => {
                        e.doughType = JSON.parse(e.doughType);
                        e.size = JSON.parse(e.size);
                  });
                  state.pizzas = POP;
                  state.total_pageas_qty = action.payload.totalPages;
                  state.current_page_index = action.payload.pageable.pageNumber;
                  state.status = 'success';
            });
      }
});

export const { setPizzas, setCurrentPage, setTotalPageasQuantity } = pizzaSlice.actions;

export default pizzaSlice.reducer;
