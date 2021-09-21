import React from 'react';
import styles from "./ProjectCard.module.css";
import Tilt from 'react-parallax-tilt'

type PropsType = {
    src: string
    title: string
    subtitle: string
    borderColor: string
    backgroundColor: string
}

function ProjectCard(props: PropsType) {

    const stylesCardWrapper = {
        backgroundColor: props.backgroundColor,
        border: `2px solid ${props.borderColor}`,
    }

    return (
        <Tilt
            className={styles.trackOnWindow}
            perspective={10000}
            glareEnable={true}
            glareMaxOpacity={0.75}
            glarePosition="all"
            scale={1.02}
            style={stylesCardWrapper}
        >
            <div className={styles.wrapper} >
                <img className={styles.img} src={props.src} alt="reactIcon"/>
                <h5 className={styles.card_title}>{props.title}</h5>
                <h6>{props.subtitle}</h6>
            </div>
        </Tilt>
    );
}

export default ProjectCard;
