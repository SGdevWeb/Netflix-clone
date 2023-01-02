import { useEffect, useState } from 'react';
import fetchs from './Api';
import './App.css';
import FeaturedMovie from './components/FeaturedMovie';
import MoviesSection from './components/MoviesSection';


function App() {

  const [movies, setMovies]=useState([])
  const [featuredMovieData, setFeaturedMovieData] = useState(null)

  useEffect(() => {
    const displayMovies = async () => {
      let movieList = await fetchs.getMovies()
      console.log(movieList)
      setMovies(movieList)

      let filterMovie = movieList.filter((movie) => movie.slug === "top-rated");
      // console.log(filterMovie)

      async function randomMovie() {
        let random = Math.floor(Math.random() * (filterMovie[0].items.results.length - 1))
        // console.log(random)
        let randomMovie = filterMovie[0].items.results[random]
        // console.log(randomMovie)
        let randomMovieInfo = await fetchs.getOneMovie(randomMovie.id)
        // console.log(randomMovieInfo)
        setFeaturedMovieData(randomMovieInfo)
      }
      randomMovie()
    }
    displayMovies()
  }, [])

  return (
    <div className="container">
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
