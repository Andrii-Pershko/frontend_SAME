import Container from 'components/Container/Container';
import { NavigateBtn } from 'components/NavigateBtn/NavigateBtn';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { Modal } from 'components/Modal/Modal';

const SharedLayout = () => {
  return (
    <Container>
      <header>
        <img
          navigateTo={'/'}
          className={css.logo}
          height={'50px'}
          src={require('../../img/Logo.png')}
          alt={'logo'}
        ></img>

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
          <Outlet />
        </main>
      </Suspense>
      <Modal />
    </Container>
  );
};

export default SharedLayout;
