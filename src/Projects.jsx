import { useEffect, useState } from "react";
import styles from './assets/Css/Projects.module.css'
import parking from './assets/Projects_image/evsupsm.png'
import calculator from './assets/Projects_image/calculator.png'
import kirotask from './assets/Projects_image/kirotask.png'
import sem from './assets/Projects_image/sem.png'
import phantom from './assets/Projects_image/phantom.png'

function Projects(){

    useEffect(() => {
        document.title = "Dave | Projects"
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
                    <h1>PROJECTS</h1>
                </div>
            </div>
            <div className={styles.example1}>
                <div className={styles.page}>
                    <a href="https://github.com/FoowsIsBack/EVSU_Vehicle_GatePass_System" target='_blank'>
                    <div className={styles.parking}>
                        <img src={parking} alt="parking"/>
                        <h2>EVSU Parking Sticker Management & Verification System</h2>
                        <div className={styles.description}>
                            <p>FastAPI</p>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>MySQL</p>
                        </div>
                        <div className={styles.description1}>
                            <h4>Under Development</h4>
                            <p>EVSU Parking Sticker Management and Verification Systemis a web based application designed to simplify the vehicle gate pass request process for campus entry. Users can register their vehicle information and request a digital gate pass, while administrators review and manage all requests through a centralized dashboard.</p>
                        </div>
                    </div>
                    </a>
                    <a href="https://github.com/FoowsIsBack/Phantom_L7" target='_blank'>
                    <div className={styles.calcu}>
                        <img src={phantom} alt="calculator"/>
                        <h2>Phantom DDoS</h2>
                        <div className={styles.description}>
                            <p>Python</p>
                            <p>JavaScript</p> 
                        </div>
                        <div className={styles.description1}>
                            <p>Phantom is a Python based command line application featuring multiple HTTP and HTTPS request methods, proxy support, multithreading, and an intuitive command line interface (CLI). It is designed to generate high volumes of HTTP/HTTPS traffic for performance evaluation, load testing, and research in authorized environments.</p>
                        </div>
                    </div>
                    </a>
                </div>
                <div className={styles.page1}>
                    <a href="https://kirotask.vercel.app/" target='_blank'>
                    <div className={styles.kirotask}>
                        <img src={kirotask} alt="kirotask"/>
                        <h2>KiroTask</h2>
                        <div className={styles.description}>
                            <p>Dart</p>
                            <p>Flutter</p>
                        </div>
                        <div className={styles.description1}>
                            <p>KiroTask is a modern and minimal task management app designed to help users stay organized, focused, and productive. It provides a clean interface with powerful features for managing daily tasks efficiently.</p>
                        </div>
                    </div>
                    </a>
                    <a href="https://github.com/FoowsIsBack/Smart_Entrance_Monitoring" target='_blank'>
                    <div className={styles.entrance}>
                        <img src={sem} alt="entrance"/>
                        <h2>Smart Entrance Monitoring</h2>
                        <div className={styles.description}>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>Php</p>
                            <p>MySQL</p>
                        </div>
                        <div className={styles.description1}>
                            <h4>Under Development</h4>
                            <p>Smart Entrance Monitoring is an RFID based entrance monitoring system that automatically records users time in and time out through ID card scanning. All attendance logs are displayed in a centralized admin panel, providing accurate, secure, and efficient monitoring of entry and exit records.</p>
                        </div>
                    </div>
                    </a>
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
export default Projects