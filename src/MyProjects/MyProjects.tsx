import React from 'react';
import styles from './MyProjects.module.css'
import ProjectCard from "./ProjectCard/ProjectCard";


function MyProjects() {
    return (
        <div className={styles.wrapper}>
            <div className={`${styles.content} container`}>
                <h3 className={styles.title}>My Skills</h3>
                <div className={styles.cards__wrapper}>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>

                </div>
            </div>
        </div>
    );
}

export default MyProjects;


