import React from 'react';
import styles from "./MySkills.module.css";
import SlillCard from "./SkillCard/SkillCard";
import reactIcon from './../assets/react-2.svg'
import tsIcon from './../assets/Typescript_logo_2020.svg'
import jsIcon from './../assets/js.png'
import reduxIcon from './../assets/redux.png'
import htmlIcon from './../assets/html.png'
import cssIcon from './../assets/css.png'

function MySkills() {
    return (
        <div className={styles.wrapper}>
            <div className={`${styles.content} container`}>
                <div className={styles.title__wrapper}>
                    <h3 className={styles.title}>Skills</h3>
                    <h4 className={styles.subtitle}>I work with</h4>
                </div>
                <div className={styles.cards__wrapper}>
                    <SlillCard title={'React'} src={reactIcon} borderColor={'#D6FFF2'} backgroundColor={'#EDFEFD'}/>
                    <SlillCard title={'Redux'} src={reduxIcon} borderColor={'#FFE7F0'} backgroundColor={'#FFF7FA'}/>
                    <SlillCard title={'TypeScript'} src={tsIcon} borderColor={'#DDF5FF'} backgroundColor={'#F5FCFF'}/>
                    <SlillCard title={'JavaScript'} src={jsIcon} borderColor={'#FFEEC9'} backgroundColor={'#FFFBF2'}/>
                    <SlillCard title={'HTML'} src={htmlIcon} borderColor={'#FCDDDB'} backgroundColor={'#FFF2F0'}/>
                    <SlillCard title={'CSS'} src={cssIcon} borderColor={'#DDF5FF'} backgroundColor={'#F5FCFF'}/>
                </div>
            </div>
        </div>
    );
}

export default MySkills;
