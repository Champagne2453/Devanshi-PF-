import React from "react";
import "./contact.css";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../context";
import emailjs from "emailjs-com";
import fb from "../../image/icon/fb.png";
import ig from "../../image/icon/ig.png";
import ln from "../../image/icon/in.png";
import gh from "../../image/icon/gh.png";
import tw from "../../image/icon/twitter.png";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  function reloadfun() {
    window.location.reload();
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4k7t5ze",
        "template_kw4i90c",
        formRef.current,
        "fP5aCYC0VgtB7kla-"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setTimeout(reloadfun, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Lets discuss your project. </h1>
          <h3 className="c-t2">Contact me through :</h3>
          <div className="c-social">
            <a href="/">
              <img className="c-item" src={fb} alt="" />
            </a>
            <a href="https://www.instagram.com/devanshi_sonara">
              <img className="c-item" src={ig} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/devanshi-sonara-b7bb171b9">
              <img className="c-item" src={ln} alt="" />
            </a>
            <a href="https://github.com/Champagne2453">
              <img className="c-item" src={gh} alt="" />
            </a>
            <a href="https://www.twitter.com/SonaraDevanshi">
              <img className="c-item" src={tw} alt="" />
            </a>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}}  type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}}  type="text" placeholder="Subject" name="user_sub" />
            <input style={{backgroundColor: darkMode && "#333"}}  type="text" placeholder="Email" name="user_email" />
            <textarea
            style={{backgroundColor: darkMode && "#333"}} 
              name="message"
              id=""
              cols="30"
              rows="5"
              placeholder="Message"
            ></textarea>

            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
