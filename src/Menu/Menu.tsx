import React from 'react';
import styles from './Menu.module.css'

function Menu() {
    return (
        <nav className={styles.header__content}>
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
                    <a className={styles.nav_link} href={"#Code"}>Code</a>
                </li>
                <li className={styles.nav_item}>
                    <a className={styles.nav_link} href={"#Contacts"}>Contacts</a>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;

