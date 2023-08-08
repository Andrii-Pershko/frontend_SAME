import { useDispatch, useSelector } from 'react-redux';
import { setInputValue } from 'redux/input/inputSlice';
import { getParcelInfo } from 'redux/operations';
import { resetParcelList } from 'redux/parcel/parcelSlice';
import { selectParcelList } from 'redux/selectors';
import css from './HistoryBlock.module.css';
import { useLocation, useNavigate } from 'react-router';

const HistoryBlock = ({ togleModal }) => {
  const historyParceList = useSelector(selectParcelList);
  console.log('Example', togleModal);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGetStatusParcel = e => {
    const numberParcel = e.target.innerText;
    dispatch(getParcelInfo(numberParcel));
    dispatch(setInputValue(numberParcel));

    if (togleModal !== undefined) {
      togleModal();
    }

    if (location.pathname === '/departaments') {
      navigate('/', { replace: true });
    }
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
