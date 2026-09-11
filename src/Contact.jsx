import { useEffect } from "react";
import styles from './assets/Css/Contact.module.css'

function Contact(){

    useEffect(() => {
        document.title = "Kiryll Dave Bangcoyo | Contact"
    })

    const facebookAcc = () => {
        window.open("https://www.facebook.com/jhinbangcoyo", "_blank");
    };

    const handleEmail = () => {
        window.location.href = "mailto:dbangcoyo11@email.com";
    };

    const instaAcc = () => {
        window.open("https://www.instagram.com/kryll_dave/", "_blank");
    };

    const scheduleMeet = () => {
        window.open("https://calendly.com/davebangcoyo/30min", "_blank");
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
                    <h1>GET IN TOUCH</h1>
                    <p>Let's build something together</p>
                </div>
                <div className={styles.contact_box}>
                    <div className={styles.redme}>
                        <h4>Contact<span className={styles.md}>/</span>README.<span className={styles.md}>md</span></h4>
                    </div>
                    <div className={styles.description}>
                        <div className={styles.contact_info}>
                            <p>Whether you have a project idea, want to collaborate, or just want to talk about tech and coding, I'm always open to connecting. Pick your preferred channel below and let's start a conversation.</p>
                        </div>
                        <div className={styles.contact_button}>
                            <button onClick={handleEmail}><i className="fa-solid fa-envelope"></i>EMAIL</button>
                            <button onClick={facebookAcc}><i className="fa-brands fa-facebook"></i>FACEBOOK</button>
                            <button onClick={instaAcc}><i className="fa-brands fa-instagram"></i>INSTAGRAM</button>
                            <button onClick={scheduleMeet}><i className="fa-solid fa-calendar-check"></i>CALENDLY</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Contact