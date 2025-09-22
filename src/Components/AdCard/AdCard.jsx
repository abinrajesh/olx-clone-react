import React from 'react'
import styles from './AdCard.module.css';

const AdCard = ({ title, description, price, date, images }) => {
    return (
        <div className={styles.adCard}>
            {images?.length > 0 ? (
                <div className={styles.adImage} style={{ backgroundImage: `url(${images[0]})` }}></div>
            ) : (
                <div className={styles.noImage}></div>
            )}
            <div className={styles.adDescription}>
                <span className={styles.adPrice}>₹ {price}</span>
                <span className={styles.adTitle}>{title}</span>
                <span className={styles.adSmDescription}>{description}</span>
                <span className={styles.adProductYear}>{date}</span>
            </div>
        </div>
    )
}

export default AdCard
