import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'AUTH_USER',
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    authenticateUser(state, action) {
      state.isAuthenticated = action.payload;
    },
  },
});

export const {authenticateUser} = slice.actions;

export default slice.reducer;
