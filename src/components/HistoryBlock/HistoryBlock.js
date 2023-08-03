import { useDispatch, useSelector } from 'react-redux';
import { setInputValue } from 'redux/input/inputSlice';
import { getParcelInfo } from 'redux/operations';
import { selectParcelList } from 'redux/selectors';

const HistoryBlock = () => {
  const historyParceList = useSelector(selectParcelList);
  const dispatch = useDispatch();

  const handleGetStatusParcel = e => {
    const numberParcel = e.target.innerText;
    dispatch(getParcelInfo(numberParcel));
    dispatch(setInputValue(numberParcel));
  };

  return (
    <aside>
      <p>Історія посилок</p>

      {historyParceList.length > 0 ? (
        <ul>
          {historyParceList.map(parceNumber => (
            <li key={parceNumber} onClick={handleGetStatusParcel}>
              {parceNumber}
            </li>
          ))}
        </ul>
      ) : (
        <p>Ви ще не шукали посилки</p>
      )}
    </aside>
  );
};

export default HistoryBlock;
