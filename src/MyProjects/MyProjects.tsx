import React from 'react';
import styles from "./MyProjects.module.css";
import social from './../assets/social-network.png'
import counter from './../assets/counter.png'
import museum from './../assets/museum.png'
import calculator from './../assets/calculator.png'
import piano from './../assets/virtual-piano.png'
import wildlife from './../assets/wildlife.png'
import ProjectCard from "./../MyProjects/ProjectCard/ProjectCard";

function MyProjects() {
    return (
        <div className={styles.wrapper}>
            <div className={`${styles.content} container`}>
                <div className={styles.title__wrapper}>
                    <h3 className={styles.title}>My Projects</h3>
                </div>
                <div className={styles.cards__wrapper}>
                    <ProjectCard title={'Social Network'} src={social} borderColor={'#dad6ff'} backgroundColor={'#eeedfe'}/>
                    <ProjectCard title={'Counter'} src={counter} borderColor={'#f5e7ff'} backgroundColor={'#fdf7ff'}/>
                    <ProjectCard title={'Museum'} src={museum} borderColor={'#ffefd6'} backgroundColor={'#fef9ed'}/>
                    <ProjectCard title={'Calculator'} src={calculator} borderColor={'#FFE7F0'} backgroundColor={'#FFF7FA'}/>
                    <ProjectCard title={'Virtual Piano'} src={piano} borderColor={'#dbf9fc'} backgroundColor={'#f0ffff'}/>
                    <ProjectCard title={'Wildlife'} src={wildlife} borderColor={'#e9ffdd'} backgroundColor={'#f7fff5'}/>
                </div>
            </div>
        </div>
    );
}

export default MyProjects;


