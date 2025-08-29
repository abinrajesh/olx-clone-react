import React from 'react'
import Header from '../../components/Header/Header'
import Category from '../Category/Category'
import MobileAppBanner from '../../components/Banner/MobileAppBanner'
import ListingDetail from '../ListingDetail/ListingDetail'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (
        <div>
            <Header />
            <Category />
            <MobileAppBanner />
            <ListingDetail />
            <MobileAppBanner />
            <Footer />
        </div>
    )
}

export default Home
