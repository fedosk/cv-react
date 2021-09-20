import React from 'react';
import styles from './Greeting.module.css'
import myPhoto from '../assets/photo.jpg'

function Greeting() {
    return (
        <section className={styles.wrapper} id={'greeting'}>
            <div className={`${styles.content} container`}>
                <div className={styles.content__wrapper}>
                    <div className={styles.text__wrapper}>
                        <h1 className={styles.text__name}>Eduard <br/>Fedosevich<br/></h1>
                        <h2 className={styles.text}>Frontend developer<br/>24 years old, Minsk</h2>
                        <a href={'#Contacts'} className={styles.btn}>Contact with me</a>
                    </div>
                    <div className={styles.img__wrapper}>
                        <img className={styles.img} src={myPhoto} alt="myPhoto"/>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Greeting;