import React from 'react'
import styles from './Login.module.css'
import { Outlet } from 'react-router-dom'
import Close from '../../components/Button/Close/Close'


const Login = () => {
  return (
    <div className={styles.loginSection}>
      <div className={styles.content}>
        <Close />
        <Outlet />

      </div>
    </div>
  )
}

export default Login
