import React from "react";
import "./intro.css";
import me from "../../image/me2.jpg";

const intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Devanshi Sonara</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
                <div className="i-title-item">Web Developer</div>
                <div className="i-title-item">UI/UX Designer</div>
                <div className="i-title-item">App Developer</div>
                <div className="i-title-item">Creative person</div>
                <div className="i-title-item">Web Developer </div>
            </div>
              
          </div>
          <p className="i-desc">
            Currently learning and growing my skillset.I like to design website and applications.Scroll down if you want to know me
          </p>
          
          
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default intro;
