import React from 'react'
import styles from './Ads.module.css'
import AdCard from '../../Components/AdCard/AdCard'
import LoadMoreAd from '../../Components/Buttons/LoadMore/LoadMoreAd'
import MobileAppBanner from '../Banner/MobileAppBanner'

const Ads = () => {
    return (
        <div className={styles.adsSection}>
            <MobileAppBanner />
            <div className={styles.header}>
                <p>Fresh recommendations</p>
            </div>
            <div className={styles.adsCards}>
                <AdCard />
                <AdCard />
                <AdCard />
                <AdCard />
                <AdCard />
                <AdCard />
                <AdCard />
                <AdCard />
                <AdCard />
                <AdCard />
                <AdCard />
                <AdCard />
                <AdCard />
                <AdCard />
                <AdCard />
                <AdCard />
                <AdCard />
                <AdCard />
                <AdCard />
                <AdCard />
            </div>
            <LoadMoreAd />
            <MobileAppBanner />
        </div>
    )
}

export default Ads
