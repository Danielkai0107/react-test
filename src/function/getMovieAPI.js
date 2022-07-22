let search = inputData.value;
const url = `https://api.themoviedb.org/3/search/movie?api_key=${myKey}&query=${search}`;
const imageUrl = 'https://image.tmdb.org/t/p/original';

async function getMovieApi() {
  try {
    let d = await fetch(url);
    let dj = await d.json();
    let results = dj.results;
    let movieInfo = results.map((item, index) => {
      return {
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
  } catch (error) {
    console.log(error);
  }
}
