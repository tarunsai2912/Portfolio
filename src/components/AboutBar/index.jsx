import React from 'react'
import './index.css'
import myPic from '../../assets/my_pic.jpg'

function AboutBar() {

  return (
    <div className='about-container'>
      <div className='about-div1-container'>
        <h3 className='about-head1-container'>About Me</h3>
        <h5 className='about-head2-container'>Hello! I'm Tarunsai Rayapureddi graduated from Anil Neerukonda Institute of Technology and Sciences,<br/><br/>Freelance MERN developer, I bring a strong foundation in full-stack development, encompassing skills in MongoDB, Express.js, React.js, and Node.js. Proficient in HTML and CSS, with a strong problem-solving mindset and a collaborative approach. I'm equipped to build modern web applications from the ground up, with the ability to manage both frontend and backend development. My experience with JavaScript, combined with my understanding of the MERN stack, allows me to create responsive, dynamic, and efficient web applications. While I'm still early in my career, my eagerness to learn, adapt, and apply new technologies makes me a valuable asset to any team, ready to take on challenges and grow my expertise in the field.<br/><br/>- B.Tech in Electrical and Electronics Engineering (Majors)<br/>- B.Tech in Artificial Intelligence (Minors)</h5>
      </div>
      <div className='about-div2-container'>
        <img className='about-img1-container' src={myPic} alt='profile_pic'></img>
      </div>
    </div>
  )
}

export default AboutBar
