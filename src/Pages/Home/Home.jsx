import React from 'react'
import Header from '../../Components/Header/Header'
import Category from '../../Components/Category/Category'
import Footer from '../../Components/Footer/Footer'
import { Outlet } from 'react-router-dom';
// import Ads from '../../Components/Ads/Ads'
// import Profile from '../../Components/Profile/Profile'
import ProfileEdit from '../../Components/ProfileEdit/ProfileEdit'

const Home = () => {
    return (
        <div>
            <Header />
            <Category />
            {Outlet}
            <Footer />
        </div>
    )
}

export default Home