import { createSlice } from '@reduxjs/toolkit';
import { getDepartamentList } from 'redux/operations';
import {
  fetchDepartamentFulfilled,
  fetchDepartamentPending,
  fetchDepartamentRejected,
} from './departamentFunctions';

const departamentSlice = createSlice({
  name: 'departamentList',
  initialState: [],
  extraReducers: builder => {
    builder
      .addCase(getDepartamentList.pending, fetchDepartamentPending)
      .addCase(getDepartamentList.fulfilled, fetchDepartamentFulfilled)
      .addCase(getDepartamentList.rejected, fetchDepartamentRejected);
  },
});

export const departamentExtraReducer = departamentSlice.reducer;
