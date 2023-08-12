import { useNavigate } from 'react-router-dom';
import css from './NavigateBtn.module.css';

const NavigateBtn = ({ content, navigateto, togleModal }) => {
  const navigate = useNavigate();

  const handlerNavigate = () => {
    navigate(navigateto);
    if (togleModal) {
      togleModal();
    }
  };
  return (
    <button className={css.navigateBtn} onClick={handlerNavigate}>
      {content}
    </button>
  );
};

export default NavigateBtn;
