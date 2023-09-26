import React from "react";
import styles from './themeToggle.module.css'

const ThemeToggle = () => {
    return <div className={styles.container}>
        <img src="/moon.png" alt="" width={14} height={14} />
        <div className={styles.ball}></div>
        <img src="/sun.png" alt="" width={14} height={14} />
    </div>
}

export default ThemeToggle

    
