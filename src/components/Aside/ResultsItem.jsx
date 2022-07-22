import { useShoppingCart } from '../../contexts/Context';
const ResultsItem = ({ item }) => {
  const { handleMainMovie } = useShoppingCart();
  return (
    <li
      className="results__item"
      onClick={() => {
        handleMainMovie(item.id);
      }}
    >
      <figure className="results__item__imgBox">
        <img src={item.poster} alt="" />
      </figure>
      <h1>{item.name}</h1>
      <p>
        {item.date}
        <span></span>
      </p>
    </li>
  );
};

export default ResultsItem;
