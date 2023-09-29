import { configureStore } from '@reduxjs/toolkit';
import phoneSlice from '../redux/phoneSlice';
import filterSlice from './filterSlice';

const store = configureStore({
  reducer: {
    phonebook: phoneSlice,
    filter: filterSlice
  },
});

export default store;
