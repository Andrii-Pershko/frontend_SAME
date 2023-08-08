import { combineReducers } from '@reduxjs/toolkit';
import { inputReducer } from './input/inputSlice';
import { parcelExtraReducer } from './parcel/parcelSlice';
import { wareHouseExtraReducer } from './wareHouse/wareHouseSlice';

export const reducer = combineReducers({
  input: inputReducer,
  parcel: parcelExtraReducer,
  wareHouse: wareHouseExtraReducer,
});
