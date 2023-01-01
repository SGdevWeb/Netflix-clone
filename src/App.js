import { useEffect, useState } from 'react';
import getMovies from './Api';
import './App.css';
import MoviesSection from './components/MoviesSection';

function App() {

  const [movies, setMovies]=useState([])

  useEffect(() => {
    const displayMovies = async () => {
      let movieList = await getMovies()
      console.log(movieList)
      setMovies(movieList)
    }
    displayMovies()
  }, [])

  return (
    <div className="container">
      <section className='list'>
        {movies.map((movie, key) => (
          <MoviesSection key={key} title={movie.title} items={movie.items} />
        ))}
      </section>
    </div>
  );
}

export default App;
