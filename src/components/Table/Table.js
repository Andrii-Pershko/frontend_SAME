import css from './Table.module.css';

const Table = ({
  wareHouseData: { ShortAddress, Number, WarehouseStatus, Reception },
}) => {
  const translatedNames = {
    Monday: 'Понеділок',
    Tuesday: 'Вівторок',
    Wednesday: 'Середа',
    Thursday: 'Четвер',
    Friday: "П'ятниця",
    Saturday: 'Субота',
    Sunday: 'Неділя',
  };

  return (
    <>
      <div className={css.wareHouseData}>
        <table>
          <tbody>
            <tr>
              <th>Адреса</th>
              <td>{ShortAddress}</td>
            </tr>
            <tr>
              <th>Відділення №</th>
              <td>{Number}</td>
            </tr>
            <tr>
              <th>Статус</th>
              <td>
                {WarehouseStatus === 'Working' ? 'Відчиненно' : 'Зачинено'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className={css.openintTitle}>Графік відділення</h3>

      <div className={css.openingTime}>
        <table>
          <thead>
            <tr>
              <th>День</th>
              <th>Години роботи</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(Reception).map(day => (
              <tr key={day}>
                <td>{translatedNames[day]}</td>
                <td>{Reception[day]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
