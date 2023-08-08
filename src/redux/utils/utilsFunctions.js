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

export const templareGetCitysNames = (cityName, API_KEY) => {
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

export const templareGetWarehouses = (cityName, API_KEY) => {
  return {
    apiKey: API_KEY,
    modelName: 'Address',
    calledMethod: 'getWarehouses',
    methodProperties: {
      CityName: cityName,
    },
  };
};
