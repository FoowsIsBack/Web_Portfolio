import { useEffect } from 'react'
import styles from './assets/Css/Skills.module.css'
import html from './assets/tech_icons/Frontend/html.png'
import css from './assets/tech_icons/Frontend/css.png'
import js from './assets/tech_icons/Frontend/js.png'
import php from './assets/tech_icons/Backend/php.png'
import python from './assets/tech_icons/Backend/python.png'
import fastapi from './assets/tech_icons/Frameworks/fastapi.png'
import mysql from './assets/tech_icons/Backend/mysql.png'
import postgresql from './assets/tech_icons/Backend/postgresql.png'
import git from './assets/tech_icons/Developer_Tools/git.png'
import github from './assets/tech_icons/Developer_Tools/github.png'
import postman from './assets/tech_icons/Developer_Tools/postman.png'
import vscode from './assets/tech_icons/Developer_Tools/vscode.png'
import java from './assets/tech_icons/Backend/java.png'
import react1 from './assets/tech_icons/Frameworks/react.png'
import laravel from './assets/tech_icons/Backend/laravel.png'
import ts from './assets/tech_icons/Frontend/ts.png'

function Skills(){

    useEffect(() => {
        document.title = "Kiryll Dave Bangcoyo | Skills"
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
            <div className={styles.techstack}>
                <div className={styles.menu}>
                <h1>TECH STACK</h1>
                </div>
                <div className={styles.example}>
                    <div className={styles.frontend}>
                        <div className={styles.title}>
                        <h3>FRONTEND</h3>
                        </div>
                        <div className={styles.tech_stack}>
                        <img src={html} alt="html"/>
                        <img src={css} alt="css"/>
                        <img src={js} alt="js"/>
                        <img src={react1} alt="react"/>
                        <img src={ts} alt="typescript"/>
                        </div>
                    </div>
                    <div className={styles.backend}>
                        <div className={styles.title}>
                        <h3>BACKEND</h3>
                        </div>
                        <div className={styles.tech_stack}>
                            <img src={python} alt="python"/>
                            <img src={java} alt="java"/>
                            <img src={php} alt="php"/>
                            <img src={laravel} alt="laravel"/>
                            <img src={fastapi} alt="fastapi"/>
                            <img src={mysql} alt="mysql"/>
                            <img src={postgresql} alt="postgresql"/>
                        </div>
                    </div>
                    <div className={styles.database}>
                        <div className={styles.title}>
                        <h3>TOOLS</h3>
                        </div>
                        <div className={styles.tech_stack}>
                        <img src={git} alt="git"/>
                        <img src={github} alt="github"/>
                        <img src={postman} alt="postman"/>
                        <img src={vscode} alt="vscode"/>
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
export default Skills