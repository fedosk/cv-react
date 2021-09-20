import React from 'react';
import styles from './ContactLinks.module.css'
import linkedin from './../assets/linkedin.svg'
import github from './../assets/github.svg'
import gmail from './../assets/gmail.svg'
import telegram from './../assets/telegram.svg'
import rss from './../assets/rs_school_js.svg'

function ContactLinks() {
    return (
        <div className={styles.links__wrapper}>
            <ul className={styles.links__list}>
                <li className={styles.links__item}>
                    <a className={styles.link} href="https://www.linkedin.com/in/eduardfedosevich/" target="_blank">
                        <img className={styles.img} src={linkedin} alt="linkedin"/>
                    </a>
                </li>
                <li className={styles.links__item}>
                    <a className={styles.link} href="https://github.com/fedosk" target="_blank">
                        <img className={styles.img} src={github} alt="github"/>
                    </a>
                </li>
                <li className={styles.links__item}>
                    <a className={styles.link} href='mailto:fedosewiched@gmail.com' target="_blank">
                        <img className={styles.img} src={gmail} alt="gmail"/>
                    </a>
                </li>
                <li className={styles.links__item}>
                    <a className={styles.link} href="https://t.me/fedosed" target="_blank">
                        <img className={styles.img} src={telegram} alt="telegram"/>
                    </a>
                </li>
                <li className={styles.links__item}>
                    <a className={styles.link} href="https://rs.school/js/" target="_blank">
                        <img className={styles.img} src={rss} alt="rs_school"/>
                    </a>
                </li>
            </ul>
        </div>
    );
}


export default ContactLinks;