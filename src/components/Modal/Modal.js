import NavigateBtn from 'components/NavigateBtn';
import css from './Modal.module.css';
import HistoryBlock from 'components/HistoryBlock';
import { useEffect, useState } from 'react';

const Modal = () => {
  console.log('Example', document.body);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('notEvent');
  });

  const togleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className={`${css.modal} ${openModal ? css.isOpen : ''}`}>
      <NavigateBtn
        togleModal={togleModal}
        navigateto={'/'}
        content={'Перевірити ТТН'}
      ></NavigateBtn>
      <NavigateBtn
        togleModal={togleModal}
        navigateto={'/departaments'}
        content={'Список відділень'}
      ></NavigateBtn>
      <div
        className={`${css.togleModal} ${openModal ? css.openModalTogle : ''}`}
        onClick={togleModal}
      ></div>
      <HistoryBlock togleModal={togleModal} />
    </div>
  );
};

export default Modal;
