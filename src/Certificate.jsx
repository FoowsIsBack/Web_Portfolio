import { useEffect, useState } from "react";
import styles from './assets/Css/Certificate.module.css'
import hacking from './assets/Certificate/1.jpg'
import webdev from './assets/Certificate/web_dev.jpg'
import linux from './assets/Certificate/basic_linux.jpg'

function Certificate(){

    useEffect(() => {
        document.title = "Dave | Certificates"
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
                        <li><a href="/contact">CONTACT</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.resibo}>
                <div className={styles.menu}>
                    <h1>CERTIFICATES</h1>
                </div>
                <div className={styles.cert}>
                    <div className={styles.menu2}>
                        <div className={styles.hacking}>
                            <h3>Penetration Testing and Ethical Hacking</h3>
                            <p>(June 3, 2018)</p>
                            <img src={hacking} alt="hacking"/>
                        </div>
                        <div className={styles.webdev}>
                            <h3>Web Development</h3>
                            <p>(July 13, 2026)</p>
                            <img src={webdev} alt="webdev"/>
                        </div>
                        <div className={styles.linux}>
                            <h3>Introduction to Kali Linux Basics</h3>
                            <p>(July 16, 2026)</p>
                        <img src={linux} alt="linux"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.ending}>
                <footer>
                    <p>© 2026 Kiryll Dave U. Bangcoyo. All rights reserved.</p>
                </footer>
            </div>
        </div>
        </>
    )
}
export default Certificate