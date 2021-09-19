import React from 'react';
import styles from './Contacts.module.css'
import {useForm, SubmitHandler} from "react-hook-form";

type Inputs = {
    example: string,
    exampleRequired: string,
};

function Contacts() {

    return (
        <section className={styles.wrapper}>
            <div className={`${styles.content} container`}>
                <div className={styles.content__wrapper}>
                    <h3 className={styles.title}>Contact with me</h3>
                    <form className={styles.form} >
                        <input className={styles.input} type="text" placeholder={'Name'}/>
                        <input className={styles.input}  type="email" placeholder={'Email'}/>
                        <input className={styles.input_btn} type="submit"/>
                    </form>
                </div>
            </div>
        </section>
    );
}


export default Contacts;



