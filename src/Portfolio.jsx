import { useState } from 'react'
import './assets/Css/Page.css'

function Portfolio(){
  return(
    <div className="container">
      <div className="nav">
        <a href="">
          <h1>Foows</h1>
        </a>
        <div className="nav2">
          <ul>
            <li><a href="/stats">STATS</a></li>
            <li><a href="/skills">SKILLS</a></li>
            <li><a href="/projects">PROJECTS</a></li>
            <li><a href="/certificate">CERTIFICATE</a></li>
            <li><a href="/contact">CONTACT</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Portfolio