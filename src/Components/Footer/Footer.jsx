import React from 'react'
import classNames from 'classnames'
import styles from './Footer.module.css'
import instaLogo from '../../assets/SocialLogos/instagram_logo.svg'
import xLogo from '../../assets/SocialLogos/x_logo.svg'
import linkedinLogo from '../../assets/SocialLogos/linkedin_logo.svg'
import playStoreBanner from '../../assets/playstore_3x.webp'
import appStoreBanner from '../../assets/appstore_3x.webp'
import carTradeTechLogo from '../../assets/PartnerLogos/cartrade_tech.svg'
import olxLogo from '../../assets/PartnerLogos/olx_2025.svg'
import carWaleLogo from '../../assets/PartnerLogos/carwale.svg'
import bikeWaleLogo from '../../assets/PartnerLogos/bikewale.svg'
import carTradeLogo from '../../assets/PartnerLogos/cartrade.svg'
import mobilityLogo from '../../assets/PartnerLogos/mobility.svg'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.topSection}>
        <div className={styles.linksSection}>
          <div className={styles.linksHeading}>
            <h3>POPULAR LOCATIONS</h3>
          </div>
          <div className={styles.link}>
            <a href=""><span>Kolkata</span></a>
            <a href=""><span>Mumbai</span></a>
            <a href=""><span>Chennai</span></a>
            <a href=""><span>Pune</span></a>
          </div>
        </div>
        <div className={styles.linksSection}>
          <div className={styles.linksHeading}>
            <h3>TRENDING LOCATIONS</h3>
          </div>
          <div className={styles.link}>
            <a href=""><span>Bhuvaneshwar</span></a>
            <a href=""><span>Hyderabad</span></a>
            <a href=""><span>Chandigarh</span></a>
            <a href=""><span>Nashik</span></a>
          </div>
        </div>
        <div className={styles.linksSection}>
          <div className={styles.linksHeading}>
            <h3>ABOUT US</h3>
          </div>
          <div className={styles.link}>
            <a href=""><span>Tech@OLX</span></a>
            <a href=""><span>Careers</span></a>
            <a href=""><span>Kolkata</span></a>
            <a href=""><span>Kolkata</span></a>
          </div>
        </div>
        <div className={styles.linksSection}>
          <div className={styles.linksHeading}>
            <h3>OLX</h3>
          </div>
          <div className={styles.link}>
            <a href=""><span>Blog</span></a>
            <a href=""><span>Help</span></a>
            <a href=""><span>Sitemap</span></a>
            <a href=""><span>Legal & Privacy information</span></a>
            <a href=""><span>Vulnerability Disclosure Program</span></a>
          </div>
        </div>
        <div className={styles.externalHandleLinks}>
          <div className={styles.socialLinksSection}>
            <div className={styles.socialLinksHeader}>
              <h3>FOLLOW THE DEVELOPER</h3>
            </div>
            <div className={styles.socialLinks}>
              <a href="https://www.instagram.com/abin.rajesh_/">
                <picture>
                  <source type='image/svg+xml' srcSet={instaLogo} />
                  <img src={instaLogo} alt="Instagram Logo" />
                </picture>
              </a>
              <a href="https://x.com/abinrajesh_">
                <picture>
                  <source type='image/svg+xml' srcSet={xLogo} />
                  <img src={xLogo} alt="X Logo" />
                </picture>
              </a>
              <a href="https://www.linkedin.com/in/abinrajesh/">
                <picture>
                  <source type='image/svg+xml' srcSet={linkedinLogo} />
                  <img src={linkedinLogo} alt="LinkedIn Logo" />
                </picture>
              </a>

            </div>

          </div>
          <div className={styles.downloadOptions}>
            <Link to='work-in-progress'>
              <picture>
                <source type='image/svg+xml' srcSet={playStoreBanner} />
                <img src={playStoreBanner} alt="" />
              </picture>
            </Link>
            
            <Link to='work-in-progress'>
              <picture>
                <source type='image/svg+xml' srcSet={appStoreBanner} />
                <img src={appStoreBanner} alt="" />
              </picture>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>

        <div className={styles.footerBottomTop}>

          <div className={classNames(styles.partnerLogo, styles.carTradeTechLogo)}>
            <a href="*">
              <picture>
                <source type='image/svg+xml' srcSet={carTradeTechLogo} />
                <img src={carTradeTechLogo} alt="" />
              </picture>
            </a>
          </div>


          <div className={classNames(styles.partnerLogo)}>
            <a href="*" className={classNames(styles.olxLogo)}>
              <picture>
                <source type='image/svg+xml' srcSet={olxLogo} />
                <img src={olxLogo} alt="" />
              </picture>
            </a>
          </div>

          <div className={classNames(styles.partnerLogo)}>
            <a href="*">
              <picture>
                <source type='image/svg+xml' srcSet={carWaleLogo} />
                <img src={carWaleLogo} alt="" />
              </picture>
            </a>
          </div>

          <div className={classNames(styles.partnerLogo)}>
            <a href="*">
              <picture>
                <source type='image/svg+xml' srcSet={bikeWaleLogo} />
                <img src={bikeWaleLogo} alt="" />
              </picture>
            </a>
          </div>

          <div className={classNames(styles.partnerLogo)}>
            <a href="*">
              <picture>
                <source type='image/svg+xml' srcSet={carTradeLogo} />
                <img src={carTradeLogo} alt="" />
              </picture>
            </a>
          </div>

          <div className={classNames(styles.partnerLogo)}>
            <a href="*">
              <picture>
                <source type='image/svg+xml' srcSet={mobilityLogo} />
                <img src={mobilityLogo} alt="" />
              </picture>
            </a>
          </div>

        </div>

        <div className={styles.footerBottomBtm}>
          <section className={styles.helpSection}>
            <span>
              <a href="">Help</a>
              &nbsp;-&nbsp;
              <a href="">Sitemap</a>
            </span>
          </section>
          <section className={styles.copyrightSection}>
            <span>All rights reserved &copy; 2025 OLX Clone by <a href="">Abin Rajesh</a></span>
          </section>
        </div>

      </div>
    </footer>
  )
}

export default Footer
