const parceStoryList = JSON.parse(localStorage.getItem('storyParcel'));

export const initialState = {
  parcelStoryList: parceStoryList === null ? [] : parceStoryList,
  WarehouseSender: '',
  WarehouseRecipient: '',
  Status: '',
  isLoading: false,
  error: null,
};
