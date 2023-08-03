import { useDispatch, useSelector } from 'react-redux';
import { setInputValue } from 'redux/input/inputSlice';
import { selectInput } from 'redux/selectors';

const InputTTN = () => {
  const inputValue = useSelector(selectInput);
  const dispatch = useDispatch();

  const handleInputChange = async event => {
    dispatch(setInputValue(event.target.value));
  };

  return (
    <input type="text" value={inputValue} onChange={handleInputChange}></input>
  );
};

export { InputTTN };
