import {configureStore} from '@reduxjs/toolkit'
import sortSlice from "./slices/sort";
import filterSlice from "./slices/filter";

export const store = configureStore({
    reducer: {
        sort: sortSlice,
        filter: filterSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch