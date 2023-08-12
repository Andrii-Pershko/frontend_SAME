export const fetchCityListPending = (state, action) => {
  state.isLoadingCity = true;
  state.errorCity = false;
};

export const fetchCityListFulfilled = (state, action) => {
  state.isLoadingCity = false;
  state.cityList = action.payload;
  if (action.payload.length === 0) {
    state.errorCity = true;
  }
};

export const fetchCityListRejected = (state, action) => {
  state.isLoadingCity = false;
  state.errorCity = true;
};

export const fetchWareHousePending = (state, action) => {
  state.errorWareHouse = false;
  state.isLoadingWareHouse = true;
};

export const fetchWareHouseFulfilled = (state, action) => {
  state.isLoadingWareHouse = false;
  state.wareHouseList = action.payload;
  if (action.payload.length === 0) {
    state.errorWareHouse = true;
  }
};

export const fetchWareHouseRejected = (state, action) => {
  state.isLoadingWareHouse = false;
  state.errorWareHouse = true;
};
