import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    sortBy: "price",
}

export const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSort: (state, action: PayloadAction<string>) => {
            state.sortBy = action.payload
        },
    },
})

export const {setSort} = sortSlice.actions

export default sortSlice.reducer;