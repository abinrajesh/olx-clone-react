import React from 'react'
import styles from './NotFound.module.css'
import notFoundImg from '../../assets/404.webp'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className={styles.notFoundSection}>
      <div className={styles.notFoundContent}>
        <div className={styles.notFoundDescriptionSection}>
          <div className={styles.header}>
            <h1>Oops!</h1>
          </div>
          <div className={styles.content}>
            <div className={styles.description}>
              <span>We can't seem to find that. Try searching for it.</span>
            </div>
            <div className={styles.errorMsg}>
              <span>Error 404</span>
            </div>
            <div className={styles.returnHome}>
              <Link to='/'>
                <button><span>Return Home</span></button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.notFoundImage}>
          <picture>
            <source type='image/svg+xml' srcSet={notFoundImg} />
            <img src={notFoundImg} alt="404 Img" />
          </picture>
        </div>
      </div>
    </div>
  )
}

export default NotFound
