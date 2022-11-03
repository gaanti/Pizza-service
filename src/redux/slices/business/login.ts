import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const initialState = {
      authToken: ''
};

export const loginSlice = createSlice({
      name: 'login',
      initialState,
      reducers: {
            setToken: (state, action: PayloadAction<string>) => {
                  state.authToken = action.payload;
                  console.log(action.payload);
            }
      }
});

export const authTokenSelect = (state: RootState) => state.login.authToken;
export const { setToken } = loginSlice.actions;

export default loginSlice.reducer;
