import styles from './MoviesSection.module.scss';
import React, { useRef } from 'react'

function MoviesSection({ title,items }) {

  const list = useRef()

  let windowWidth = window.innerWidth

  const NumberOfMovie = () => {
    let movieNb = 0;
    if (windowWidth > 1024) {
      movieNb = 7
    } else if (windowWidth > 768) {
      movieNb = 5
    } else if (windowWidth > 425) {
      movieNb = 3
    } else {
      movieNb = 2
    }
    return movieNb
  }

  let imgWidth = ((windowWidth-20)/NumberOfMovie())
  let imgHeight = imgWidth*1.34

  const handleClickArrowLeft = () => {

    let positionValue = list.current.computedStyleMap().get("transform")[0].x.value
    let sizeImg = list.current.children[0].clientWidth
    if(list.current.children[0].getBoundingClientRect().x < 10) {
      list.current.style.transform = `translateX(${positionValue + sizeImg}px)`
    }

  }

  const handleClickArrowRight = () => {
    let positionValueHorizontal = list.current.computedStyleMap().get("transform")[0].x.value
    let sizeImg = list.current.children[0].clientWidth
    let moviesNumber = list.current.children.length
    if (list.current.children[moviesNumber - 1].getBoundingClientRect().x > (NumberOfMovie()*sizeImg)) {
      list.current.style.transform = `translateX(${positionValueHorizontal - sizeImg}px)`
    }
  }

  return (
    <div className={styles.container}>
        <h2 className={styles.title}> {title} </h2>
        <i onClick={handleClickArrowLeft} className={`fa-solid fa-chevron-left ${styles.chevronLeft}`} style={{bottom: (imgHeight/2)-25}}></i>
        <i onClick={handleClickArrowRight} className={`fa-solid fa-chevron-right ${styles.chevronRight}`} style={{bottom: (imgHeight/2)-25}}></i>
        <div ref={list} className={styles.list}>
            {items.results.map((item, key) => (
                <img key={key} className={styles.image} style={{width: imgWidth}} src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.original_title} />
            ))} 
        </div>
    </div>
  )
}

export default MoviesSection;