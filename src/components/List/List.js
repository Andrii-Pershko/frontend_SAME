import css from './List.module.css';

const List = ({ list, property, select, close }) => {
  return (
    <ul className={`${css.list} ${close ? css.closeList : ''}`}>
      {list.map(element => (
        <li onClick={select} key={element[property]}>
          {element[property]}
        </li>
      ))}
    </ul>
  );
};

export default List;
