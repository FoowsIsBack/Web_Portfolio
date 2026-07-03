import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Portfolio from './Portfolio.jsx'
import Contact from './Contact.jsx'
import Project from './Projects.jsx'
import Certificate from './Certificate.jsx'
import Skills from './Skills.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/certificate" element={<Certificate />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
