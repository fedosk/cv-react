import React from 'react';
import styles from "./ProjectCard.module.css";
import reactIcon from './../../assets/react-2.svg'

const ProjectCard = () => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.img} src={reactIcon} alt="reactIcon"/>
            <h4 className={styles.card_title}>React</h4>
            <p className={styles.card_subtitle}>Social Network</p>
        </div>
    );
}

export default ProjectCard;
