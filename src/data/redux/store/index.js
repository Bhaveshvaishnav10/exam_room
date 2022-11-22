import {configureStore} from '@reduxjs/toolkit';

import authReducer from '../authSlice';

const store = configureStore({
  reducer: {
    authUser: authReducer,
  },
});

export default store;
