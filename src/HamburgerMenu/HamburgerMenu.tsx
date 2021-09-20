import React, {useState} from 'react';
import styles from './HamburgerMenu.module.css'

function HamburgerMenu() {

    const [toggleStatus, setToggleStatus] = useState(false)

    const togle = (status: boolean) => {
        setToggleStatus(status)
    }

    return (
        <div className={styles.hamburgerMenu}>
            <input className={styles.menu__toggle}
                   id="menu__toggle"
                   type="checkbox"
                   checked={toggleStatus}
                   onClick={() => togle(!toggleStatus)}/>
            <label className={styles.menu__btn} htmlFor="menu__toggle">
                <span/>
            </label>
            <ul className={toggleStatus? styles.menu__box : styles.toggle}>
                <li className={styles.menu__item}>
                    <a href={"#Main"} onClick={() => togle(false)}>Main</a>
                </li>
                <li className={styles.menu__item}>
                    <a href={"#Scills"} onClick={() => togle(false)}>Skills</a>
                </li>
                <li className={styles.menu__item}>
                    <a href={"#Projects"} onClick={() => togle(false)}>Projects</a>
                </li>
                <li className={styles.menu__item}>
                    <a href={"#Code"} onClick={() => togle(false)}>Code</a>
                </li>
                <li className={styles.menu__item}>
                    <a href={"#Contacts"} onClick={() => togle(false)}>Contacts</a>
                </li>
            </ul>
        </div>
    );
}

export default HamburgerMenu;

