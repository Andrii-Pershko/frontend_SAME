import { combineReducers } from '@reduxjs/toolkit';
import { inputReducer } from './input/inputSlice';
import { parcelReducer } from './parcel/parcelSlice';

export const reducer = combineReducers({
  input: inputReducer,
  parcel: parcelReducer,
});
