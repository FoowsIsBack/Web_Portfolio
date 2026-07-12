import { useState } from 'react'
import styles from './assets/Css/Page.module.css';
import profile from './assets/image/profile_bgc.jpg'
import house from './assets/image/house.png'
import profile2 from './assets/image/profile_whiteBG.png'
import music from './assets/Music/music.mp3'
import Contributions from "./components/Contributions";
import { Link } from 'react-router-dom'
import { GitHubCalendar } from "react-github-calendar"; 
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
import parking from './assets/Projects_image/evsupsm.png'
import calculator from './assets/Projects_image/calculator.png'
import kirotask from './assets/Projects_image/kirotask.png'
import learning from './assets/Projects_image/hub.png'
import sas from './assets/Projects_image/sas.png'
import sem from './assets/Projects_image/sem.png'
import sms from './assets/Projects_image/sms.png'

function Portfolio(){
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
              <li><a href="/certificate">CERTIFICATE</a></li>
              <li><a href="/experience">EXPERIENCE</a></li>
              <li><a href="/contact">CONTACT</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.profile}>
            <img src={profile} alt="profile_pic" />
            <div className={styles.message}>
              <img src={house} alt="message" />
              <p>Wazzupp bro 👋</p>
            </div>
          </div>
          <div className={styles.name}>
            <h1>Dave Bangcoyo</h1>
            <h3>• Ormoc City, Leyte</h3>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.redme}>
            <h4>FoowsIsBack<span className={styles.md}>/</span>README.<span className={styles.md}>md</span></h4>
            <div className={styles.music}>
              <audio controls autoPlay loop>
                <source src={music} type="audio/mpeg"/>
              </audio>
            </div>
          </div>
          <div className={styles.info2}>
            <h3>Full-Stack Developer <span className={styles.spacer}>|</span> Weekend Developer</h3>
            <p>I am passionate about exploring the latest technologies and solving complex problems. With a basic foundation in computer science, programming, and information technology, I am continuously learning and improving my skills in web development and software development.</p>
          </div>
            <div className={styles.github}>
                <h3>GitHub Contributions</h3>
                <a href="https://github.com/FoowsIsBack" target='_blank'>
                  <div className="github_graph">
                    <Contributions />
                  </div>
                </a>
            </div>
        </div>
      </div>
      <div className={styles.techstack}>
        <div className={styles.menu}>
          <h1>TECH STACK</h1>
          <a href="/skills">
            <p>SEE MORE ➙</p>
          </a>
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
              <img src={react} alt="react"/>
              <img src={vue} alt="vue"/>
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
              <img src={vite} alt="vite"/>
              <img src={vscode} alt="vscode"/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.projects}>
        <div className={styles.menu}>
          <h1>PROJECTS</h1>
          <a href="/projects">
            <p>SEE MORE ➙</p>
          </a>
        </div>
        <div className={styles.example1}>
          <div className={styles.page}>
            <a href="https://github.com/FoowsIsBack/EVSU_Vehicle_GatePass_System" target='_blank'>
              <div className={styles.parking}>
                <img src={parking} alt="parking"/>
                <div className={styles.description}>
                  <p>FastAPI</p>
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>JavaScript</p>
                  <p>MySQL</p>
                </div>
                <div className={styles.description1}>
                  <h4>Under Development</h4>
                  <p>EVSU Vehicle GatePass is a web-based application designed to simplify the vehicle gate pass request process for campus entry. Users can register their vehicle information and request a digital gate pass, while administrators review and manage all requests through a centralized dashboard.</p>
                </div>
              </div>
            </a>
            <a href="https://github.com/FoowsIsBack/Student_Attendance_System" target='_blank'>
              <div className={styles.calcu}>
                <img src={sas} alt="calculator"/>
                <div className={styles.description}>
                  <p>Python</p>
                  <p>SQLite</p>
                </div>
                <div className={styles.description1}>
                  <h4>Under Development</h4>
                  <p>Student Attendance System Dashboard is designed to help users manage and monitor student attendance records efficiently. It provides an organized interface for adding, updating, deleting, and viewing attendance information.</p>
                </div>
              </div>
            </a>
          </div>
          <div className={styles.page1}>
            <a href="https://kirotask.vercel.app/" target='_blank'>
              <div className={styles.kirotask}>
                <img src={kirotask} alt="kirotask"/>
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
                <div className={styles.description}>
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>JavaScript</p>
                  <p>Php</p>
                  <p>MySQL</p>
                </div>
                <div className={styles.description1}>
                  <h4>Under Development</h4>
                  <p>Smart Entrance Monitoring is an RFID-based entrance monitoring system that automatically records users' time-in and time-out through ID card scanning. All attendance logs are displayed in a centralized admin panel, providing accurate, secure, and efficient monitoring of entry and exit records.</p>
                </div>
              </div>
            </a>
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
export default Portfolio