import { useState } from 'react'
import './assets/Css/Page.css'
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

function Portfolio(){
  return(
    <>
    <div className="start">
      <div className="container">
        <div className="nav">
          <a href="/">
            <h1>Foows</h1>
          </a>
          <div className="nav2">
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
      <div className="main">
        <div className="left">
          <div className="profile">
            <img src={profile} alt="profile_pic" />
            <div className="message">
              <img src={house} alt="message" />
              <p>Wazzupp bro 👋</p>
            </div>
          </div>
          <div className="name">
            <h1>Dave Bangcoyo</h1>
            <h3>• Ormoc City, Leyte</h3>
          </div>
        </div>
        <div className="info">
          <div className="redme">
            <h4>FoowsIsBack<span className='md'>/</span>README.<span className='md'>md</span></h4>
            <div className="music">
              <audio controls autoPlay loop>
                <source src={music} type="audio/mpeg"/>
              </audio>
            </div>
          </div>
          <div className="info2">
            <h3>Full-Stack Developer <span className='spacer'>|</span> Weekend Developer</h3>
            <p>I am passionate about exploring the latest technologies and solving complex problems. With a basic foundation in computer science, programming, and information technology, I am continuously learning and improving my skills in web development and software development.</p>
          </div>
            <div className="github">
                <h3>Contribution Map</h3>
                <a href="https://github.com/FoowsIsBack" target='_blank'>
                  <div className="github_graph">
                    <Contributions />
                  </div>
                </a>
            </div>
        </div>
      </div>
      <div className="techstack">
        <div className="menu">
          <h1>TECH STACK</h1>
          <a href="/skills">
            <p>SEE MORE ➙</p>
          </a>
        </div>
        <div className="example">
          <div className="frontend">
            <div className="title">
              <h3>FRONTEND</h3>
            </div>
            <div className="tech_stack">
              <img src={html} alt="html"/>
              <img src={css} alt="css"/>
              <img src={js} alt="js"/>
              <img src={react} alt="react"/>
              <img src={vue} alt="vue"/>
            </div>
          </div>
          <div className="backend">
            <div className="title">
              <h3>BACKEND</h3>
            </div>
              <div className="tech_stack">
                <img src={python} alt="python"/>
                <img src={php} alt="php"/>
                <img src={fastapi} alt="fastapi"/>
                <img src={java} alt="java"/>
                <img src={SQLite} alt="sqlite"/>
                <img src={mysql} alt="mysql"/>
                <img src={postgresql} alt="postgresql"/>
              </div>
          </div>
          <div className="database">
            <div className="title">
              <h3>DEVELOPER TOOLS</h3>
            </div>
            <div className="tech_stack">
              <img src={git} alt="git"/>
              <img src={github} alt="github"/>
              <img src={postman} alt="postman"/>
              <img src={vite} alt="vite"/>
              <img src={vscode} alt="vscode"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default Portfolio