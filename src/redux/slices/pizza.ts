import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
      pizzas: [] as any,
      total_pageas_qty: 1,
      status: ""
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

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzas', async (params: any) => {
      const { sortBy, filterByCategory, currentPage, filterTitle } = params;
      const sortBy1 = sortBy ? `sortBy=${sortBy}` : '';
      const filterByCategory1 = filterByCategory ? `&filterByCategory=${filterByCategory}` : '';
      const currentPage1 = Number(currentPage) !== undefined ? `&currentPage=${currentPage}` : '';
      //const currentPage1 = `&currentPage=${currentPage}`;
      const filterTitle1 = filterTitle ? `&filterByTitle=${filterTitle}` : '';

      const { data } = await axios.get(
            `http://localhost:8080/pizzas?${sortBy1}${filterByCategory1}${currentPage1}${filterTitle1}`
      );
      return data;
});

export const pizzaSlice = createSlice({
      name: 'pizza',
      initialState,
      reducers: {
            setPizzas: (state, action: PayloadAction<string>) => {
                  //state.pizzas = action.payload;
            }
      },
      extraReducers: (builder) => {
            builder.addCase(fetchPizzas.pending, (state, action) => {
                  state.status = "loading";
            })
            builder.addCase(fetchPizzas.rejected, (state, action) => {
                  state.status = "error";
                  console.log(action.payload);
            })
            builder.addCase(fetchPizzas.fulfilled, (state, action) => {
                  const POP = action.payload.content
                  POP.forEach((e: any) => {
                        e.doughType = JSON.parse(e.doughType);
                        e.size = JSON.parse(e.size);
                  })
                  state.pizzas = POP
                  state.total_pageas_qty = action.payload.totalPages
                  state.status = "success"
            })
      },
});

export const { setPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;
