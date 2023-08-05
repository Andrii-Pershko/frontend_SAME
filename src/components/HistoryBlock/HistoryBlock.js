import { useDispatch, useSelector } from 'react-redux';
import { setInputValue } from 'redux/input/inputSlice';
import { getParcelInfo } from 'redux/operations';
import { resetParcelList } from 'redux/parcel/parcelSlice';
import { selectParcelList } from 'redux/selectors';
import css from './HistoryBlock.module.css';

const HistoryBlock = () => {
  const historyParceList = useSelector(selectParcelList);
  const dispatch = useDispatch();

  const handleGetStatusParcel = e => {
    const numberParcel = e.target.innerText;
    dispatch(getParcelInfo(numberParcel));
    dispatch(setInputValue(numberParcel));
  };

  const cleanStoryList = () => {
    localStorage.setItem('storyParcel', '[]');
    dispatch(resetParcelList());
  };

  return (
    <aside className={css.historyHome}>
      <p>Історія посилок</p>
      <button onClick={cleanStoryList}>Очистити</button>

      {historyParceList.length > 0 ? (
        <ul>
          {historyParceList.map(parceNumber => (
            <li key={parceNumber} onClick={handleGetStatusParcel}>
              {parceNumber}
            </li>
          ))}
        </ul>
      ) : (
        <p>Історія посилок порожння</p>
      )}
    </aside>
  );
};

export default HistoryBlock;
