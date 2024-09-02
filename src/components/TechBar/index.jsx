import React from 'react'
import './index.css'

function TechBar() {

  const techStackArray = [['https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png', 'HTML5'], ['https://logospng.org/download/css-3/logo-css-3-2048.png', 'CSS3'], ['https://logosdownload.com/logo/javascript-logo-big.png', 'Javascript'], ['http://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png', 'React.jS'], ['https://tse1.mm.bing.net/th?id=OIP.glH-dtdIeiiwdgNRWzAJZAHaHD&pid=Api&P=0&h=220', 'Redux'], ['https://1.bp.blogspot.com/-sqAjIvOtpXI/XYoCmqOyMwI/AAAAAAAAJig/CowR8wgEauEs-RXN2IPmLYkC7NHoHuA3gCLcBGAsYHQ/s1600/node-js-logo.png', 'Node.js'], ['https://youteam.io/blog/wp-content/uploads/2022/04/expressjs_logo.png', 'Express.js'], ['https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg', 'MongoDB'], ['https://cdn2.hubspot.net/hubfs/4008838/mogoose-logo.png', 'Mongoose'], ['https://mythinkpond.com/img/logo/tailwindcss-logo.png', 'Tailwind CSS']]

  const toolsArray = [['https://toppng.com/uploads/preview/git-logo-11609362364wwhuzvtx5h.png', 'Git'], ['https://pngimg.com/uploads/github/github_PNG80.png', 'GitHub'], ['https://i.pinimg.com/originals/24/42/f8/2442f8e6dbd772f0cf1dad8d803399bc.png', 'VS Code'], ['https://logospng.org/download/npm/npm-2048.png', 'npm'], ['https://static-00.iconduck.com/assets.00/postman-icon-1024x1014-w6mbi9fr.png', 'Postman'], ['https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png', 'Netlify'], ['https://seeklogo.com/images/V/vercel-logo-F748E39008-seeklogo.com.png', 'Vercel'], ['https://i.pinimg.com/originals/8b/7c/ac/8b7cac4d85303b79158dd3cf2d9b63c8.png', 'Render']]

  return (
    <div className='tech-container'>
      <div className='top-tech'>
        <h3 className='head1-tech'>Tech Stack</h3>
        <div className='top-div-tech'>
          {techStackArray.map((each, index) => 
          <div className='tech-div-tech' key={index}>
            <img className='img1-tech' src={each[0]} alt='techstack_pic' width='110vw' height='100vh'></img>
            <p className='para1-tech'>{each[1]}</p>
          </div>
          )}
        </div>
      </div>
      <div className='foot-tech'>
        <h3 className='head2-tech'>Tools</h3>
        <div className='foot-div-tech'>
          {toolsArray.map((each, index) => 
          <div className='tool-div-tech' key={index}>
            <img className='img2-tech' src={each[0]} alt='techstack_pic' width='110vw' height='100vh'></img>
            <p className='para2-tech'>{each[1]}</p>
          </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TechBar
