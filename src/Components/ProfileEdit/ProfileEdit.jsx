import React from 'react'
import styles from './ProfileEdit.module.css';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

const ProfileEdit = () => {

    const navigate = useNavigate();

    const handleViewProfile = () => {
        navigate('/profile');
    }

    const handleDiscard = () => {
        navigate('/profile');
    }

    const handleSave = (e) => {
        e.preventDefault();
        alert("Saved!");
    }

    return (
        <div className={styles.profileEditSection}>
            <div className={styles.leftSection}>
                <div className={classNames(styles.leftBtns, styles.active)}>
                    <span>Edit Profile</span>
                </div>
                <div className={classNames(styles.leftBtns, styles.notActive)}>
                    <span>ProfilePicture</span>
                </div>
                <div className={styles.viewProfileBtn}>
                    <button onClick={handleViewProfile}>
                        <span>View profile</span>
                    </button>
                </div>
            </div>
            <div className={styles.rightSection}>
                <form className={styles.editProfileForm}>
                    <div className={styles.editProfileHeader}>
                        <span>Edit Profile</span>
                    </div>
                    <div className={styles.mainSeparation}></div>

                    <div className={styles.infoSection}>


                        <div className={styles.formHeaders}>
                            <span>Basic information</span>
                        </div>

                        <div className={styles.formSections}>
                            <div className={styles.formLeftSide}>
                                <input className={styles.inputs} type="text" placeholder='Name' />
                                <input className={classNames(styles.inputs, styles.locationInp)} type="text" placeholder='Location' />
                            </div>

                            <div className={styles.formRightSide}>
                                <div className={styles.acknowledgement}>

                                    <div className={styles.acknowledgementHeader}>
                                        <span><svg width="25px" height="25px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-w4DG7" d="M318.061 279.272h-54.847l-61.517-61.517v-54.847h54.847l61.517 61.517v54.847zM512 240.485l-38.789-38.789v-77.575l38.789-38.789 38.789 38.789v77.575l-38.789 38.789zM938.667 473.211l-38.789 38.789h-77.575l-38.789-38.789 38.789-38.789h77.575l38.789 38.789zM201.697 434.425l38.789 38.789-38.789 38.789h-77.575l-38.789-38.789 38.789-38.789h77.575zM822.303 217.755l-61.517 61.517h-54.847v-54.847l61.517-61.517h54.847v54.847zM621.73 621.73c-13.848 13.809-29.867 24.747-47.67 32.505l-23.272 35.569v54.924h-77.575v-54.924l-23.272-35.53c-17.804-7.757-33.823-18.734-47.67-32.582-60.47-60.47-60.47-158.913 0-219.385 60.51-60.51 158.952-60.51 219.462 0 60.47 60.47 60.47 158.913 0 219.385zM473.211 861.091h77.575v-38.789h-77.575v38.789zM512 279.272c-62.177 0-120.63 24.204-164.538 68.19-90.764 90.725-90.764 238.351 0 329.115 14.507 14.469 30.643 26.919 48.174 37.043v186.259l38.789 38.789h155.151l38.789-38.789v-186.259c17.57-10.163 33.669-22.574 48.174-37.081 90.764-90.725 90.764-238.391 0-329.115-43.909-43.909-102.323-68.15-164.538-68.15z"></path></svg></span>
                                        <span>Why is it important?</span>
                                    </div>
                                    <div className={styles.acknowledgementDescription}>
                                        <span>OLX is built on trust. Help other people get to know you. Tell them about the things you like. Share your favorite brands, books, movies, shows, music, food. And you will see the results…</span>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className={styles.subSeparation}></div>

                        <div className={styles.formHeaders}>
                            <span>Contact information</span>
                        </div>

                        <div className={styles.formSections}>

                            <div className={styles.formLeftSide}>
                                <div className={styles.mobileNumberInput}>
                                    <input className={styles.inputs} type="tel" placeholder='Phone number' />
                                    <div className={styles.countryCode}>
                                        <span>+91</span>
                                    </div>
                                    <div className={styles.countryCodeSeparator}></div>
                                    <button className={styles.inputSubmitBtn}><span><svg width="16px" height="16px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-YQRFW _3yUQa" d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg></span></button>
                                </div>
                                <div className={styles.emailInput}>
                                    <input className={styles.inputs} type="email" placeholder='Email address' />
                                    <button className={styles.inputSubmitBtn}><span><svg width="16px" height="16px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-YQRFW _3yUQa" d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg></span></button>
                                </div>
                            </div>


                        </div>
                        <div className={styles.subSeparation}></div>

                        <div className={styles.additionalInfo}>

                            <div className={classNames(styles.formHeaders, styles.additionalInfoHeader)}>
                                <span>Additional Information</span>
                            </div>

                            <div className={styles.formSections}>

                                <div className={styles.additionalInfoSection}>

                                    <div className={styles.additionalInfoName}>
                                        <span>Google</span>
                                    </div>
                                    <div className={styles.additionalInfoDescription}>
                                        <span>Link your Google account to seamlessly use your contact list.</span>
                                    </div>
                                </div>
                                <div className={(styles.formRightSide, styles.addintionalInfoBtn)}>
                                    <button className={styles.linkBtn}>
                                        <span>Link</span>
                                    </button>
                                    {/* <button className={styles.unLinkBtn}>
                                        <span>Unlink</span>
                                    </button> */}
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className={styles.mainSeparation}></div>

                    <div className={styles.additionalInfoSubmitSection}>
                        <button className={styles.discardBtn} onClick={handleDiscard}>
                            <span>Discard</span>
                        </button>
                        <button className={styles.saveChangesBtn} onClick={handleSave}>
                            <span>Save Changes</span>
                        </button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default ProfileEdit
