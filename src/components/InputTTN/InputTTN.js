import { useDispatch, useSelector } from 'react-redux';
import { resetInputTtn, setInputValue } from 'redux/input/inputSlice';
import { selectInput } from 'redux/selectors';
import Input from 'components/Input';

const InputTTN = () => {
  const inputValue = useSelector(selectInput);

  const dispatch = useDispatch();

  const handleInputChange = e => {
    dispatch(setInputValue(e.target.value));
  };

  const handleClearField = () => {
    dispatch(resetInputTtn());
  };

  return (
    <Input
      value={inputValue}
      placeholder={'Введіть номер ТТН'}
      change={handleInputChange}
      cleanField={handleClearField}
    />
  );
};

export default InputTTN;
