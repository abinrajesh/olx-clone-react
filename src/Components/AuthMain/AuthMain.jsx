import React, { useContext } from 'react'
import OnBoardingCarousels from '../../Components/OnBoardingCarousels/OnBoardingCarousels'
import { Link, useNavigate } from 'react-router-dom'
import styles from './AuthMain.module.css'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from "../../Firebase/Config";

const AuthMain = () => {
    const navigate = useNavigate();


    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log("Logged in user:", user);
            alert(`Signed in successfully as ${user.displayName}`);
            setTimeout(() => navigate('/'), 1000);
        } catch (error) {
            console.error("Error signing in with Google:", error);
            alert("Login failed. Please try again.");
        }
    };

    const handleCreateAccClick = () => {
        navigate('emailsignup');
    }

    return (
        <div>

            <OnBoardingCarousels />
            <div className={styles.AuthOptions}>


                <button className={styles.createAccBtn} onClick={handleCreateAccClick}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zm.192 8.159 6.57-4.027L8 9.586l1.239-.757.367.225A4.49 4.49 0 0 0 8 12.5c0 .526.09 1.03.256 1.5H2a2 2 0 0 1-1.808-1.144M16 4.697v4.974A4.5 4.5 0 0 0 12.5 8a4.5 4.5 0 0 0-1.965.45l-.338-.207z" />
                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-1.646a.5.5 0 0 1-.722-.016l-1.149-1.25a.5.5 0 1 1 .737-.676l.28.305V11a.5.5 0 0 1 1 0v1.793l.396-.397a.5.5 0 0 1 .708.708z" />
                        </svg>
                    </span>
                    <span>Create new Account</span>
                </button>

                <button className={styles.googleLogInBtn} onClick={handleGoogleLogin}>
                    <span>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>
                    </span>
                    <span>Continue with Google</span>
                </button>

                <span>OR</span>

                <Link to='loginemail' className={styles.loginEmailLink}>
                    <span>Login with Email</span>
                </Link>

            </div>
            <div className={styles.userAgreement}>
                <span>All your personal details are safe with us.</span>
                <div className={styles.acknowledgementSection}>
                    <span>If you continue, you are accepting <Link to='/helpcenter'>OLX Terms and Conditions and Privacy Policy</Link></span>
                </div>
            </div>


        </div>
    )
}

export default AuthMain
