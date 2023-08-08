import { createSlice } from '@reduxjs/toolkit';
import { getCitysNames, getWareHousesList } from 'redux/operations';
import { initialState } from './initialState';
import {
  fetchCityListFulfilled,
  fetchCityListPending,
  fetchCityListRejected,
  fetchWareHouseFulfilled,
  fetchWareHousePending,
  fetchWareHouseRejected,
} from './wareHouseFunctions';

const wareHousetSlice = createSlice({
  name: 'wareHouse',
  initialState,
  reducers: {
    changeCityName: (state, action) => {
      state.cityName = action.payload;
    },
    setCityList: (state, action) => {
      state.cityList = action.payload;
    },
    resetCityName: (state, action) => {
      state.cityName = '';
      state.cityList = [];
      state.wareHouseList = [];
      state.wareHouseName = '';
    },
    setWareHouseName: (state, action) => {
      state.wareHouseName = action.payload;
    },
    setSelectWareHouse: (state, actio) => {
      state.selecrWarhouse = actio.payload;
    },
    resetWarehouseField: state => {
      state.wareHouseName = '';
    },
    resetWareHouse: state => {
      state.wareHouseList = [];
      state.wareHouseName = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCitysNames.pending, fetchCityListPending)
      .addCase(getCitysNames.fulfilled, fetchCityListFulfilled)
      .addCase(getCitysNames.rejected, fetchCityListRejected)
      .addCase(getWareHousesList.pending, fetchWareHousePending)
      .addCase(getWareHousesList.fulfilled, fetchWareHouseFulfilled)
      .addCase(getWareHousesList.rejected, fetchWareHouseRejected);
  },
});

export const {
  changeCityName,
  resetCityName,
  setCityList,
  setWareHouseName,
  resetWarehouseField,
  resetWareHouse,
  setSelectWareHouse,
} = wareHousetSlice.actions;
export const wareHouseExtraReducer = wareHousetSlice.reducer;
