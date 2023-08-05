import { useDispatch, useSelector } from 'react-redux';
import { setInputValue } from 'redux/input/inputSlice';
import { selectInput } from 'redux/selectors';
import css from './InputTTN.module.css';

const InputTTN = () => {
  const inputValue = useSelector(selectInput);
  const dispatch = useDispatch();

  const handleInputChange = event => {
    dispatch(setInputValue(event.target.value));
  };

  const handleClearField = () => {
    dispatch(setInputValue(''));
  };

  return (
    <div className={css.inputContainer}>
      <input
        className={css.parcelNumberInput}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Введіть номер ТТН"
      />
      <div onClick={handleClearField} className={css.inputCross}></div>
    </div>
  );
};

export { InputTTN };
