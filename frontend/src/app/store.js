import { configureStore } from '@reduxjs/toolkit';
import signupSlice from '../pages/Signup/slice/signupSlice';
import {createLogger } from 'redux-logger';

const logger = createLogger()

const store = configureStore({
  reducer: {
    signup: signupSlice,
    // Add more reducers here if needed
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
