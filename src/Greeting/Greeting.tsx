import React from 'react';
import styles from './Greeting.module.css'
import myPhoto from '../assets/photo.jpg'

function Greeting() {
    return (
        <div className={styles.wrapper}>
            <div className={`${styles.content} container`}>
                <div className={styles.content__wrapper}>
                    <div className={styles.text__wrapper}>
                        <span className={styles.text__name}>Eduard <br/>Fedosevich<br/></span>
                        <span className={styles.text}>Frontend developer<br/>24 years old, Minsk</span>
                    </div>
                    <div className={styles.img__wrapper}>
                        <img className={styles.img} src={myPhoto} alt="myPhoto"/>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Greeting;