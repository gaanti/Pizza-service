import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState: initialStateTypes = {
      filterCategory: 'All',
      filterTitle: '',
      sortBy: 'price'
};

interface initialStateTypes {
      filterCategory: string;
      filterTitle: string;
      sortBy: string;
}

export const sliceSlice = createSlice({
      name: 'slice',
      initialState,
      reducers: {
            setFilterByTitle: (state, action: PayloadAction<string>) => {
                  state.filterTitle = action.payload;
            },
            setFilterByCategory: (state, action: PayloadAction<string>) => {
                  state.filterCategory = action.payload;
            },
            setSort: (state, action: PayloadAction<string>) => {
                  state.sortBy = action.payload;
            },

            setGetParams: (state, action: PayloadAction<any>) => {
                  const setOrNot = (initialState: any, valueToSet: any) => {
                        if (valueToSet !== undefined && valueToSet !== null) {
                              return valueToSet;
                              //debugger;
                        } else return initialState;
                  };
                  if (action.payload != null) {
                        state.filterCategory = setOrNot(state.filterCategory, action.payload.filterByCategory);
                        state.filterTitle = setOrNot(state.filterTitle, action.payload.filterTitle);
                        state.sortBy = setOrNot(state.sortBy, action.payload.sortBy);
                  }
            }
      }
});

export const { setFilterByTitle, setFilterByCategory, setGetParams, setSort } = sliceSlice.actions;

export default sliceSlice.reducer;
