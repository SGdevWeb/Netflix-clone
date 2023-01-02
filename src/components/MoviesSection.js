import styles from './MoviesSection.module.scss';
import React from 'react'

function MoviesSection({ title,items }) {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}> {title} </h2>
        <div className={styles.list}>
            {items.results.map((item, key) => (

                <img key={key} className={styles.image} src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} alt={item.original_title} />

            ))} 
        </div>
    </div>
  )
}

export default MoviesSection;