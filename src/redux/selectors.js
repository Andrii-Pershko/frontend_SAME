export const selectInput = state => state.input;

export const selectIsLoadinParcel = state => state.parcel.isLoading;
export const selectParcelList = state => state.parcel.parcelStoryList;

export const selectCityName = state => state.wareHouse.cityName;
export const selectCityList = state => state.wareHouse.cityList;
export const selectIsLoadingCity = state => state.wareHouse.isLoadingCity;
export const selectCityError = state => state.wareHouse.errorCity;

export const selectWareHouseName = state => state.wareHouse.wareHouseName;
export const selectWareHouseList = state => state.wareHouse.wareHouseList;
export const selectIsLoadingWareHouse = state =>
  state.wareHouse.isLoadingWareHouse;
export const selectSelectWareHouse = state => state.wareHouse.selecrWarhouse;
export const selectErrorWareHouse = state => state.wareHouse.errorWareHouse;
