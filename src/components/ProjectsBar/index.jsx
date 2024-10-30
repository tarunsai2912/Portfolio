import React from 'react'
import './index.css'
import storyPic from '../../assets/webstoryImg.jpg'
import taskPic from '../../assets/taskImg.jpg'
import quizPic from '../../assets/quizImg.jpg'
import jobPic from '../../assets/jobfinderImg.jpg'
import github_logo from '../../assets/github.png'
import link_logo from '../../assets/link.png'

function ProjectsBar() {
  return (
    <div className='project-container'>
      <h3 className='head1-project'>Featured Works</h3>
      <div className='p1-div-project'>
        <img className='img1-project' src={taskPic} alt='notes_pic'></img>
        <div className='div1-project'>
          <h3 className='p1-h1-project'>Task Manager MERN Web Application</h3>
          <h6 className='p1-h2-project'>- It is a full stack web application on creating, assigning and sharing tasks among different users and also gives analytics of every task.</h6>
          <h6 className='p1-h3-project'>React.js | HTML | CSS | JavaScript | LocalStorage | Express.js | MongoDB | Mongoose | Node.js | Vercel | Github | npm</h6>
          <div className='p1-img-div-project'>
            <img className='p1-img1-project' src={github_logo} alt='github_pic' onClick={() => window.open('https://github.com/tarunsai2912/tarunsairayapureddi-gmail.com_cuvette_final_evaluation_feb', '_blank')}></img>
            <img className='p1-img2-project' src={link_logo} alt='link_pic' onClick={() => window.open('https://pro-manage-cuvette-webapp.vercel.app/', '_blank')}></img>
          </div>
        </div>
      </div>
      <p className='null-div1-project'></p>
      <div className='p2-div-project'>
        <img className='img2-project' src={storyPic} alt='notes_pic'></img>
        <div className='div2-project'>
          <h3 className='p2-h1-project'>Web Story MERN Web Application</h3>
          <h6 className='p2-h2-project'>- It is a full stack web application on creating, assigning and sharing tasks among different users and also gives
          analytics of every task.</h6>
          <h6 className='p2-h3-project'>React.js | HTML | CSS | JavaScript | LocalStorage | Express.js | MongoDB | Mongoose | Node.js | Vercel | Github | npm</h6>
          <div className='p2-img-div-project'>
            <img className='p2-img1-project' src={github_logo} alt='github_pic' onClick={() => window.open('https://github.com/tarunsai2912/WebStory_MERN_App', '_blank')}></img>
            <img className='p2-img2-project' src={link_logo} alt='link_pic' onClick={() => window.open('https://web-story-mern-frontend.vercel.app/', '_blank')}></img>
          </div>
        </div>
      </div>
      <p className='null-div2-project'></p>
      <div className='p3-div-project'>
        <img className='img3-project' src={quizPic} alt='quiz_pic'></img>
        <div className='div3-project'>
          <h3 className='p3-h1-project'>Quizzie MERN Web App</h3>
          <h6 className='p3-h2-project'>- It is a full stack web application on creating and sharing quizzes which also gives a detailed analytics of each quiz.</h6>
          <h6 className='p3-h3-project'>React.js | HTML | CSS | JavaScript | LocalStorage | Express.js | MongoDB | Mongoose | Node.js | Vercel | Github</h6>
          <div className='p3-img-div-project'>
            <img className='p3-img1-project' src={github_logo} alt='github_pic' onClick={() => window.open('https://github.com/tarunsai2912/Quizzie_MERN_App', '_blank')}></img>
            <img className='p3-img2-project' src={link_logo} alt='link_pic' onClick={() => window.open('https://quizzie-mern-frontend.vercel.app/', '_blank')}></img>
          </div>
        </div>
      </div>
      <p className='null-div3-project'></p>
      <div className='p4-div-project'>
        <img className='img4-project' src={jobPic} alt='job_pic'></img>
        <div className='div4-project'>
          <h3 className='p4-h1-project'>Job Posting and Finder MERN Web App</h3>
          <h6 className='p4-h2-project'>- It is a full stack web application on creation of jobs and finding of jobs based on user requirements.</h6>
          <h6 className='p4-h3-project'>React.js | HTML | CSS | JavaScript | LocalStorage | Express.js | MongoDB | Mongoose | Node.js | Vercel | Github | Render</h6>
          <div className='p4-img-div-project'>
            <img className='p4-img1-project' src={github_logo} alt='github_pic' onClick={() => window.open('https://github.com/tarunsai2912/Job_Finder_MERN_App', '_blank')}></img>
            <img className='p4-img2-project' src={link_logo} alt='link_pic' onClick={() => window.open('https://job-posting-frontend-eight.vercel.app/', '_blank')}></img>
          </div>
        </div>
      </div>
      <p className='null-div4-project'></p>
    </div>
  )
}

export default ProjectsBar
