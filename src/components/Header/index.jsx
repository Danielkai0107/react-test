import AsideBtn from './AsideBtn';
import Number from './Number';
import Results from '../Aside/Results';
import { useShoppingCart } from '../../contexts/Context';
import Movie from './Movie';

const Header = () => {
  const { asideBtn, activeMovie } = useShoppingCart();
  return (
    <header className="header">
      <section className="header__pop">
        <img src={activeMovie.image} alt="" />
      </section>
      <section className="header__mask"></section>
      <section
        className={asideBtn ? 'header__info w--75' : 'header__info w--100'}
      >
        <Number number={activeMovie.number} />
        <Movie item={activeMovie} />
        <AsideBtn />
      </section>
      <Results />
    </header>
  );
};

export default Header;
