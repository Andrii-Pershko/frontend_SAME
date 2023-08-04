import { NavigateBtn } from 'components/NavigateBtn/NavigateBtn';
import css from './Modal.module.css';

export const Modal = ({ openModal }) => {
  console.log('Example', css.modal);
  return (
    <div className={`${css.modal} ${openModal ? css.isOpen : ''}`}>
      <NavigateBtn navigateTo={'/'} content={'Перевірити ТТН'}></NavigateBtn>
      <NavigateBtn
        navigateTo={'/departaments'}
        content={'Список відділень'}
      ></NavigateBtn>
    </div>
  );
};
