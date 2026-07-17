import { useEffect } from 'react'
import styles from './assets/Css/Skills.module.css'
import html from './assets/tech_icons/Frontend/html.png'
import css from './assets/tech_icons/Frontend/css.png'
import js from './assets/tech_icons/Frontend/js.png'
import react from './assets/tech_icons/Frameworks/react.png'
import java from './assets/tech_icons/Backend/java.png'
import php from './assets/tech_icons/Backend/php.png'
import python from './assets/tech_icons/Backend/python.png'
import fastapi from './assets/tech_icons/Frameworks/fastapi.png'
import mysql from './assets/tech_icons/Backend/mysql.png'
import SQLite from './assets/tech_icons/Backend/SQLite.png'
import postgresql from './assets/tech_icons/Backend/postgresql.png'
import vue from './assets/tech_icons/Frontend/vue.png'
import git from './assets/tech_icons/Developer_Tools/git.png'
import github from './assets/tech_icons/Developer_Tools/github.png'
import postman from './assets/tech_icons/Developer_Tools/postman.png'
import vite from './assets/tech_icons/Developer_Tools/vite.png'
import vscode from './assets/tech_icons/Developer_Tools/vscode.png'
import linux from './assets/tech_icons/Operating_Systems/linux.png'
import windows from './assets/tech_icons/Operating_Systems/windows.png'
import canva from './assets/tech_icons/Design/canva.png'
import figma from './assets/tech_icons/Design/figma.png'
import flutter from './assets/tech_icons/Frameworks/flutter.png'
import discord from './assets/tech_icons/Developer_Tools/discord.png'
import chatgpt from './assets/tech_icons/Ai/chatgpt.png'
import claude from './assets/tech_icons/Ai/claudeAI.png'
import copilot from './assets/tech_icons/Ai/copilot.png'
import gemini from './assets/tech_icons/Ai/gemini.png'
import flutterflow from './assets/tech_icons/Design/flutterflow.png'

function Skills(){

    useEffect(() => {
        document.title = "Dave | Skills"
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
                        <img src={vue} alt="vue"/>
                        <img src={vite} alt="vite"/>
                        <img src={react} alt="react"/>
                        <img src={flutter} alt="flutter"/>
                        </div>
                    </div>
                    <div className={styles.backend}>
                        <div className={styles.title}>
                        <h3>BACKEND</h3>
                        </div>
                        <div className={styles.tech_stack}>
                            <img src={python} alt="python"/>
                            <img src={php} alt="php"/>
                            <img src={fastapi} alt="fastapi"/>
                            <img src={java} alt="java"/>
                            <img src={SQLite} alt="sqlite"/>
                            <img src={mysql} alt="mysql"/>
                            <img src={postgresql} alt="postgresql"/>
                        </div>
                    </div>
                    <div className={styles.database}>
                        <div className={styles.title}>
                        <h3>DEVELOPER TOOLS</h3>
                        </div>
                        <div className={styles.tech_stack}>
                        <img src={git} alt="git"/>
                        <img src={github} alt="github"/>
                        <img src={postman} alt="postman"/>
                        <img src={vscode} alt="vscode"/>
                        <img src={discord} alt="discord"/>
                        </div>
                    </div>
                </div>
                <div className={styles.example2}>
                    <div className={styles.operating_system}>
                        <div className={styles.title}>
                            <h3>OPERATING SYSTEM </h3>
                        </div>
                        <div className={styles.tech_stack}>
                            <img src={linux} alt="linux"/>
                            <img src={windows} alt="windows"/>
                        </div>
                    </div>
                    <div className={styles.design}>
                        <div className={styles.title}>
                            <h3>DESIGN TOOLS</h3>
                        </div>
                        <div className={styles.tech_stack}>
                            <img src={canva} alt="canva"/>
                            <img src={figma} alt="figma"/>
                            <img src={flutterflow} alt="flutterflow"/>
                        </div>
                    </div>
                    <div className={styles.framework}>
                        <div className={styles.title}>
                            <h3>AI TOOLS</h3>
                        </div>
                        <div className={styles.tech_stack}>
                            <img src={chatgpt} alt="chatgpt"/>
                            <img src={claude} alt="claude"/>
                            <img src={copilot} alt="copilot"/>
                            <img src={gemini} alt="gemini"/>
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