import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInputValue } from 'redux/input/inputSlice';
import { resetStatus } from 'redux/parcel/parcelSlice';
import { selectInput } from 'redux/selectors';
import css from './StatusBlock.module.css';

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
    return (
      <p className={css.enterTTNPlaceholder}>
        Ведіть номер ТТН в поле для вводу
      </p>
    );
  }

  return (
    <div className={css.pearcelData}>
      <table>
        <tbody>
          <tr>
            <th>Статус доставки</th>
            <td>{Status}</td>
          </tr>
          <tr>
            <th>Відправленно</th>
            <td>{WarehouseSender}</td>
          </tr>
          <tr>
            <th>Отримано</th>
            <td>{WarehouseRecipient}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatusBlock;
