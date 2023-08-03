import { getCityName, getWarehouses } from 'citySearch_API/citySearch_API';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDepartamentList } from 'redux/operations';
import { departamentList } from 'redux/selectors';

const DepartmentList = () => {
  const [city, setCity] = useState('');

  const [cityList, setCityList] = useState([]);
  const [warehousesName, setWarehousesName] = useState('');
  const [warehousesList, setWarehousesList] = useState([]);

  const dispatch = useDispatch();

  const setInputCity = async e => {
    const freshcity = e.target.value;
    setCity(e.target.value);

    if (freshcity.length > 1) {
      const response = await getCityName(freshcity);
      if (response.length === 0) {
        setCityList([]);
        return;
      }
      setCityList(response[0].Addresses);
    } else {
      setCityList([]);
    }
  };

  const handleGetDepartament = e => {
    e.preventDefault();
    dispatch(getDepartamentList(city));
  };

  const handleSelectCity = async e => {
    const freshCity = e.target.innerHTML;
    setCity(freshCity);

    const responce = await getWarehouses(freshCity);
    console.log('Example', responce);

    setWarehousesList(responce);
  };

  const setWarehousName = e => {
    const freshWarehouseName = e.target.value;

    setWarehousesName(freshWarehouseName);
  };

  return (
    <>
      <form>
        <label>
          <input onChange={setInputCity} value={city}></input>
          <ul>
            {cityList.map((city, index) => (
              <li onClick={handleSelectCity} key={index}>
                {city.MainDescription}
              </li>
            ))}
          </ul>
          <button onClick={handleGetDepartament}>Пошук відділень</button>
        </label>

        <label>
          <input onChange={setWarehousName} value={warehousesName}></input>
          <ul>
            {warehousesName === ''
              ? warehousesList.map((warehouse, index) => (
                  <li key={index}>{warehouse.Description}</li>
                ))
              : warehousesList
                  .filter(warehouse =>
                    warehouse.Description.toLowerCase().includes(
                      warehousesName.toLowerCase()
                    )
                  )
                  .map((warehouse, index) => (
                    <li key={index}>{warehouse.Description}</li>
                  ))}
          </ul>
        </label>
      </form>
    </>
  );
};

export { DepartmentList };
