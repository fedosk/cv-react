import React from 'react';
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <nav className={`${styles.header__content} container`}>
                <ul className={styles.nav_list}>
                    <li className={styles.nav_item}>
                        <a className={styles.nav_link} href={"#Main"}>Main</a>
                    </li>
                    <li className={styles.nav_item}>
                        <a className={styles.nav_link} href={"#Scills"}>Skills</a>
                    </li>
                    <li className={styles.nav_item}>
                        <a className={styles.nav_link} href={"#Projects"}>Projects</a>
                    </li>
                    <li className={styles.nav_item}>
                        <a className={styles.nav_link} href={"#Contacts"}>Code</a>
                    </li>
                    <li className={styles.nav_item}>
                        <a className={styles.nav_link} href={"#Contacts"}>Contacts</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

