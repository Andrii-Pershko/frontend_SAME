export const fetchParcelPending = (state, action) => {
  state.isLoading = true;
};

export const fetchParcelFulfilled = (state, action) => {
  state.parcelStoryList = action.payload.parcelStory;
  state.isLoading = false;
  state.WarehouseSender =
    action.payload.WarehouseSender === ''
      ? 'Данні відсутні або приховані'
      : action.payload.WarehouseSender;
  state.WarehouseRecipient =
    action.payload.WarehouseRecipient === ''
      ? 'Данні відсутні або приховані'
      : action.payload.WarehouseRecipient;
  state.Status = action.payload.Status;
  state.error = null;
};

export const fetchParcelRejected = (state, action) => {
  state.isLoading = false;
  state.WarehouseSender = '';
  state.WarehouseRecipient = '';
  state.error = `Посилки ${action.meta.arg} не існує`;
};
