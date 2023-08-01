import { BtnGetTTN } from 'components/BtnGetTTN/BtnGetTTN';
import HistoryBlock from 'components/HistoryBlock/HistoryBlock';
import InformationBlock from 'components/InformationBlock/InformationBlock';
import { InputTTN } from 'components/InputTTN/InputTTN';
import StatusBlock from 'components/StatusBlock/StatusBlock';

const Home = () => {
  return (
    <>
      <form>
        <InputTTN></InputTTN>
        <BtnGetTTN></BtnGetTTN>
      </form>

      <InformationBlock>
        <HistoryBlock></HistoryBlock>
        <StatusBlock></StatusBlock>
      </InformationBlock>
    </>
  );
};

export default Home;
