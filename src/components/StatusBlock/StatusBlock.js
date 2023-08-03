import { useSelector } from 'react-redux';

const StatusBlock = () => {
  const { WarehouseSender, WarehouseRecipient, Status, error } = useSelector(
    state => state.parcel
  );

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
