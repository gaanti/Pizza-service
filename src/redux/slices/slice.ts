import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState: initialStateTypes = {
      filterCategory: 'All',
      filterTitle: '',
      currentPageIndex: 0,

      overallPagesQuantity: 1,
      sortBy: 'price'
};

interface initialStateTypes {
      filterCategory: string;
      filterTitle: string;
      currentPageIndex: number;
      overallPagesQuantity: number;
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
            setCurrentPage: (state, action: PayloadAction<number>) => {
                  state.currentPageIndex = action.payload;
            },
            setOverallPagesQuantity: (state, action: PayloadAction<number>) => {
                  state.overallPagesQuantity = action.payload;
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
                        state.currentPageIndex = setOrNot(state.currentPageIndex, Number(action.payload.currentPage) || null);
                        state.overallPagesQuantity = setOrNot(
                              state.overallPagesQuantity,
                              Number(action.payload.overallPagesQuantity) || null
                        );
                  }
            }
      }
});

export const { setFilterByTitle, setFilterByCategory, setCurrentPage, setOverallPagesQuantity, setGetParams, setSort } = sliceSlice.actions;

export default sliceSlice.reducer;
