import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  parcelHistory,
  templareGetCitysNames,
  templareGetWarehouses,
  templateShippingData,
} from './utils/utilsFunctions';

const API_KEY = '4bf839369c9c7b5597f4b8745e5f7010';

axios.defaults.baseURL = 'https://api.novaposhta.ua/v2.0/json/';

export const getParcelInfo = createAsyncThunk('parcelInf', async inputValue => {
  const responce = await axios.post(
    '',
    templateShippingData(inputValue, API_KEY)
  );
  const { WarehouseSender, WarehouseRecipient, Status, Number } =
    responce.data.data[0];

  if (Status !== 'Номер не найден') {
    parcelHistory(inputValue);
  }

  const parcelStory = JSON.parse(localStorage.getItem('storyParcel'));

  console.log('Example', Number);

  return {
    WarehouseSender,
    WarehouseRecipient,
    Status,
    inputValue,
    parcelStory,
    Number,
  };
});

export const getCitysNames = createAsyncThunk(
  'wareHouse/getCitysName',
  async cityName => {
    const responce = await axios.post(
      '',
      templareGetCitysNames(cityName, API_KEY)
    );

    return responce.data.data[0].Addresses;
  }
);

export const getWareHousesList = createAsyncThunk(
  'warerHouse/getWareHouseName',
  async cityName => {
    const responce = await axios.post(
      '',
      templareGetWarehouses(cityName, API_KEY)
    );

    return responce.data.data;
  }
);

// const getCitysName = createAsyncThunk(
//   'wearHouse',
//   async
// )

// export const getCityName = async cityName => {
//   const responce = await axios.post('', templareGetCityName(cityName));
//   return responce.data.data;
// };

// export const getWarehouses = async cityName => {
//   const responce = await axios.post('', templareGetWarehouses(cityName));
//   return responce.data.data;
// };
