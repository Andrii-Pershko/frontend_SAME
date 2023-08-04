import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInputValue } from 'redux/input/inputSlice';
import { resetStatus } from 'redux/parcel/parcelSlice';
import { selectInput } from 'redux/selectors';

const StatusBlock = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectInput);
  const { WarehouseSender, WarehouseRecipient, Status, error } = useSelector(
    state => state.parcel
  );

  useEffect(() => {
    if (Status === 'Номер не найден') {
      alert(`Посилка за номером ${inputValue} не знайдена.`);
      dispatch(resetStatus());
      dispatch(setInputValue(''));
    }
  });

  if (error !== null) {
    return <p>{error}</p>;
  }

  if (Status === '') {
    return <p>Ведіть номер ТТН в поле для вводу</p>;
  }

  return (
    <>
      <p>Статус доставки: {Status}</p>
      <p>Відправлено: {WarehouseRecipient}</p>
      <p>Отримано: {WarehouseSender}</p>
    </>
  );
};

export default StatusBlock;
