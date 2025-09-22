import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Return from '../Buttons/Return/Return'
import styles from './EmailSignup.module.css'
import olxLogo from '../../assets/olx_logo_2025.svg'
import classNames from 'classnames'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../Firebase/Config'

const EmailSignup = () => {

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [rules, setRules] = useState({
    hasUpper: false,
    hasLower: false,
    hasNumber: false,
    hasSpecial: false,
    longEnough: false,
  });

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [isValid, setIsValid] = useState(false);
  const [nameIsValid, setNameIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);


  const handleName = (e) => {
    setNameIsValid(e.target.validity.valid);
    setUserName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmailIsValid(e.target.validity.valid);
    setEmail(e.target.value);
  };

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


  const handleCreateAccount = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        username: userName,
        email: user.email,
        createdAt: new Date(),
        // any other details you want
      });

      await updateProfile(userCredential.user, {
        displayName: userName,
      });


      alert(`Account Created! Welcome ${userName}`);
      navigate('/');
    } catch (error) {
      console.error(error.code, error.message);
    }
  };


  useEffect(() => {
    if (nameIsValid && emailIsValid && passwordIsValid) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [nameIsValid, emailIsValid, passwordIsValid]);

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  }, []);

  return (
    <div className={styles.emailSignupSection}>
      <Link to='/login'>
        <Return />
      </Link>

      <div className={styles.olxLogo}>
        <picture>
          <source type='image/svg+xml' srcSet={olxLogo} />
          <img src={olxLogo} alt="OLX Logo" />
        </picture>
      </div>

      <form className={styles.authInputForm} onSubmit={handleCreateAccount}>
        <div className={styles.header}>
          <span>Create new Account</span>
        </div>

        <div className={classNames(styles.input, styles.nameInput)}>
          <input
            type="text"
            placeholder="Full Name"
            ref={nameRef}
            onChange={handleName}
            required
            minLength={3}
          />
        </div>

        <div className={styles.input}>
          <input
            type="email"
            placeholder="Email address"
            ref={emailRef}
            onChange={handleEmail}
            required
          />
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


        <div className={styles.signUpBtnContainer}>
          <button type='submit' disabled={!isValid} className={classNames(styles.signUpBtn, { [styles.active]: isValid, [styles.notActive]: !isValid })}>
            <span>Sign Up</span>
          </button>
        </div>

        <div className={styles.signupLoginSeparator}>
          <span>OR</span>
        </div>

        <div className={styles.loginBtnContainer}>
          <Link to='/login/loginemail' className={styles.loginEmailLink}>
            <span>Login</span>
          </Link>
        </div>

        <div className={styles.acknowledgement}>
          <span>
            Your contact number is never shared with external parties nor do we use it to spam you in any way.
          </span>
        </div>
      </form>
    </div>
  );
};

export default EmailSignup;
