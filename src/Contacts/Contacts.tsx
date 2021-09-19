import React from 'react';
import styles from './Contacts.module.css'

function Contacts() {
    return (
        <section className={styles.wrapper}>
            <div className={`${styles.content} container`}>
                <div className={styles.content__wrapper}>
                    <form action="text">
                        <input type="text"/>
                        <input type="email"/>
                    </form>
                </div>
            </div>
        </section>
    );
}


export default Contacts;