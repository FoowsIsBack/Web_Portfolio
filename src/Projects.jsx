import { useEffect, useRef } from "react";
import styles from './assets/Css/Projects.module.css'
import parking from './assets/Projects_image/evsupsm.png'
import calculator from './assets/Projects_image/calculator.png'
import kirotask from './assets/Projects_image/kirotask.png'
import sem from './assets/Projects_image/sem.png'
import phantom from './assets/Projects_image/phantom.png'

function Projects(){

    useEffect(() => {
        document.title = "Kiryll Dave Bangcoyo | Projects"
    })

    const project_parking = () => {
        window.open("https://github.com/FoowsIsBack/EVSU_Vehicle_GatePass_System", "_blank");
    }

    const project_phantom = () => {
        window.open("https://github.com/FoowsIsBack/Phantom_L7", "_blank");
    }

    const project_phantomProof = () => {
        window.open("https://t.me/+c85jONb2GJdmZTZl", "_blank");
    }

    const project_phantomVideo = () => {
        window.open("", "_blank")
    }

    const project_kirotask = () => {
        window.open("https://kirotask.vercel.app/", "_blank");
    }

    const project_smartEntrance = () => {
        window.open("https://github.com/FoowsIsBack/Smart_Entrance_Monitoring", "_blank");
    }

    const project_calculator = () => {
        window.open("https://github.com/FoowsIsBack/Calculator_HTML", "_blank");
    }

    const project_calculatorLive = () => {
        window.open("https://calculator-html-dave.vercel.app/", "_blank");
    }

    const dialogRef = useRef(null);
    const dialogRef1 = useRef(null);
    const dialogRef2 = useRef(null);
    const dialogRef3 = useRef(null);
    const dialogRef4 = useRef(null);

    const openDialog = () => {
        document.body.style.overflow = "hidden";
        dialogRef.current.showModal();
    };
    const openDialog1 = () => {
        document.body.style.overflow = "hidden";
        dialogRef1.current.showModal();
    };
    const openDialog2 = () => {
        document.body.style.overflow = "hidden";
        dialogRef2.current.showModal();
    };
    const openDialog3 = () => {
        document.body.style.overflow = "hidden";
        dialogRef3.current.showModal();
    }
    const openDialog4 = () => {
        document.body.style.overflow = "hidden";
        dialogRef4.current.showModal();
    };

    const closeDialog = () => {
        dialogRef.current.close();
        document.body.style.overflow = "";
    };
    const closeDialog1 = () => {
        dialogRef1.current.close();
        document.body.style.overflow = "";
    };
    const closeDialog2 = () => {
        dialogRef2.current.close();
        document.body.style.overflow = "";
    };
    const closeDialog3 = () => {
        dialogRef3.current.close();
        document.body.style.overflow = "";
    };
    const closeDialog4 = () => {
        dialogRef4.current.close();
        document.body.style.overflow = "";
    };

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
                    {/* <a href="https://github.com/FoowsIsBack/EVSU_Vehicle_GatePass_System" target='_blank'> */}
                    <div className={styles.parking} onClick={openDialog}>
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
                            <hr />
                            <p>EVSU Parking Sticker Management and Verification Systemis a web based application designed to simplify the vehicle gate pass request process for campus entry. Users can register their vehicle information and request a digital gate pass, while administrators review and manage all requests through a centralized dashboard.</p>
                        </div>
                    </div>
                    {/* </a> */}
                    {/* <a href="https://github.com/FoowsIsBack/Phantom_L7" target='_blank'> */}
                    <div className={styles.calcu} onClick={openDialog1}>
                        <img src={phantom} alt="calculator"/>
                        <h2>Phantom DDoS</h2>
                        <div className={styles.description}>
                            <p>Python</p>
                            <p>JavaScript</p> 
                        </div>
                        <div className={styles.description1}>
                            <hr />
                            <p>Phantom is a Python based command line application featuring multiple HTTP and HTTPS request methods, proxy support, multithreading, and an intuitive command line interface (CLI). It is designed to generate high volumes of HTTP/HTTPS traffic for performance evaluation, load testing, and research in authorized environments.</p>
                        </div>
                    </div>
                    {/* </a> */}
                </div>
                <div className={styles.page1}>
                    {/* <a href="https://kirotask.vercel.app/" target='_blank'> */}
                    <div className={styles.kirotask} onClick={openDialog2}>
                        <img src={kirotask} alt="kirotask"/>
                        <h2>KiroTask</h2>
                        <div className={styles.description}>
                            <p>Dart</p>
                            <p>Flutter</p>
                        </div>
                        <div className={styles.description1}>
                            <hr />
                            <p>KiroTask is a modern and minimal task management app designed to help users stay organized, focused, and productive. It provides a clean interface with powerful features for managing daily tasks efficiently.</p>
                        </div>
                    </div>
                    {/* </a> */}
                    {/* <a href="https://github.com/FoowsIsBack/Smart_Entrance_Monitoring" target='_blank'> */}
                    <div className={styles.entrance} onClick={openDialog3}>
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
                            <hr />
                            <p>Smart Entrance Monitoring is an RFID based entrance monitoring system that automatically records users time in and time out through ID card scanning. All attendance logs are displayed in a centralized admin panel, providing accurate, secure, and efficient monitoring of entry and exit records.</p>
                        </div>
                    </div>
                    {/* </a> */}
                </div>
                <div className={styles.page2}>
                    {/* <a href="https://github.com/FoowsIsBack/Calculator_HTML" target='_blank'> */}
                    <div className={styles.web_calcu} onClick={openDialog4}>
                        <img src={calculator} alt="web_calculator"/>
                        <h2>Calculator</h2>
                        <div className={styles.description}>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JacaScript</p>
                        </div>
                        <div className={styles.description1}>
                            <hr />
                            <p>Calculator is a simple and interactive web-based calculator designed to perform basic arithmetic operations. It supports addition, subtraction, multiplication, division, decimal values, and parentheses for more flexible calculations. The project focuses on creating a clean and user-friendly interface while implementing functional button interactions and calculation logic.</p>
                        </div>
                    </div>
                    {/* </a> */}
                </div>
            </div>
            <div className={styles.popup}>
                <dialog ref={dialogRef}>
                    <div className={styles.parking2}>
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
                            <hr />
                            <p>EVSU Parking Sticker Management and Verification Systemis a web based application designed to simplify the vehicle gate pass request process for campus entry. Users can register their vehicle information and request a digital gate pass, while administrators review and manage all requests through a centralized dashboard.</p>
                        </div>
                        <hr />
                    </div>            
                    <div className={styles.closer1}>
                        <button onClick={project_parking}>View Code</button>
                        <button onClick={closeDialog}>Close</button>
                    </div>          
                </dialog>
            </div>
            <div className={styles.popup}>
                <dialog ref={dialogRef1}>
                    <div className={styles.calcu2}>
                        <img src={phantom} alt="calculator"/>
                        <h2>Phantom DDoS</h2>
                        <div className={styles.description}>
                            <p>Python</p>
                            <p>JavaScript</p> 
                        </div>
                        <div className={styles.description1}>
                            <hr />
                            <p>Phantom is a Python based command line application featuring multiple HTTP and HTTPS request methods, proxy support, multithreading, and an intuitive command line interface (CLI). It is designed to generate high volumes of HTTP/HTTPS traffic for performance evaluation, load testing, and research in authorized environments.</p>
                        </div>
                        <hr />
                    </div>
                    <div className={styles.closer2}>
                        <button onClick={project_phantom}>View Code</button>
                        <button onClick={project_phantomVideo}>Demo Video</button>
                        <button className={styles.evidence} onClick={project_phantomProof}>Power Proofs</button>
                        <button onClick={closeDialog1}>Close</button>
                    </div>                     
                </dialog>
            </div>
            <div className={styles.popup}>
                <dialog ref={dialogRef2}>
                    <div className={styles.kirotask2}>
                        <img src={kirotask} alt="kirotask"/>
                        <h2>KiroTask</h2>
                        <div className={styles.description}>
                            <p>Dart</p>
                            <p>Flutter</p>
                        </div>
                        <div className={styles.description1}>
                            <hr />
                            <p>KiroTask is a modern and minimal task management app designed to help users stay organized, focused, and productive. It provides a clean interface with powerful features for managing daily tasks efficiently.</p>
                        </div>
                    </div>
                    <hr />
                    <div className={styles.closer1}>
                        <button onClick={project_kirotask}>Demo Live</button>
                        <button onClick={closeDialog2}>Close</button>
                    </div>   
                </dialog>
            </div>
            <div className={styles.popup}>
                <dialog ref={dialogRef3}>
                    <div className={styles.entrance2}>
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
                            <hr />
                            <p>Smart Entrance Monitoring is an RFID based entrance monitoring system that automatically records users time in and time out through ID card scanning. All attendance logs are displayed in a centralized admin panel, providing accurate, secure, and efficient monitoring of entry and exit records.</p>
                        </div> 
                    </div>  
                    <hr />  
                    <div className={styles.closer1}>
                        <button onClick={project_smartEntrance}>View Code</button>
                        <button onClick={closeDialog3}>Close</button>
                    </div>               
                </dialog>
            </div>
            <div className={styles.popup}>
                <dialog ref={dialogRef4}>
                    <div className={styles.web_calcu2}>
                        <img src={calculator} alt="web_calculator"/>
                        <h2>Calculator</h2>
                        <div className={styles.description}>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                        </div>
                        <div className={styles.description1}>
                            <hr />
                            <p>Calculator is a simple and interactive web-based calculator designed to perform basic arithmetic operations. It supports addition, subtraction, multiplication, division, decimal values, and parentheses for more flexible calculations. The project focuses on creating a clean and user-friendly interface while implementing functional button interactions and calculation logic.</p>
                        </div>  
                    </div>  
                    <hr />  
                    <div className={styles.closer2}>
                        <button onClick={project_calculator}>View Code</button>
                        <button onClick={project_calculatorLive}>Live Demo</button>
                        <button onClick={closeDialog4}>Close</button>
                    </div>               
                </dialog>
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