import React from 'react';
import styles from './AboutMe.module.css'

function AboutMe() {
    return (
        <section className={styles.wrapper} id={'aboutme'}>
            <div className={`${styles.content} container`}>
                <div className={styles.content__wrapper}>
                    <div className={styles.text__wrapper}>
                        <p className={styles.text}>Hi, I'm Eduard – frontend developer from Minsk</p>
                        <p className={styles.text}>I'm interested in web-technologies and everything connected with
                            it</p>
                        <p className={styles.text}>I'm studying at IT-Incubator and RSShool.
                            Ready to implement excellent projects with wonderful people</p>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default AboutMe;