import { NavigateBtn } from 'components/NavigateBtn/NavigateBtn';
import css from './Modal.module.css';
import HistoryBlock from 'components/HistoryBlock/HistoryBlock';
import { useState } from 'react';

export const Modal = () => {
  const [openModal, setOpenModal] = useState(true);

  const togleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <div className={`${css.modal} ${openModal ? css.isOpen : ''}`}>
      <NavigateBtn navigateTo={'/'} content={'Перевірити ТТН'}></NavigateBtn>
      <NavigateBtn
        navigateTo={'/departaments'}
        content={'Список відділень'}
      ></NavigateBtn>
      <div
        className={`${css.togleModal} ${openModal ? css.openModalTogle : ''}`}
        onClick={togleModal}
      ></div>
      <HistoryBlock />
    </div>
  );
};
