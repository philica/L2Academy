import { configureStore } from '@reduxjs/toolkit';
import signupSlice from '../pages/Signup/slice/signupSlice';
import loginSlice from '../pages/Login/slice/loginSlice';
import profileSlice from '../pages/Profile/slice/profileSlice';
import {createLogger } from 'redux-logger';

const logger = createLogger()

const store = configureStore({
  reducer: {
    signup: signupSlice,
    login: loginSlice,
    profile: profileSlice,
    // Add more reducers here if needed
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
