import { SyncLoader } from 'react-spinners';
import css from './Input.module.css';

const override = {
  height: '39px',
  position: 'absolute',
  right: '8px',
  top: '10px',
};

const Input = ({
  disabled,
  value,
  placeholder,
  change,
  cleanField,
  styleName,
  isLoading,
}) => {
  return (
    <div className={css.inputContainer}>
      <input
        disabled={disabled}
        className={`${css.parcelNumberInput} ${css[styleName]}`}
        type="text"
        value={value}
        onChange={change}
        placeholder={placeholder}
      />
      <div
        onClick={cleanField}
        className={`${css.inputCross} ${isLoading ? css.hidenCross : ''}`}
      ></div>

      <SyncLoader
        color="#ff0000"
        size={5}
        cssOverride={{
          ...override,
          display: `${isLoading ? 'block' : 'none'}`,
        }}
        speedMultiplier={0.5}
      />
    </div>
  );
};

export default Input;
