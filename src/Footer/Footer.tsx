import React from 'react';
import styles from './Footer.module.css'
import ContactLinks from "../ContactLinks/ContactLinks";
import Menu from "../Menu/Menu";

function Footer() {
    return (
        <footer className={styles.wrapper}>
            <div className={`${styles.content} container`}>
                <Menu/>
                <ContactLinks/>
                <span>© 2021 by Eduard Fedosevich</span>
            </div>
        </footer>
    );
}

export default Footer;