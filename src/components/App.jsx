import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import Home from 'page/Home';
import { WareHouseSearch } from 'page/WareHouseSearch/WareHouseSearch';

export const App = () => {
  return (
    <Routes>
      <Route path="/" Component={SharedLayout}>
        <Route index Component={Home}></Route>
        <Route path="/departaments" Component={WareHouseSearch}></Route>
      </Route>
    </Routes>
  );
};
