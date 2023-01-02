import React from 'react';
import styles from './FeaturedMovie.module.scss';

function FeaturedMovie({data}) {

    console.log(data)

    let genres = [];
    data.genres.forEach(genre => {
        genres.push(genre.name)
    });

  return (
    <section 
        className={styles.container} 
        style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.poster_path})`}}
    >
        <div className={styles.mask}>
            <div className={styles.title}>
                {data.title}
            </div>
            <div className={styles.row}> 
                <div className={styles.grade}>
                    {data.vote_average}
                </div>
                <div className={styles.date}>
                    {data.release_date}
                </div>
            </div>
            
            <div className={styles.overview}>
                {data.overview}
            </div>
            <div className={styles.buttons}>
                <button>Lecture</button>
                <button>+ Ma liste</button>
            </div>
            <div className={styles.genres}>
                <strong>Genres : </strong>{genres.join(", ")}
            </div>
        </div>
    </section>
  )
}

export default FeaturedMovie