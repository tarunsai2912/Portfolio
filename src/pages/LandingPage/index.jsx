import React, { useState } from 'react'
import { Link } from 'react-scroll';
import mernLogo from '../../assets/logo_mern.png'
import './index.css'
import AboutBar from '../../components/AboutBar';
import TechBar from '../../components/TechBar';
import ProjectsBar from '../../components/ProjectsBar';
import ContactBar from '../../components/ContactBar';
import menuLogo from '../../assets/menu.png'

function LandingPage({width}) {

  const [menu, setMenu] = useState(false)
  const fileDownloadLink = "https://drive.google.com/uc?export=download&id=1E7zHuJhK0lVNVHXzjzFaC2kleBEofqJ8";

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = fileDownloadLink
    link.setAttribute('download', 'filename')
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  return (
    <div className='land-container'>
      <div className='land-top-container'>
        <div className='top-nav-land' style={{visibility: width>600 ? 'visible' : 'hidden'}}>
          <Link className='top-head-land' to="about" smooth={true} duration={500}>About Me</Link>
          <Link className='top-head-land' to="skills" smooth={true} duration={500}>My Skills</Link>
          <Link className='top-head-land' to="works" smooth={true} duration={500}>My Works</Link>
          <Link className='top-head-land' to="contact" smooth={true} duration={500}>Contact Me</Link>
        </div>
        <div className='top-nav1-land' style={{visibility: width<600 ? 'visible' : 'hidden'}}>
          <img className='nav-img1-land' src={menuLogo} alt='menu_pic' width='30vw' height='30vh' onClick={() => setMenu(!menu)}></img>
        </div>
        {menu && <div className='top-nav2-land' style={{visibility: width<600 ? 'visible' : 'hidden'}}>
          <Link className='top-head1-land' to="about" smooth={true} duration={500}>About Me</Link>
          <p className='null-para-land'></p>
          <Link className='top-head1-land' to="skills" smooth={true} duration={500}>My Skills</Link>
          <p className='null-para-land'></p>
          <Link className='top-head1-land' to="works" smooth={true} duration={500}>My Works</Link>
          <p className='null-para-land'></p>
          <Link className='top-head1-land' to="contact" smooth={true} duration={500}>Contact Me</Link>
          <p className='null-para-land'></p>
        </div>}
        <div className='top-para-land'>
          <div className='top-div1-land'>
            <h3 className='top-para1-land'>Hi, I am Tarunsai,<br></br>MERN Developer</h3>
            <h4 className='top-para2-land'>I love building and learning new things.</h4>
            <p className='top-para3-land'>Currently I'm a freelance Full Stack Web developer & having Hands-on knowledge in MERN Stack</p>
          </div>
          <div className='top-div2-land'>
            <img className='top-img1-land' src={mernLogo} alt='logo_pic' width='300vw' height='300vh'></img>
          </div>
        </div>
        <div className='top-btn-land'>
          <p className='btn-para-land' onClick={handleDownload}>Download Resume</p>
        </div>
      </div>
      <div id='about'>
        <AboutBar width={width} />
      </div>
      <div id='skills'>
        <TechBar width={width} />
      </div>
      <div id='works'>
        <ProjectsBar width={width} />
      </div>
      <div id='contact'>
        <ContactBar width={width} />
      </div>
    </div>
  )
}

export default LandingPage
