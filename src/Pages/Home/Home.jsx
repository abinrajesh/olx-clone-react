import React from 'react'
import Header from '../../Components/Header/Header'
import Category from '../../Components/Category/Category'
import MobileAppBanner from '../../Components/Banner/MobileAppBanner'
import Footer from '../../Components/Footer/Footer'
import Ads from '../../Components/Ads/Ads'
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header />
            <Category />
            <MobileAppBanner />
            <Outlet />
            <Ads />
            <MobileAppBanner />
            <Footer />
        </div>
    )
}

export default Home