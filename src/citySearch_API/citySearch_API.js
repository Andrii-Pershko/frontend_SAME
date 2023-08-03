import axios from 'axios';

const API_KEY = '4bf839369c9c7b5597f4b8745e5f7010';

axios.defaults.baseURL = 'https://api.novaposhta.ua/v2.0/json/';

export const getCityName = async cityName => {
  const responce = await axios.post('', templareGetCityName(cityName));
  return responce.data.data;
};

export const getWarehouses = async cityName => {
  const responce = await axios.post('', templareGetWarehouses(cityName));
  return responce.data.data;
};

const templareGetCityName = cityName => {
  return {
    apiKey: API_KEY,
    modelName: 'Address',
    calledMethod: 'searchSettlements',
    methodProperties: {
      CityName: cityName,
      Limit: '10',
      Page: '1',
    },
  };
};

const templareGetWarehouses = cityName => {
  return {
    apiKey: API_KEY,
    modelName: 'Address',
    calledMethod: 'getWarehouses',
    methodProperties: {
      CityName: cityName,
    },
  };
};
