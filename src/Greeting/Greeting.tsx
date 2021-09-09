import React from 'react';
import styles from './Greeting.module.css'
import myPhoto from '../assets/photo.jpg'

function Greeting() {
    return (
        <div className={styles.wrapper}>
            <div className={`${styles.content} container`}>
                <div className={styles.content__wrapper}>
                    <p className={styles.text}>Hello!<br/>
                        My name is Eduard Fedosevich <br/>
                        I'm a front-end developer!
                    </p>
                    <div className={styles.img__wrapper}><img className={styles.img} src={myPhoto} alt="myPhoto"/></div>
                </div>
            </div>
        </div>
    );
}

export default Greeting;