import React from 'react';
import styles from './Contact.module.css'
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism-async";
import {darcula} from "react-syntax-highlighter/dist/esm/styles/prism";


function Contact() {

    return (
        <div className={styles.contact__wrapper}>
            <div className={`${styles.contact__content} ${styles.container}`}>
                <SyntaxHighlighter language="javascript" style={darcula}>
                    {`function fridayTheThirteenths(start, end) {
                      let howManyFridays = []
                      if (typeof end == "undefined") {
                        for(let i = 0; i < 12; i++){
                          let date = new Date(start,i,13)
                          if(date.getDay() === 5){
                            howManyFridays.push(i+1 + '/' + 13 + '/' + start)
                          }
                        }
                      }
                      for(let j = start; j <= end; j++){
                        for(let i = 0; i < 12; i++){
                          let date = new Date(j,i,13)
                          if(date.getDay() === 5){
                            howManyFridays.push(i+1 + '/' + 13 + '/' + j)
                          }
                        }
                      }
                      return howManyFridays.join(' ')
                    }`}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}

export default Contact;