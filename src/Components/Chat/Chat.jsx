import React from 'react'
import styles from './Chat.module.css'
import emptyChatImg from '../../assets/emptyChat.webp'
import { useNavigate } from 'react-router-dom'

const Chat = () => {

    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    }

    return (
        <div className={styles.chatContainer}>


            <div className={styles.noChatContainer}>

                <div className={styles.noChatHeader}>
                    <span>No messages, yet?</span>
                </div>

                <div className={styles.emptyChatImg}>
                    <img src={emptyChatImg} alt="Empty Chat Img" />
                </div>

                <div className={styles.noChatDescription}>
                    <span>We'll keep messages for any items you're selling in here</span>
                </div>

                <div className={styles.homeBtn}>
                    <button onClick={handleHomeClick}>
                        <span>Return Home</span>
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Chat
