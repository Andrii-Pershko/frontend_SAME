import BtnGetTTN from 'components/BtnGetTTN/BtnGetTTN';
import HistoryBlock from 'components/HistoryBlock/HistoryBlock';
import InputTTN from 'components/InputTTN';
import StatusBlock from 'components/StatusBlock/StatusBlock';
import { useEffect } from 'react';
import css from './Home.module.css';

const Home = () => {
  useEffect(() => {
    const storyPercel = localStorage.getItem('storyParcel');

    if (!storyPercel) {
      localStorage.setItem('storyParcel', JSON.stringify([]));
    }
  });
  return (
    <>
      <h1> Відстежуйте свою посилку легко та швидко</h1>
      <form className={css.form}>
        <InputTTN />
        <BtnGetTTN />
      </form>

      <div className={css.informationBlock}>
        <StatusBlock />
        <HistoryBlock />
      </div>
    </>
  );
};

export default Home;
