import { BtnGetTTN } from 'components/BtnGetTTN/BtnGetTTN';
import HistoryBlock from 'components/HistoryBlock/HistoryBlock';
import InformationBlock from 'components/InformationBlock/InformationBlock';
import { InputTTN } from 'components/InputTTN/InputTTN';
import StatusBlock from 'components/StatusBlock/StatusBlock';
import { useEffect } from 'react';

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

      <InformationBlock>
        <HistoryBlock />
        <StatusBlock />
      </InformationBlock>
    </>
  );
};

export default Home;
