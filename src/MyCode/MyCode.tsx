import React from 'react';
import styles from './MyCode.module.css'
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism-async";
import {darcula} from "react-syntax-highlighter/dist/esm/styles/prism";


function MyCode() {
    return (
        <section className={styles.wrapper} id={'Code'}>
            <div className={`${styles.content} container`}>
                <h3 className={styles.my_code__title}>My Code</h3>
                <SyntaxHighlighter language="javascript" style={darcula}>
                    {
                    `function f(start, end) {
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
                    }`
                    }
                </SyntaxHighlighter>
            </div>
        </section>
    );
}

export default MyCode;