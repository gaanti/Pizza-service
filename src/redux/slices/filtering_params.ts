import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { pizzaApi } from "../services/pizza";
import { filteringParams } from "../types";

const initialState = {
      filterCategoryId: 0,
      filterCategoryOptions: [{id:0, categoryTitle:''}],
      filterTitle: null,
      sortBy: 'price'
};

export const sliceSlice = createSlice({
      name: 'slice',
      initialState,
      reducers: {
            setFilterByTitle: (state, action: PayloadAction<string>) => {
                  // @ts-ignore
                  state.filterTitle = action.payload;
            },
            setFilterByCategoryId: (state, action: PayloadAction<number>) => {
                  state.filterCategoryId = action.payload;
            },
            setSort: (state, action: PayloadAction<string>) => {
                  state.sortBy = action.payload;
            },
            setGetParams: (state, action: PayloadAction<any>) => {
                  const setOrNot = (initialState: any, valueToSet: any) => {
                        if (valueToSet !== undefined && valueToSet !== null) {
                              return valueToSet;
                        } else return initialState;
                  };
                  if (action.payload != null) {
                        state.filterCategoryId = setOrNot(state.filterCategoryId, action.payload.filterByCategoryId);
                        state.filterTitle = setOrNot(state.filterTitle, action.payload.filterTitle);
                        state.sortBy = setOrNot(state.sortBy, action.payload.sortBy);
                  }
            }
      }, extraReducers: builder => {
            builder.addMatcher(pizzaApi.endpoints.getPizzas.matchFulfilled, (state, action) => {
                  state.filterCategoryOptions = action.payload.categories;
            })
      }
});

export const { setFilterByTitle, setFilterByCategoryId, setGetParams, setSort } = sliceSlice.actions;

export default sliceSlice.reducer;
