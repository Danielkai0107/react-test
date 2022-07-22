import { useShoppingCart } from '../../contexts/Context';
const AsideBtn = () => {
  const { resultsBtn } = useShoppingCart();
  return (
    <ul className="header__AsideBtn">
      <li>
        <span></span>
      </li>
      <li onClick={resultsBtn}></li>
      <li>
        <span></span>
      </li>
    </ul>
  );
};

export default AsideBtn;
