import { useState } from 'react'
import './assets/Css/Page.css'
import profile from './assets/image/profile_bgc.jpg'
import house from './assets/image/house.png'
import profile2 from './assets/image/profile_whiteBG.png'
import music from './assets/Music/music.mp3'
import Contributions from "./components/Contributions";
import { Link } from 'react-router-dom'
import { GitHubCalendar } from "react-github-calendar"; 

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
    </div>
    </>
  )
}
export default Portfolio