import { useShoppingCart } from '../../contexts/Context';
const Navbar = () => {
  const { asideBtn, getMovieApi, handleInput, input } = useShoppingCart();
  return (
    <nav className={asideBtn ? 'navbar w--75' : 'navbar w--100'}>
      <ul>
        <li className="logo">
          <a href="">
            MOVIE<span>FINDER</span>
          </a>
        </li>
        <li></li>
        <li className="search">
          <input
            className="search__input"
            type="text"
            placeholder="Search"
            value={input}
            onChange={handleInput}
          />
          <span className="search__submit" onClick={getMovieApi}></span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
