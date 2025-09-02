import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Login from '../../pages/Login/Login'
import Return from '../Button/Return/Return'
import styles from './LoginSms.module.css'
import olxLogo from '../../assets/olx_logo_2025.svg'
import Next from '../Button/Next/Next'
import { PhoneContext } from '../../context/PhoneContext'


const LoginSms = () => {
  const { phone, setPhone } = useContext(PhoneContext);
  const [input, setInput] = useState(phone || '');
  const [count, setCount] = useState(phone ? phone.length : 0);
  const inputRef = useRef(null);

  const navigate = useNavigate();

  const handleInput = (e) => {

    const value = e.target.value;
    const input = value.replace(/\D/g, "");
    setPhone(input);
    setCount(input.length);
  }

  const requestOTP = (e) => {
    e.preventDefault();

    navigate('loginsmscode')
  }


  useEffect(() => {
    if (phone) {
      setInput(phone);
      setCount(phone.length);
    }

  }, [phone])

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [])
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

      <form className={styles.authInputForm} onSubmit={requestOTP}>
        <div className={styles.header}>
          <span>Enter your phone number</span>
        </div>

        <div className={styles.numberInput}>
          <div className={styles.countryCodeSection}>
            <span>+91</span>
            <div className={styles.countryCodeDivider}></div>
          </div>
          <input type="tel" placeholder='Phone Number' onChange={handleInput} value={input} ref={inputRef} />
        </div>

        <Next isActive={count === 10} navigateTo={"loginsmscode"} onClick={requestOTP} />

        <div className={styles.acknowledgement}>
          <span>
            Your contact number is never shared with external parties nor do we use it to spam you in any way.</span>
        </div>

      </form>
    </div>
  )
}

export default LoginSms
