import { useDispatch, useSelector } from 'react-redux';
import { setInputValue } from 'redux/input/inputSlice';
import { getParcelInfo } from 'redux/operations';
import { resetParcelList } from 'redux/parcel/parcelSlice';
import { selectParcelList } from 'redux/selectors';
import css from './HistoryBlock.module.css';

const HistoryBlock = ({ togleModal }) => {
  const historyParceList = useSelector(selectParcelList);
  const dispatch = useDispatch();

  console.log('Example', historyParceList.length);

  const handleGetStatusParcel = e => {
    const numberParcel = e.target.innerText;
    dispatch(getParcelInfo(numberParcel));
    dispatch(setInputValue(numberParcel));
    togleModal();
  };

  const cleanStoryList = () => {
    localStorage.setItem('storyParcel', '[]');
    dispatch(resetParcelList());
  };

  if (historyParceList.length === 0) {
    return (
      <div className={css.history}>
        <p>Історія посилок порожння</p>
      </div>
    );
  }
  return (
    <div className={css.history}>
      <p>Історія посилок</p>
      <button className={css.cleanBtn} onClick={cleanStoryList}>
        Очистити історію
      </button>

      <ul>
        {historyParceList.map(parceNumber => (
          <li key={parceNumber} onClick={handleGetStatusParcel}>
            {parceNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryBlock;
