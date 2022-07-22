const Movie = ({ item }) => {
  if (item) {
    return (
      <section className="header__main ">
        <h1 className="title">{item.name}</h1>
        <ul className="info">
          <li className="info__data">
            <p className="date">Date : {item.date}</p>
            <p className="average">
              Average : {item.vote_average} Count : {item.vote_count}
            </p>
          </li>
          <li className="info__btn">
            <button className="watch">Watch video</button>
            <button className="add">+ Add List</button>
          </li>
        </ul>
        <p className="description">{item.overview}</p>
      </section>
    );
  } else {
    return (
      <section className="header__main ">
        <h2>FIND YOUR FAVORITE MOVIE</h2>
      </section>
    );
  }
};

export default Movie;
