import { useDispatch, useSelector } from 'react-redux';
import { resetInputTtn, setInputValue } from 'redux/input/inputSlice';
import { selectInput } from 'redux/selectors';
import Input from 'components/Input';
import { useEffect, useState } from 'react';
import css from './InputTTN.module.css';

const InputTTN = () => {
  const [hint, setHint] = useState(false);
  const inputValue = useSelector(selectInput);
  const dispatch = useDispatch();

  useEffect(() => {
    if (inputValue.length > 0 && inputValue.length !== 14) {
      setHint(true);
    } else {
      setHint(false);
    }
  }, [inputValue.length]);

  const handleInputChange = e => {
    dispatch(setInputValue(e.target.value));
  };

  const handleClearField = () => {
    dispatch(resetInputTtn());
  };

  return (
    <div className={css.inputTTNThumb}>
      <Input
        value={inputValue}
        placeholder={'Введіть номер ТТН'}
        change={handleInputChange}
        cleanField={handleClearField}
      />
      {hint ? <p className={css.hint}>Має містити лише 14 цифр </p> : null}
    </div>
  );
};

export default InputTTN;
