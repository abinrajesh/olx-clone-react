import React from 'react'
import styles from './Close.module.css'
import { Link } from 'react-router-dom'

const Close = () => {
    return (
        <div className={styles.closeBtn}>

            <Link to='/'>
                <button>
                    <span>
                        <svg width="25px" height="25px" viewBox="0 0 1024 1024" data-aut-id="icon" fillRule="evenodd"><path d="M878.336 85.333l-366.336 366.315-366.336-366.315h-60.331v60.331l366.336 366.336-366.336 366.336v60.331h60.331l366.336-366.336 366.336 366.336h60.331v-60.331l-366.315-366.336 366.315-366.336v-60.331z"></path></svg>
                    </span>
                </button>
            </Link>

        </div>
    )
}

export default Close
