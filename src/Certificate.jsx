import { useEffect, useState } from "react";
import styles from './assets/Css/Certificate.module.css'
import hacking from './assets/Certificate/1.jpg'
import webdev from './assets/Certificate/web_dev.jpg'

function Certificate(){

    useEffect(() => {
        document.title = "Dave | Certificate"
    })


    return(
        <>
        <div className={styles.start}>
            <div className={styles.container}>
                <div className={styles.nav}>
                    <a href="/">
                    <h1>Foows</h1>
                    </a>
                    <div className={styles.nav2}>
                        <ul>
                        <li><a href="/">STATS</a></li>
                        <li><a href="/skills">SKILLS</a></li>
                        <li><a href="/projects">PROJECTS</a></li>
                        <li><a href="/certificate">CERTIFICATES</a></li>
                        <li><a href="/experience">EXPERIENCE</a></li>
                        <li><a href="/contact">CONTACT</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.resibo}>
                <div className={styles.menu}>
                    <h1>CERTIFICATES</h1>
                </div>
            </div>
        </div>
        </>
    )
}
export default Certificate