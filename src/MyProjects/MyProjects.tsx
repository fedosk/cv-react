import React from 'react';
import styles from "./MyProjects.module.css";
import social from './../assets/social-network.png'
import counter from './../assets/counter.png'
import museum from './../assets/museum.png'
import calculator from './../assets/calculator.png'
import piano from './../assets/virtual-piano.png'
import ProjectCard from "./../MyProjects/ProjectCard/ProjectCard";

function MyProjects() {
    return (
        <section className={styles.wrapper} id={'Projects'}>
            <div className={`${styles.content} container`}>
                <div className={styles.title__wrapper}>
                    <h3 className={styles.title}>My Projects</h3>
                </div>
                <div className={styles.cards__wrapper}>
                    <a href={'https://fedosk.github.io/social-network/'} target="_blank">
                        <ProjectCard title={'Social Network'}
                                     subtitle={'React/Redux+TypeScript'}
                                     src={social}
                                     borderColor={'#dad6ff'}
                                     backgroundColor={'#eeedfe'}/>
                    </a>
                    <a href={'https://fedosk.github.io/Counter/'} target="_blank">
                        <ProjectCard title={'Counter'}
                                     subtitle={'React/Redux+TypeScript'}
                                     src={counter} borderColor={'#f5e7ff'} backgroundColor={'#fdf7ff'}/>
                    </a>
                    <a href={'https://rolling-scopes-school.github.io/fedosk-JSFEPRESCHOOL/museum/'} target="_blank">
                        <ProjectCard title={'Museum'}
                                     subtitle={'HTML+CSS'}
                                     src={museum} borderColor={'#ffefd6'} backgroundColor={'#fef9ed'}/>
                    </a>
                    <a href={'https://rolling-scopes-school.github.io/fedosk-JS2020Q3/calculator/'} target="_blank">
                        <ProjectCard title={'Calculator'}
                                     subtitle={'JS+HTML+CSS'}
                                     src={calculator} borderColor={'#FFE7F0'} backgroundColor={'#FFF7FA'}/>
                    </a>
                    <a href={'https://rolling-scopes-school.github.io/fedosk-JSFE2021Q1/virtual-piano/'} target="_blank">
                        <ProjectCard title={'Virtual Piano'}
                                     subtitle={'JS+HTML+CSS'}
                                     src={piano} borderColor={'#dbf9fc'} backgroundColor={'#f0ffff'}/>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default MyProjects;


