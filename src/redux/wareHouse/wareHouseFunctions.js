export const fetchCityListPending = (state, action) => {
  state.isLoadingCity = true;
};

export const fetchCityListFulfilled = (state, action) => {
  state.isLoadingCity = false;
  state.cityList = action.payload;
};

export const fetchCityListRejected = (state, action) => {
  state.isLoadingCity = false;
  state.error = true;
};

export const fetchWareHousePending = (state, action) => {
  state.error = false;
  state.isLoadingWareHouse = true;
};

export const fetchWareHouseFulfilled = (state, action) => {
  state.isLoadingWareHouse = false;
  state.wareHouseList = action.payload;
};

export const fetchWareHouseRejected = (state, action) => {
  state.isLoadingWareHouse = false;
  state.error = true;
};
