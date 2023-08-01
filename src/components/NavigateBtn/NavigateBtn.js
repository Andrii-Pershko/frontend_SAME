import { useNavigate } from 'react-router-dom';

const NavigateBtn = ({ content, navigateTo }) => {
  const navigate = useNavigate();

  const handlerNavigate = () => {
    navigate(navigateTo);
  };
  return <button onClick={handlerNavigate}>{content}</button>;
};

export { NavigateBtn };
