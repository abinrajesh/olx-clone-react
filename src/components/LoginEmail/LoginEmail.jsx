import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from '../../pages/Login/Login'
import Return from '../Button/Return/Return'
import styles from './LoginEmail.module.css'
import olxLogo from '../../assets/olx_logo_2025.svg'
import Next from '../Button/Next/Next'

const LoginSms = () => {
  const [input, setInput] = useState('');
  const [isValid, setIsValid] = useState(false);
  const handleInput = (e) => {

    const value = e.target.value;

    setInput(value);
    setIsValid(e.target.validity.valid);
  }



  return (
    <div className={styles.loginSmsSection}>
      <Link to='/login' element={<Login />}>
        <Return />
      </Link>

      <div className={styles.olxLogo}>
        <picture>
          <source type='image/svg+xml' srcSet={olxLogo} />
          <img src={olxLogo} alt="OLX Logo" />
        </picture>
      </div>

      <div className={styles.authInputForm}>
        <div className={styles.header}>
          <span>Enter your email to login</span>
        </div>

        <div className={styles.emailInput}>
          <input type="email" placeholder='Email' onChange={handleInput} />
        </div>

        <div className={styles.infoText}>
          <span>If you are a new user please select any other login option from previous page.</span>
        </div>

        <Next isActive={isValid} />

        <div className={styles.acknowledgement}>
          <span>
            Your email is never shared with external parties nor do we use it to spam you in any way.</span>
        </div>

      </div>
    </div>
  )
}

export default LoginSms
