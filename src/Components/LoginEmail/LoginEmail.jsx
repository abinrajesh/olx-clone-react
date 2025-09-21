import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Return from '../Buttons/Return/Return'
import styles from './LoginEmail.module.css'
import olxLogo from '../../assets/olx_logo_2025.svg'
import classNames from 'classnames'
import { auth } from '../../Firebase/Config'
import { signInWithEmailAndPassword, validatePassword } from 'firebase/auth'

const LoginEmail = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const passwordRef = useRef();
  const navigate = useNavigate();



  const handleInput = (e) => {

    const value = e.target.value;

    setEmail(value);
    setIsValid(e.target.validity.valid);
  }

  const handlePassword = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (!passwordTouched) setPasswordTouched(true);

    const newRules = {
      hasUpper: /[A-Z]/.test(newPassword),
      hasLower: /[a-z]/.test(newPassword),
      hasNumber: /[0-9]/.test(newPassword),
      hasSpecial: /[@$!%*?&]/.test(newPassword),
      longEnough: newPassword.length >= 8 && newPassword.length <= 12,
    };

    setRules(newRules);
    setPasswordIsValid(Object.values(newRules).every(Boolean));
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();

    const status = await validatePassword(auth, password);
    if (!status.isValid) {
      alert("Wrong Password!");
      const needsLowerCase = status.containsLowercaseLetter !== true;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert(`Welcome Back ${user.displayName}`)
        setTimeout(() => {
          navigate('/');
        }, 1500);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

  }

  return (
    <div className={styles.loginEmailSection}>
      <Link to='/login'>
        <Return />
      </Link>

      <div className={styles.olxLogo}>
        <picture>
          <source type='image/svg+xml' srcSet={olxLogo} />
          <img src={olxLogo} alt="OLX Logo" />
        </picture>
      </div>

      <form className={styles.authInputForm} onSubmit={handleEmailLogin}>
        <div className={styles.header}>
          <span>Enter your email to login</span>
        </div>

        <div className={styles.emailInput}>
          <input type="email" placeholder='Email' onChange={handleInput} />
        </div>

        <div className={styles.input}>
          <input
            type="password"
            placeholder="Password"
            ref={passwordRef}
            onChange={handlePassword}
            required
            minLength={8}
          />
        </div>

        <div className={styles.infoText}>
          <span>If you are a new user please select any other login option from previous page.</span>
        </div>

        <div className={styles.loginBtnContainer}>
          <button type='submit' disabled={!isValid} className={classNames(styles.loginBtn, { [styles.active]: isValid, [styles.notActive]: !isValid })}>
            <span>Login</span>
          </button>
        </div>
        <div className={styles.acknowledgement}>
          <span>
            Your email is never shared with external parties nor do we use it to spam you in any way.</span>
        </div>

      </form>
    </div>
  )
}

export default LoginEmail
