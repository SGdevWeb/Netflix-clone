import React from 'react';
import styles from './FeaturedMovie.module.scss';

function FeaturedMovie({data}) {

    console.log(data)

    let genres = [];
    data.genres.forEach(genre => {
        genres.push(genre.name)
    });

  return (
    <section className={styles.container}>
        <div>
            {data.title}
        </div>
        <div>
            {data.vote_average}
        </div>
        <div>
            {data.release_date}
        </div>
        <div>
            {data.overview}
        </div>
        <div>
            <button>Lecture</button>
            <button>+ Ma liste</button>
        </div>
        <div>
            Genres : {genres.join(", ")}
        </div>
    </section>
  )
}

export default FeaturedMovie