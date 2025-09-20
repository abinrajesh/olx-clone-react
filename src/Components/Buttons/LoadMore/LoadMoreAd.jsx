import React from 'react'
import styles from './LoadMoreAd.module.css'

const LoadMoreAd = () => {
  return (
    <div className={styles.loadMoreBtnContainer}>
      <button className={styles.loadMoreBtn}>
        <span>Load More</span>
      </button>
    </div>
  )
}

export default LoadMoreAd
