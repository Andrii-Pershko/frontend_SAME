import { BtnGetTTN } from 'components/BtnGetTTN/BtnGetTTN';
import HistoryBlock from 'components/HistoryBlock/HistoryBlock';
import { InputTTN } from 'components/InputTTN/InputTTN';
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
      <form>
        <InputTTN />
        <BtnGetTTN />
      </form>

      <div className={css.informationBlock}>
        <StatusBlock />
        <div className={css.homeHistory}>
          <HistoryBlock />
        </div>
      </div>
    </>
  );
};

export default Home;
