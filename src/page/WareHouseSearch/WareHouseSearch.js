import css from './WareHouseSearch.module.css';
import { Input } from 'components/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCityList,
  selectCityName,
  selectIsLoadingCity,
  selectIsLoadingWareHouse,
  selectSelectWareHouse,
  selectWareHouseList,
  selectWareHouseName,
} from 'redux/selectors';
import {
  changeCityName,
  resetCityName,
  resetWareHouse,
  resetWarehouseField,
  setCityList,
  setSelectWareHouse,
  setWareHouseName,
} from 'redux/wareHouse/wareHouseSlice';
import List from 'components/List';
import { getCitysNames, getWareHousesList } from 'redux/operations';
import { useEffect, useState } from 'react';
import Table from 'components/Table/Table';

const WareHouseSearch = () => {
  const [closeWareHouseList, setCloseWareHouseList] = useState(true);
  const [closeCityList, setCloseCityList] = useState(true);
  // const [selectWareHouse, setSelectWarhouse] = useState(null);

  const dispath = useDispatch();

  const selectWareHouse = useSelector(selectSelectWareHouse);
  const cityName = useSelector(selectCityName);
  const cityList = useSelector(selectCityList);
  const cityIsLoading = useSelector(selectIsLoadingCity);

  const wareHouseInput = useSelector(selectWareHouseName);
  const wareHouseList = useSelector(selectWareHouseList);
  const wareHouseIsLoad = useSelector(selectIsLoadingWareHouse);

  const filteredWarehouse = wareHouseList.filter(warehouse =>
    warehouse.Description.toLowerCase().includes(wareHouseInput)
  );

  useEffect(() => {
    if (cityList.length > 0) {
      setCloseCityList(false);
    } else {
      setCloseCityList(true);
    }

    if (filteredWarehouse.length > 0) {
      setCloseWareHouseList(false);
    } else {
      setCloseWareHouseList(true);
    }
  }, [cityList, filteredWarehouse, wareHouseList]);

  const handleCityChange = async e => {
    const cityValue = e.target.value;
    dispath(changeCityName(cityValue));
    dispath(getCitysNames(cityValue));
    if (cityList.length > 0) {
      setCloseCityList(false);
    }

    if (wareHouseList.length > 0) {
      dispath(resetWareHouse());
    }
  };

  const handleClearCityField = () => {
    dispath(resetCityName());
  };

  const handleSelectCity = async e => {
    const selectCity = e.target.innerHTML;
    dispath(changeCityName(selectCity));
    dispath(setCityList([]));
    const cityData = cityList.filter(city => {
      return city.Present === selectCity;
    });
    dispath(getWareHousesList(cityData[0].MainDescription));
  };

  const handleSelectWareHouse = e => {
    const selectWareHouse = e.target.innerHTML;
    dispath(setWareHouseName(selectWareHouse));

    setCloseWareHouseList(true);

    const warhouseData = wareHouseList.filter(
      wareHouse => wareHouse.Description === selectWareHouse
    );
    dispath(setSelectWareHouse(warhouseData));
    // setSelectWarhouse(warhouseData);
  };

  const handlerWareHouse = e => {
    const wareHouseValue = e.target.value;
    dispath(setWareHouseName(wareHouseValue));
    dispath(setSelectWareHouse(null));
  };

  const handleClearWareHouseField = () => {
    dispath(resetWarehouseField());
    dispath(setSelectWareHouse(null));
  };
  return (
    <>
      <h1>Шукайте відділення свого міста</h1>
      <div className={css.inputThumb}>
        <Input
          value={cityName}
          placeholder={'Назва міста'}
          change={handleCityChange}
          cleanField={handleClearCityField}
          styleName={'wareHouseFild'}
          isLoading={cityIsLoading}
        />

        <List
          list={cityList}
          property={'Present'}
          select={handleSelectCity}
          close={closeCityList}
        />
      </div>

      <div className={css.inputThumb}>
        <Input
          value={wareHouseInput}
          change={handlerWareHouse}
          placeholder={'Відділення/Адреса'}
          styleName={'wareHouseFild'}
          cleanField={handleClearWareHouseField}
          disabled={wareHouseList.length === 0}
          isLoading={wareHouseIsLoad}
        />
        <List
          list={filteredWarehouse}
          property={'Description'}
          select={handleSelectWareHouse}
          filterProperty={wareHouseInput}
          close={closeWareHouseList}
        />
      </div>
      {selectWareHouse ? <Table wareHouseData={selectWareHouse[0]} /> : null}
    </>
  );
};

export { WareHouseSearch };
