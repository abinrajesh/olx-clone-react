import React from 'react'
import styles from './Auth.module.css'
import { Outlet } from 'react-router-dom'
import Close from '../../Components/Buttons/Close/Close'


const Auth = () => {
  return (
    <div className={styles.authSection}>
      <div className={styles.content}>
        <Close />
        <Outlet />

      </div>
    </div>
  )
}

export default Auth
