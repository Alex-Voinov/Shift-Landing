import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.wrapper}>
            <div className={styles.container}>
                <div>Copyright © 2025 Shift <span className={styles.additionalText}>&nbsp;All rights reserved.</span></div>
                <div>Privacy & Policy</div>
            </div>
        </footer>
    )
}

export default Footer