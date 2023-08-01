import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import Home from 'page/Home';

export const App = () => {
  return (
    <Routes>
      <Route path="/" Component={SharedLayout}>
        <Route index Component={Home}></Route>
        <Route></Route>
      </Route>
    </Routes>
  );
};
