import { createSlice } from '@reduxjs/toolkit';

const inputSlice = createSlice({
  name: 'input',
  initialState: '',
  reducers: {
    setInputValue: (state, action) => {
      return action.payload;
    },
    resetInputTtn: () => {
      return '';
    },
  },
});

export const { setInputValue, resetInputTtn } = inputSlice.actions;
export const inputReducer = inputSlice.reducer;
