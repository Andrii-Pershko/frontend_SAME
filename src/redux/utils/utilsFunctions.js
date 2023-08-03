export const parcelHistory = parcelNumber => {
  let storageParcel = JSON.parse(localStorage.getItem('storyParcel'));
  const checkRepeatParcel = storageParcel.includes(parcelNumber);

  if (checkRepeatParcel) {
    return;
  }

  if (storageParcel.length > 9) {
    storageParcel = storageParcel.slice(-9);
  }

  storageParcel.push(parcelNumber);

  localStorage.setItem('storyParcel', JSON.stringify(storageParcel));
};

export const templateShippingData = (DocumentNumber, API_KEY) => {
  return {
    apiKey: `${API_KEY}`,
    modelName: 'TrackingDocument',
    calledMethod: 'getStatusDocuments',
    methodProperties: {
      Documents: [
        {
          DocumentNumber,
        },
      ],
    },
  };
};
