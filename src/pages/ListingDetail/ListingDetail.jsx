import React from 'react'
import styles from './ListingDetail.module.css'
import ListingCard from '../../components/ListingCard/ListingCard'
import LoadMoreAd from '../../components/Button/LoadMore/LoadMoreAd'

const ListingDetail = () => {
    return (
        <div className={styles.listingSection}>
            <div className={styles.header}>
                <p>Fresh recommendations</p>
            </div>
            <div className={styles.listingCards}>
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
            </div>
            <LoadMoreAd />
        </div>
    )
}

export default ListingDetail
