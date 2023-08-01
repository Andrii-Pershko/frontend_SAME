import Container from 'components/Container/Container';
import { NavigateBtn } from 'components/NavigateBtn/NavigateBtn';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <header>
        <h1> Відстежуйте свою посилку легко</h1>
        <NavigateBtn navigateTo={'/'} content={'Перевірити ТТН'}></NavigateBtn>
        <NavigateBtn
          navigateTo={'/departaments'}
          content={'Список відділень'}
        ></NavigateBtn>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <main>
          <Container>
            <Outlet />
          </Container>
        </main>
      </Suspense>
    </>
  );
};

export default SharedLayout;
