import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { parcelHistory, templateShippingData } from './utils/utilsFunctions';

const API_KEY = '4bf839369c9c7b5597f4b8745e5f7010';

axios.defaults.baseURL = 'https://api.novaposhta.ua/v2.0/json/';

export const getParcelInfo = createAsyncThunk(
  'parcel/getParcelInf',
  async inputValue => {
    const responce = await axios.post(
      '',
      templateShippingData(inputValue, API_KEY)
    );
    const { WarehouseSender, WarehouseRecipient, Status } =
      responce.data.data[0];

    if (responce.data.success) {
      parcelHistory(inputValue);
    }

    const parcelStory = JSON.parse(localStorage.getItem('storyParcel'));

    return {
      WarehouseSender,
      WarehouseRecipient,
      Status,
      inputValue,
      parcelStory,
    };
  }
);
