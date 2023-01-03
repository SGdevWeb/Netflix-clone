import { useEffect, useState } from 'react';
import fetchs from './Api';
import './App.css';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import MoviesSection from './components/MoviesSection';


function App() {

  const [movies, setMovies]=useState([])
  const [featuredMovieData, setFeaturedMovieData] = useState(null)

  useEffect(() => {
    const displayMovies = async () => {
      let movieList = await fetchs.getMovies()
      setMovies(movieList)

      let filterMovie = movieList.filter((movie) => movie.slug === "top-rated");

      async function randomMovie() {
        let random = Math.floor(Math.random() * (filterMovie[0].items.results.length - 1))
        let randomMovie = filterMovie[0].items.results[random]
        let randomMovieInfo = await fetchs.getOneMovie(randomMovie.id)
        setFeaturedMovieData(randomMovieInfo)
      }
      randomMovie()
    }
    displayMovies()
  }, [])

  return (
    <div className="container">
      <Header />
      {featuredMovieData && <FeaturedMovie data={featuredMovieData}/>}
      <section className='list'>
        {movies.map((movie, key) => (
          <MoviesSection key={key} title={movie.title} items={movie.items} />
        ))}
      </section>
    </div>
  );
}

export default App;
