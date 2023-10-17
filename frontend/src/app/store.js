import { configureStore } from '@reduxjs/toolkit';
import signupSlice from '../pages/Signup/slice/signupSlice';
import loginSlice from '../pages/Login/slice/loginSlice';
import {createLogger } from 'redux-logger';

const logger = createLogger()

const store = configureStore({
  reducer: {
    signup: signupSlice,
    login: loginSlice,
    // Add more reducers here if needed
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
