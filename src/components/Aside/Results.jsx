import { useShoppingCart } from '../../contexts/Context';
import ResultsItem from './ResultsItem';
const Results = () => {
  const { asideBtn, movie } = useShoppingCart();
  return (
    <section className={asideBtn ? 'results w--25' : 'results w--0'}>
      <h1 className="results__title">{movie[0] ? 'Search' : 'No Results'}</h1>
      <ul className="results__wrapper">
        {movie.map((item) => (
          <ResultsItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default Results;
