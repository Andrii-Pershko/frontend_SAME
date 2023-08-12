import { useDispatch, useSelector } from 'react-redux';
import { getParcelInfo } from 'redux/operations';
import { selectInput, selectIsLoadinParcel } from 'redux/selectors';
import css from './BtnGetTTN.module.css';

const BtnGetTTN = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectInput);
  const isLoading = useSelector(selectIsLoadinParcel);

  const handleClick = e => {
    e.preventDefault();
    if (inputValue.length !== 14) {
      alert(
        'Номер накладної повинен складатись лише з цифр та мати довжину 14 символів, превірте правельність вводу'
      );
      return;
    }

    dispatch(getParcelInfo(inputValue));
  };
  return (
    <button className={css.btnGetTTN} onClick={handleClick}>
      {isLoading ? 'Завантаження...' : 'Отримати статус'}
    </button>
  );
};

export default BtnGetTTN;
