import { useNavigate } from 'react-router-dom';
import css from './NavigateBtn.module.css';

const NavigateBtn = ({ content, navigateTo, togleModal }) => {
  const navigate = useNavigate();

  const handlerNavigate = () => {
    navigate(navigateTo);
    togleModal();
  };
  return (
    <button className={css.navigateBtn} onClick={handlerNavigate}>
      {content}
    </button>
  );
};

export { NavigateBtn };
