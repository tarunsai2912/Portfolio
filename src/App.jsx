import React, { useState, useEffect } from 'react'
import './App.css'
import { Link } from 'react-scroll';
import AboutBar from './components/AboutBar';
import TechBar from './components/TechBar';
import ProjectsBar from './components/ProjectsBar';
import ContactBar from './components/ContactBar';
import menuLogo from './assets/menu.png'
import mernLogo from './assets/logo_mern.png'

function App() {

  const [menu, setMenu] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
  const fileDownloadLink = "https://drive.google.com/uc?export=download&id=1FASXOUq4Nj_1fSNlB9ZQOOrp2tCjVCDC"

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = fileDownloadLink
    link.setAttribute('download', 'filename')
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResizeWindow)
    return () => {
      window.removeEventListener("resize", handleResizeWindow)
    }
  }, [])

  const closeFlag = () => {
    if(menu){
      setMenu(false)
    }
  }

  return (
    <div className='app'>
      <div className='app-top-container'>
        {width > 500 && <div className='top-nav-app'>
          <Link className='top-head-app' to="about" smooth={true} duration={500}>About Me</Link>
          <Link className='top-head-app' to="skills" smooth={true} duration={500}>My Skills</Link>
          <Link className='top-head-app' to="works" smooth={true} duration={500}>My Works</Link>
          <Link className='top-head-app' to="contact" smooth={true} duration={500}>Contact Me</Link>
        </div>}
        {width < 500 && <div className='top-nav1-app'>
          <img className='nav-img1-app' width='30px' height='30px' src={menuLogo} alt='menu_pic' onClick={() => setMenu(!menu)}></img>
        </div>}
        {menu && <div className='top-nav2-app'>
          <Link className='top-head1-app' to="about" smooth={true} duration={500}>About Me</Link>
          <p className='null-para-app'></p>
          <Link className='top-head1-app' to="skills" smooth={true} duration={500}>My Skills</Link>
          <p className='null-para-app'></p>
          <Link className='top-head1-app' to="works" smooth={true} duration={500}>My Works</Link>
          <p className='null-para-app'></p>
          <Link className='top-head1-app' to="contact" smooth={true} duration={500}>Contact Me</Link>
          <p className='null-para-app'></p>
        </div>}
        <div className='top-para-app' onClick={closeFlag}>
          <div className='top-div1-app'>
            <h3 className='top-para1-app'>Hi, I am Tarunsai,<br></br>MERN Developer</h3>
            <h4 className='top-para2-app'>I love building and learning new things.</h4>
            <p className='top-para3-app'>Currently I'm a freelance Full Stack Web developer & having Hands-on knowledge in MERN Stack</p>
          </div>
          <div className='top-div2-app'>
            <img className='top-img1-app' src={mernLogo} alt='logo_pic'></img>
          </div>
        </div>
        <button className='top-btn-app' onClick={handleDownload}>Download Resume</button>
      </div>
      <div id='about' onClick={closeFlag}>
        <AboutBar width={width} />
      </div>
      <div id='skills' onClick={closeFlag}>
        <TechBar width={width} />
      </div>
      <div id='works' onClick={closeFlag}>
        <ProjectsBar width={width} />
      </div>
      <div id='contact' onClick={closeFlag}>
        <ContactBar width={width} />
      </div>
    </div>
  )
}

export default App
