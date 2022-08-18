import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    filterBy: "All",
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<string>) => {
            state.filterBy = action.payload
        },
    },
})

export const {setFilter} = filterSlice.actions

export default filterSlice.reducer;