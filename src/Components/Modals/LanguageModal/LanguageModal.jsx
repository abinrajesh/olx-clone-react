import React from 'react'
import styles from './LanguageModal.module.css';

const LanguageModal = () => {
    return (
        <div className={styles.languageModalContainer}>
            <div className={styles.modalPopTag}></div>
            <ul>
                <li><span>English</span></li>
                <li><span>हिंदी</span></li>
            </ul>
        </div>
    )
}

export default LanguageModal
