import React, { useState } from 'react'
import styles from './Header.module.css'
import logo from '../../assets/olx_logo_2025.svg';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import UserMenu from '../UserMenu/UserMenu';
import LanguageModal from '../Modals/LanguageModal/LanguageModal';
import { useAuth } from '../../Context/AuthContext';

const Header = () => {

    const { user } = useAuth();
    const navigate = useNavigate();
    const [touched, setTouched] = useState(false);

    const handleLogoClick = () => {
        navigate('/');
    }

    return (
        <header className={styles.header}>

            <div className={styles.leftSide}>

                <img src={logo} alt="Olx Logo" onClick={handleLogoClick} />

                <SearchBar />

                <div className={styles.languageSelector} onClick={() => setTouched(prev => !prev)}>
                    <span className={styles.languageOption}>English</span>
                    <span className={styles.languageSelectorBtn}>
                        <button type='button'>
                            <span className={`${styles.arrow} ${touched ? styles.rotate : ''}`}>
                                <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fillRule="evenodd"><path className="rui-w4DG7" d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path></svg>
                            </span>
                        </button>
                    </span>
                </div>

                {touched && (
                    <>
                        <div className={styles.overlay} onClick={() => setTouched(false)} />
                        <LanguageModal />
                    </>
                )}

            </div>

            <div className={styles.rightSide}>
                <Link to='wishlist'>
                    <button className={styles.iconBtn}><svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fillRule="evenodd"><path className="rui-w4DG7" d="M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z"></path></svg></button>
                </Link>

                {user ? (<UserMenu />) : (<Link to='/login'>
                    <button className={styles.signupAndLoginBtn}>
                        <span>login</span>
                    </button>
                </Link>)}




                <Link to={user ? "/post" : "/login"} className={styles.sellLink}>
                    <svg width="104" height="48" viewBox="0 0 1603 768" className="_20oLV"><g><path className={styles.sellWhite} d="M434.442 16.944h718.82c202.72 0 367.057 164.337 367.057 367.058s-164.337 367.057-367.057 367.057h-718.82c-202.721 0-367.058-164.337-367.058-367.058s164.337-367.058 367.058-367.058z"></path><path className={styles.sellYellow} d="M427.241 669.489c-80.917 0-158.59-25.926-218.705-73.004l-0.016-0.014c-69.113-54.119-108.754-131.557-108.754-212.474 0-41.070 9.776-80.712 29.081-117.797 25.058-48.139 64.933-89.278 115.333-118.966l-52.379-67.581c-64.73 38.122-115.955 90.98-148.159 152.845-24.842 47.745-37.441 98.726-37.441 151.499 0 104.027 50.962 203.61 139.799 273.175h0.016c77.312 60.535 177.193 93.887 281.22 93.887h299.699l25.138-40.783-25.138-40.783h-299.698z"></path><path className={styles.sellGreen} d="M1318.522 38.596v0c-45.72-14.369-93.752-21.658-142.762-21.658h-748.511c-84.346 0-165.764 21.683-235.441 62.713l3.118 51.726 49.245 15.865c54.16-31.895 117.452-48.739 183.073-48.739h748.511c38.159 0 75.52 5.657 111.029 16.829v0c44.91 14.111 86.594 37.205 120.526 66.792l66.163-57.68c-43.616-38.010-97.197-67.703-154.957-85.852z"></path><path className={styles.sellBlue} d="M1473.479 124.453l-55.855 9.91-10.307 47.76c61.844 53.929 95.92 125.617 95.92 201.88 0 25.235-3.772 50.26-11.214 74.363-38.348 124.311-168.398 211.129-316.262 211.129h-448.812l25.121 40.783-25.121 40.783h448.812c190.107 0 357.303-111.638 406.613-271.498 9.572-31.009 14.423-63.162 14.423-95.559 0-98.044-43.805-190.216-123.317-259.551z"></path></g></svg>
                    <div className={styles.sellLinkCnt}>
                        <span className={styles.sellLinkSvgContainer}><svg width="16px" height="16px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fillRule="evenodd"><path className="rui-lquEm" d="M414.898 123.739v291.218h-291.218l-97.014 97.014 97.014 97.131h291.218v291.16l97.073 97.071 97.073-97.071v-291.16h291.16l97.131-97.131-97.131-97.014h-291.16v-291.218l-97.073-97.073z"></path></svg></span>
                        <span className={styles.sellLinkText}>SELL</span>
                    </div>
                </Link>

            </div>

        </header>
    )
}

export default Header
