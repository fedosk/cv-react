import React from 'react';
import styles from "./SkillCard.module.css";
import Tilt from 'react-parallax-tilt'

type PropsType = {
    src: string
    title: string
    borderColor: string
    backgroundColor: string
}

type stylesCardWrapperType = {
    backgroundColor: string
}




function SlillCard(props: PropsType) {

    const stylesCardWrapper = {
        backgroundColor: props.backgroundColor,
        border: `2px solid ${props.borderColor}`,
    }

    return (
        <Tilt
            className={styles.trackOnWindow}
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.75}
            glarePosition="all"
            scale={1.02}
            style={stylesCardWrapper}
        >
            <div className={styles.wrapper} >
                <img className={styles.img} src={props.src} alt="reactIcon"/>
                <h5 className={styles.card_title}>{props.title}</h5>
            </div>
        </Tilt>
    );
}

export default SlillCard;
