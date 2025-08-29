import React from 'react'
import MobileAppBannerImg from '../../assets/phone-app.png'
import styles from './MobileAppBanner.module.css'

const MobileAppBanner = () => {
  return (
    <div className={styles.bannerContainer}>
      <img src={MobileAppBannerImg} alt="Mobile App Banner" />
    </div>
  )
}

export default MobileAppBanner
