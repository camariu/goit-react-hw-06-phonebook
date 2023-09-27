import { createSlice } from '@reduxjs/toolkit';

const initialFilter = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilter,
  reducers: {
    filterContacts: {
      reducer(state, action) {
        state.filter = action.payload.filter;
      },

      prepare(filter) {
        return {
          payload: {
            filter,
          },
        };
      },
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const {filterContacts} = filterSlice.actions;
