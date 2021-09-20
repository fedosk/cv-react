import React from 'react';
import styles from './Header.module.css'
import Menu from "../Menu/Menu";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

function Header() {
    return (
        <header className={styles.header} id={'Main'}>
            <nav className={`${styles.content} container`}>
                <HamburgerMenu/>
                <Menu/>
            </nav>
        </header>
    );
}

export default Header;

