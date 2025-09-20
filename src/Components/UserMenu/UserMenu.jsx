import React from 'react'
import styles from './UserMenu.module.css'
import AccountSettingsModal from '../AccountSettingsModal/AccountSettingsModal'
import { Link } from 'react-router-dom'

const UserMenu = () => {
    return (
        <div className={styles.userMenuContainer}>
            <Link to='chat'>
                <button className={styles.iconBtn}><svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" fill-rule="evenodd"><path d="M469.333 171.119c-164.693 0-298.667 134.684-298.667 300.25v359.529l108.907-54.753 19.093-4.525h256c164.693 0 298.667-134.684 298.667-300.25s-133.973-300.25-298.667-300.25h-85.333zM147.093 938.667l-61.76-38.368v-428.929c0-212.856 172.267-386.036 384-386.036h85.333c211.733 0 384 173.18 384 386.036s-172.267 386.036-384 386.036h-245.931l-161.643 81.261z"></path></svg></button>
            </Link>
            <button className={styles.iconBtn}><svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" fill-rule="evenodd"><path d="M730.855 763.955h-435.559c-0.833-87.945-2.676-279.627-2.676-289.496 0-119.351 98.911-216.463 220.498-216.463s220.455 97.112 220.455 216.463c0 10-1.843 201.594-2.72 289.496v0zM819.282 748.603c0.92-93.341 2.062-266.38 2.062-274.144 0-141.589-98.692-260.545-231.64-294.319 2.192-7.237 3.684-14.782 3.684-22.765 0-44.345-35.969-80.27-80.27-80.27-44.345 0-80.27 35.923-80.27 80.27 0 7.983 1.491 15.483 3.684 22.765-132.948 33.731-231.64 152.687-231.64 294.319 0 7.721 1.14 182.339 2.019 276.030l-90.27 36.581 0.92 64.609h316.032c3.729 40.881 37.679 73.031 79.523 73.031s75.794-32.151 79.523-73.031h312.962l1.754-64.523-88.078-38.556z"></path></svg></button>
            <div className={styles.profileContainer}>
                <figure>
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" width="30px" alt="" />
                </figure>
                <svg width="20px" height="20px" viewBox="0 0 1024 1024" data-aut-id="icon" fill-rule="evenodd"><path d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path></svg>
            </div>
            {/* <AccountSettingsModal /> */}
        </div>
    )
}

export default UserMenu
