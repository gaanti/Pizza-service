import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { pizzaApi } from '../services/pizza';
import { RootState } from '../store';

const initialState = {
      filterCategoryId: 0,
      filterCategoryOptions: [{ id: 0, categoryTitle: '' }],
      filterTitle: null,
      sortBy: 'price',
      sortDirection: 'decrease'
};

export const sliceSlice = createSlice({
      name: 'slice',
      initialState,
      reducers: {
            setFilterByTitle: (state, action: PayloadAction<string>) => {
                  state.filterTitle = action.payload;
            },
            setFilterByCategoryId: (state, action: PayloadAction<number>) => {
                  state.filterCategoryId = action.payload;
            },
            setSort: (state, action: PayloadAction<string>) => {
                  state.sortBy = action.payload;
            },
            setSortDirection: (state, action: PayloadAction<string>) => {
                  state.sortDirection = action.payload;
            }
      },
      extraReducers: (builder) => {
            builder.addMatcher(pizzaApi.endpoints.getPizzas.matchFulfilled, (state, action) => {
                  state.filterCategoryOptions = action.payload.categories;
            });
      }
});
export const filteringParams = (state: RootState) => state.params;

export const { setFilterByTitle, setFilterByCategoryId, setSort, setSortDirection } = sliceSlice.actions;

export default sliceSlice.reducer;
