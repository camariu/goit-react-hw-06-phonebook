import { configureStore } from '@reduxjs/toolkit';
import phoneSlice from '../redux/phoneSlice';

const store = configureStore({
  reducer: {
    phonebook: phoneSlice,
  },
});

export default store;
