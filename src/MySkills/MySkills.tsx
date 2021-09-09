import React from 'react';
import styles from "./MySkills.module.css";
import SlillCard from "./SkillCard/SkillCard";

function MySkills() {
    return (
        <div className={styles.wrapper}>
            <div className={`${styles.content} container`}>
                <h3 className={styles.title}>My Skills</h3>
                <div className={styles.cards__wrapper}>
                    <SlillCard/>
                    <SlillCard/>
                    <SlillCard/>
                </div>
            </div>
        </div>
    );
}

export default MySkills;
