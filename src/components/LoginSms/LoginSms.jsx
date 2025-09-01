import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from '../../pages/Login/Login'
import Return from '../Button/Return/Return'
import styles from './LoginSms.module.css'
import olxLogo from '../../assets/olx_logo_2025.svg'
import Next from '../Button/Next/Next'

const LoginSms = () => {
  const [input, setInput] = useState('');
  const [count, setCount] = useState(0);

  const handleInput = (e) => {

    const value = e.target.value;

    if (!isNaN(+value) && value.trim() !== "") {
      setInput(value);
      setCount(value.length);
    }
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
          <span>Enter your phone number</span>
        </div>

        <div className={styles.numberInput}>
          <div className={styles.countryCodeSection}>
            <span>+91</span>
            <div className={styles.countryCodeDivider}></div>
          </div>
          <input type="text" placeholder='Phone Number' onChange={handleInput} />
        </div>

        <Next isActive={count === 10} />

        <div className={styles.acknowledgement}>
          <span>
            Your contact number is never shared with external parties nor do we use it to spam you in any way.</span>
        </div>

      </div>
    </div>
  )
}

export default LoginSms
