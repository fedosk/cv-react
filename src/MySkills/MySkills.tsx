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
        <section className={styles.wrapper} id={'Scills'}>
            <div className={`${styles.content} container`}>
                <div className={styles.title__wrapper}>
                    <h3 className={styles.title}>Skills</h3>
                    <h4 className={styles.subtitle}>I work with</h4>
                </div>

                    <ul className={styles.cards__wrapper}>
                        <li>
                            <SlillCard title={'React'} src={reactIcon} borderColor={'#D6FFF2'} backgroundColor={'#EDFEFD'}/>
                        </li>
                        <li>
                            <SlillCard title={'Redux'} src={reduxIcon} borderColor={'#FFE7F0'} backgroundColor={'#FFF7FA'}/>
                        </li>
                        <li>
                            <SlillCard title={'TypeScript'} src={tsIcon} borderColor={'#DDF5FF'} backgroundColor={'#F5FCFF'}/>
                        </li>
                        <li>
                            <SlillCard title={'JavaScript'} src={jsIcon} borderColor={'#FFEEC9'} backgroundColor={'#FFFBF2'}/>
                        </li>
                        <li>
                            <SlillCard title={'HTML'} src={htmlIcon} borderColor={'#FCDDDB'} backgroundColor={'#FFF2F0'}/>
                        </li>
                        <li>
                            <SlillCard title={'CSS'} src={cssIcon} borderColor={'#DDF5FF'} backgroundColor={'#F5FCFF'}/>
                        </li>
                    </ul>

            </div>
        </section>
    );
}

export default MySkills;
