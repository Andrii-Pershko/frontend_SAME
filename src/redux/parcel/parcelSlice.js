import { createSlice } from '@reduxjs/toolkit';
import { getParcelInfo } from 'redux/operations';
import {
  fetchParcelFulfilled,
  fetchParcelPending,
  fetchParcelRejected,
} from './parcelFunction';
import { initialState } from './initialState';

const parcelSlice = createSlice({
  name: 'parcel',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getParcelInfo.pending, fetchParcelPending)
      .addCase(getParcelInfo.fulfilled, fetchParcelFulfilled)
      .addCase(getParcelInfo.rejected, fetchParcelRejected);
  },
});

export const parcelReducer = parcelSlice.reducer;
