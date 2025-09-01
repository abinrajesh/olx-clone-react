import React from 'react'
import Return from '../Button/Return/Return'
import { Link } from 'react-router-dom'
import styles from './LoginEmail.module.css'
import Login from '../../pages/Login/Login'
import olxLogo from '../../assets/olx_logo_2025.svg'

const LoginEmail = () => {
  return (
    <div className={styles.loginEmailSection}>
      <Link to='/login' element={<Login />}>
        <Return />
      </Link>

      <div className={styles.olxLogo}>
        <picture>
          <source type='image/svg+xml' srcSet={olxLogo} />
          <img src={olxLogo} alt="OLX Logo" />
        </picture>
      </div>

      <h1>Login Email Page</h1>
    </div>
  )
}

export default LoginEmail
