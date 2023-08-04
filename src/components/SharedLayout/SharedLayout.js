import Container from 'components/Container/Container';
import { NavigateBtn } from 'components/NavigateBtn/NavigateBtn';
import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { Modal } from 'components/Modal/Modal';

const SharedLayout = () => {
  const [openModal, setOpenModal] = useState(false);

  const togleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <Container>
      <header>
        <img
          className={css.logo}
          height={'50px'}
          src={require('../../img/Logo.png')}
          alt={'logo'}
        ></img>
        <h1> Відстежуйте свою посилку легко та швидко</h1>
        <div
          className={`${css.togleModal} ${openModal ? css.openModalTogle : ''}`}
          onClick={togleModal}
        ></div>
        <nav>
          <NavigateBtn
            navigateTo={'/'}
            content={'Перевірити ТТН'}
          ></NavigateBtn>
          <NavigateBtn
            navigateTo={'/departaments'}
            content={'Список відділень'}
          ></NavigateBtn>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <main>
          <Container>
            <Outlet />
          </Container>
        </main>
      </Suspense>
      <Modal openModal={openModal} />
    </Container>
  );
};

export default SharedLayout;
