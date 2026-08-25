import { useEffect, useState } from "react";
import { useRef } from "react";
import styles from './assets/Css/Certificate.module.css'
import hacking from './assets/Certificate/1.jpg'
import webdev from './assets/Certificate/web_dev.jpg'
import linux from './assets/Certificate/basic_linux.jpg'
import web_responsive from './assets/Certificate/responsive_webDesign.png'

function Certificate(){

    useEffect(() => {
        document.title = "Dave | Certificates"
    })

    const dialogRef = useRef(null);
    const dialogRef1 = useRef(null);
    const dialogRef2 = useRef(null);
    const dialogRef3 = useRef(null);

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
                        <div className={styles.hacking} onClick={openDialog}>
                            <h3>Penetration Testing and Ethical Hacking</h3>
                            <p>(June 3, 2018)</p>
                            <img src={hacking} alt="hacking"/>
                        </div>
                        <div className={styles.webdev} onClick={openDialog1}>
                            <h3>Web Development</h3>
                            <p>(July 13, 2026)</p>
                            <img src={webdev} alt="webdev"/>
                        </div>
                        <div className={styles.linux} onClick={openDialog2}>
                            <h3>Introduction to Kali Linux Basics</h3>
                            <p>(July 16, 2026)</p>
                            <img src={linux} alt="linux"/>
                        </div>
                    </div>
                    <div className={styles.menu3} onClick={openDialog3}>
                        <div className={styles.web_responsive}>
                            <h3>Legacy Responsive Web Design V8</h3>
                            <p>(August 23, 2026)</p>
                            <img src={web_responsive} alt="Web_responsive"/>
                        </div>                        
                    </div>
                </div>
            </div>
            <div className={styles.popup}>
                <dialog ref={dialogRef}>
                    <h3>Penetration Testing and Ethical Hacking</h3>
                    <p>(June 3, 2018)</p>
                    <img src={hacking} alt="hacking"/>
                    <div className={styles.closer}>
                        <button onClick={closeDialog}>Close</button>
                    </div>                        
                </dialog>
            </div>
            <div className={styles.popup}>
                <dialog ref={dialogRef1}>
                    <h3>Web Development</h3>
                    <p>(July 13, 2016)</p>
                    <img src={webdev} alt="webdev"/>
                    <div className={styles.closer}>
                        <button onClick={closeDialog1}>Close</button>
                    </div>                        
                </dialog>
            </div>
            <div className={styles.popup}>
                <dialog ref={dialogRef2}>
                    <h3>Introduction to Kali Linux Basics</h3>
                    <p>(July 16, 2026)</p>
                    <img src={linux} alt="linux"/>
                    <div className={styles.closer}>
                        <button className={styles} onClick={closeDialog2}>Close</button>
                    </div>                        
                </dialog>
            </div>
            <div className={styles.popup}>
                <dialog ref={dialogRef3}>
                    <h3>Legacy Responsive Web Design V8</h3>
                    <p>(August 23, 2026)</p>
                    <img src={web_responsive} alt="Web_responsive"/>
                    <div className={styles.closer}>
                        <button className={styles} onClick={closeDialog3}>Close</button>
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
export default Certificate