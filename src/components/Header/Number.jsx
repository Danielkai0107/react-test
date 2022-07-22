const Number = ({ number }) => {
  return (
    <ul className="header__index">
      <li>
        <span></span>
        <p>INDEX</p>
      </li>
      <li>
        <h1>{number ? number : 'M'}</h1>
      </li>
      <li>
        <p>MOVIE</p>
        <span></span>
      </li>
    </ul>
  );
};

export default Number;
