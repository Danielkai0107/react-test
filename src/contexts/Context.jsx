import { createContext, useContext, useState } from 'react';

const ShoppingCartContext = createContext();

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}
export function ShoppingCartProvider({ children }) {
  const [asideBtn, setAsideOPen] = useState(false);
  const [movie, setMovie] = useState([]);
  const [input, setInput] = useState('');
  const [activeMovie, setActiveMovie] = useState(false);

  const resultsBtn = () => {
    setAsideOPen(!asideBtn);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  function handleMainMovie(id) {
    setActiveMovie(movie.find((item) => item.id === id));
  }

  const myKey = 'b1ba471fd7becebe341deb23cf584383';
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${myKey}&query=${input}`;
  const imageUrl = 'https://image.tmdb.org/t/p/original';

  const resultsBar = document.querySelector('.results');
  const scroll = () => {
    resultsBar.scrollTo(0, 0);
  };

  async function getMovieApi() {
    try {
      let d = await fetch(url);
      let dj = await d.json();
      let results = dj.results;
      let movieInfo = results.map((item, index) => {
        return {
          number: index + 1,
          id: item.id,
          name: item.original_title,
          date: item.release_date,
          popularity: item.popularity,
          image: imageUrl + item.backdrop_path,
          poster: imageUrl + item.poster_path,
          vote_average: item.vote_average,
          vote_count: item.vote_count,
          overview: item.overview,
        };
      });
      setAsideOPen(true);
      setMovie(movieInfo);
      setActiveMovie(movieInfo[0] || false);
      setInput('');
      scroll();
    } catch (error) {
      console.log(error);
      setAsideOPen(true);
      setInput('');
    }
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        resultsBtn,
        asideBtn,
        getMovieApi,
        handleInput,
        input,
        movie,
        handleMainMovie,
        activeMovie,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
