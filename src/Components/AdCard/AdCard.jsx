import React from 'react'
import styles from './AdCard.module.css';

const AdCard = () => {
    return (
        <div className={styles.adCard}>
            <div className={styles.adImage}></div>
            <div className={styles.adDescription}>
                <span className={styles.adPrice}>₹ 55972</span>
                <span className={styles.adProductYear}>2020</span>
                <span className={styles.adTitle}>KTM RC 390 BS6</span>
                <span className={styles.adLocation}>Kerala, India</span>
            </div>
        </div>
    )
}

export default AdCard
