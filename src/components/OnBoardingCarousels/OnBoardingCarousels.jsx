import React from 'react'
import classNames from 'classnames'
import styles from './OnBoardingCarousels.module.css'
import chatImg from '../../assets/LoginPosters/loginEntryPointChat.webp'
import favoriteImg from '../../assets/LoginPosters/loginEntryPointFavorite.webp'
import postImg from '../../assets/LoginPosters/loginEntryPointPost.webp'

const OnBoardingCarousels = () => {
    return (
        <div className={styles.onboardingCarousel}>

            <div className={classNames(styles.carousel)}>

                <div className={styles.carouselImg}>
                    <picture>
                        <source type='image/svg+xml' srcSet={postImg} />
                        <img src={postImg} alt="Carousel Img" />
                    </picture>
                </div>
                <div className={styles.description}>
                    <span>Help us become one of the safest places to buy and sell</span>
                </div>
            </div>

            <div className={classNames(styles.carousel)}>
                <div className={styles.carouselImg}>
                    <picture>
                        <source type='image/svg+xml' srcSet={favoriteImg} />
                        <img src={favoriteImg} alt="Carousel Img" />
                    </picture>
                </div>
                <div className={styles.description}>
                    <span>Close deals from the comfort of your home.</span>
                </div>
            </div>

            <div className={classNames(styles.carousel)}>
                <div className={styles.carouselImg}>
                    <picture>
                        <source type='image/svg+xml' srcSet={chatImg} />
                        <img src={chatImg} alt="Carousel Img" />
                    </picture>
                </div>
                <div className={styles.description}>
                    <span>Keep all your favourites in one place.</span>
                </div>
            </div>


        </div>
    )
}

export default OnBoardingCarousels
