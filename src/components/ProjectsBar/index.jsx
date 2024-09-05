import React from 'react'
import './index.css'
import quizPic from '../../assets/quiz_app_pic.jpg'
import jobPic from '../../assets/jobfinder_app_pic.jpg'
import notesPic from '../../assets/pocket_notes_pic.jpg'
import github_logo from '../../assets/github.png'
import link_logo from '../../assets/link.png'

function ProjectsBar() {
  return (
    <div className='project-container'>
      <h3 className='head1-project'>Featured Works</h3>
      <div className='p1-div-project'>
        <img className='img1-project' src={quizPic} alt='quiz_pic' width='600vw' height='300vh'></img>
        <div className='div1-project'>
          <h3 className='p1-h1-project'>Quizzie MERN Web App</h3>
          <h6 className='p1-h2-project'>- It is a full stack web application on creating and sharing quizzes which also gives a detailed analytics of each quiz.</h6>
          <h6 className='p1-h3-project'>React.js | HTML | CSS | JavaScript | LocalStorage | Express.js | MongoDB | Mongoose | Node.js | Vercel | Github</h6>
          <div className='p1-img-div-project'>
            <img className='p1-img1-project' src={github_logo} alt='github_pic' width='30vw' height='30vh' onClick={() => window.open('https://github.com/tarunsai2912/Quizzie_MERN_App', '_blank')}></img>
            <img className='p1-img2-project' src={link_logo} alt='link_pic' width='30vw' height='30vh' onClick={() => window.open('https://quizzie-mern-frontend.vercel.app/', '_blank')}></img>
          </div>
        </div>
      </div>
      <p className='null-div1-project'></p>
      <div className='p2-div-project'>
        <img className='img2-project' src={jobPic} alt='job_pic' width='600vw' height='300vh'></img>
        <div className='div2-project'>
          <h3 className='p2-h1-project'>Job Posting and Finder MERN Web App</h3>
          <h6 className='p2-h2-project'>- It is a full stack web application on creation of jobs and finding of jobs based on user requirements.</h6>
          <h6 className='p2-h3-project'>React.js | HTML | CSS | JavaScript | LocalStorage | Express.js | MongoDB | Mongoose | Node.js | Vercel | Github | Render</h6>
          <div className='p2-img-div-project'>
            <img className='p2-img1-project' src={github_logo} alt='github_pic' width='30vw' height='30vh' onClick={() => window.open('https://github.com/tarunsai2912/Job_Finder_MERN_App', '_blank')}></img>
            <img className='p2-img2-project' src={link_logo} alt='link_pic' width='30vw' height='30vh' onClick={() => window.open('https://job-posting-frontend-eight.vercel.app/', '_blank')}></img>
          </div>
        </div>
      </div>
      <p className='null-div2-project'></p>
      <div className='p3-div-project'>
        <img className='img3-project' src={notesPic} alt='notes_pic' width='600vw' height='300vh'></img>
        <div className='div3-project'>
          <h3 className='p3-h1-project'>Pocket Notes React Web App</h3>
          <h6 className='p3-h2-project'>- It is a frontend web application on notes taking app where user can take notes on different folders on different topics</h6>
          <h6 className='p3-h3-project'>React.js | HTML | CSS | JavaScript | LocalStorage | Github | Git</h6>
          <div className='p3-img-div-project'>
            <img className='p3-img1-project' src={github_logo} alt='github_pic' width='30vw' height='30vh' onClick={() => window.open('https://github.com/tarunsai2912/Pocket_Notes', '_blank')}></img>
            <img className='p3-img2-project' src={link_logo} alt='link_pic' width='30vw' height='30vh' onClick={() => window.open('https://tarunsai2912.github.io/Pocket_Notes/', '_blank')}></img>
          </div>
        </div>
      </div>
      <p className='null-div3-project'></p>
    </div>
  )
}

export default ProjectsBar
