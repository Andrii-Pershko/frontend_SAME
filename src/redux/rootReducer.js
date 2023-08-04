import { combineReducers } from '@reduxjs/toolkit';
import { inputReducer } from './input/inputSlice';
import { parcelExtraReducer } from './parcel/parcelSlice';
import { departamentExtraReducer } from './departament/departamentSlice';

export const reducer = combineReducers({
  input: inputReducer,
  parcel: parcelExtraReducer,
  departament: departamentExtraReducer,
});
