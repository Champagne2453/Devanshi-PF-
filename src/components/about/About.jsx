import React from 'react'
import card from "../../image/card.jpeg";

import "./about.css";

const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={card} alt=""  className="a-img"/>
            </div>

        </div>
        <div className="a-right">
          <>
          <h1 className='a-title'>About Me</h1>
          <p className="a-sub">
            I am currently pursing my B.E Degree (2022-2024) from <i>GEC Rajkot, Gujarat</i> in <b>Computer Engineering</b>.
          </p>
          <p className="a-desc">
            Things i like are desgining,cooking/eating,coding,learning new skills.I like creating new beautiful websites and apps.I am fast learner and overthinker.If you are looking for hiring me, i am sure i wont disapoint you.
          </p>
          </>
        
          

        </div>
    </div>
  )
}

export default About