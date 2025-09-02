import React from 'react'
import styles from './MobileAppBanner.module.css'
import MobileAppBannerImg from '../../assets/BannerPosters/phone-app.png'
import playStorePoster from '../../assets/BannerPosters/playstore_2x.webp'
import appStorePoster from '../../assets/BannerPosters/appstore_2x.webp'
import { Link } from 'react-router-dom'

const MobileAppBanner = () => {
  return (
    <div className={styles.bannerContainer}>

      <img src={MobileAppBannerImg} alt="Mobile App Banner" />

      <div className={styles.bannerDescription}>

        <div className={styles.bannerDescriptionHeader}>
          <span>TRY THE OLX APP</span>
        </div>
        <div className={styles.bannerDescriptionContent}>
          <span>Buy, sell and find just about anything using the app on your mobile.</span>
        </div>

      </div>

      <div className={styles.downloadOptions}>

        <div className={styles.downloadHeader}>
          <span>GET YOUR APP TODAY</span>
        </div>
        <div className={styles.downloadOptionsPosters}>
          <Link to='workinprogress'>
            <div className={styles.appStorePoster}>
                <picture>
                  <source type='image/svg+xml' srcSet={appStorePoster} />
                  <img src={appStorePoster} alt="App Store" />
                </picture>
            </div>
          </Link>

          <Link to='workinprogress'>
            <div className={styles.playStorePoster}>
                <picture>
                  <source type='image/svg+xml' srcSet={playStorePoster} />
                  <img src={playStorePoster} alt="App Store" />
                </picture>
            </div>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default MobileAppBanner
