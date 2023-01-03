import React from 'react';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.container}>
        <div className={styles.logo}>
            <a href="/">
                <img src="https://logos-marques.com/wp-content/uploads/2021/03/Netflix-logo-500x281.png" alt="logo Netflix" />
            </a>
        </div>
        <div className={styles.profile}>
            <a href="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="logo profile" />
            </a>
        </div>
    </header>
  )
}

export default Header;