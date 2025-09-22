import React from 'react'
import styles from './Wishlist.module.css'
import noItemsImg from '../../assets/LoginPosters/loginEntryPointFavorite.webp'
import { useNavigate } from 'react-router-dom'

const Wishlist = () => {

    const navigate = useNavigate();

    const handleDiscoverClick = () => {
        navigate('/');
    }

    return (
        <div className={styles.wishlistContainer}>

            <div className={styles.wishListHeader}>
                <span>WISHLIST</span>
            </div>

            <div className={styles.noItemsContainer}>
                <div className={styles.noItemsImg}>
                    <img src={noItemsImg} alt="Favories Img" />
                </div>

                <div className={styles.noItemsDescription}>
                    <div className={styles.mainDescription}>
                        <span>You haven't liked any ads yet</span>
                    </div>
                    <div className={styles.subDescription}>
                        <span>Like ads and share them with the world</span>
                    </div>
                </div>

                <div className={styles.discoverBtn}>
                    <button onClick={handleDiscoverClick}>
                        <span>Discover</span>
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Wishlist
