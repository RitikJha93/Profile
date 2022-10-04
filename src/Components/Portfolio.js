import React from 'react'
import img from '../images/profile_pic.jfif'
import hand from '../images/hand-wave.png'
import linkedin from '../images/linkedin.png'

import './Portfolio.css'
const Portfolio = () => {
  return (
    <div className='portfolio'>
        <div className="details">
            <img className='photo' src={img} alt="" />
            <div className="text">
                <h1><img className='wave' src={hand} alt="" />,Hii</h1>
                <h2>Myself Ritik Jha</h2>
                <p>I'm First year undergrad at Indian Institute of Information Technology Ranchi.</p>
                <p>I am a Full Stack Web Developer and very keen about learning new technologies in the field of web.</p>
            </div>
            <div className='social'>
              <a href="https://www.linkedin.com/in/ritik-jha-855363220/" target="_blank"><img src={linkedin} alt=""  /></a>
            </div>
        </div>
      
    </div>
  )
}

export default Portfolio
