import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cart: "",
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setPizzas: (state, action: PayloadAction<string>) => {
            state.cart = action.payload
        },
    },
})

export const {setPizzas} = cartSlice.actions

export default cartSlice.reducer;