import React from 'react'
import"./skill.css";
import web1 from "../../image/web1.png";
import web2 from "../../image/web2.png";
import web3 from "../../image/web3.png";

const Skill = () => {
  return (
    <div className="s">
        <div className="s-top">
            <><center><h1 className='s-title'>Skills</h1>
            
            <table>
                <tr>
                    <td>HTML</td>
                    <td>FLUTTER</td>
                    <td>JAVA</td>
                </tr>
                <tr>
                    <td>CSS</td>
                    <td>DART</td>
                    <td>PYTHON</td>
                </tr>
                <tr>
                    <td>JS</td>
                    <td>FIREBASE</td>
                    <td>C, REACT</td>
                </tr>
                
            </table>
            </center>
        </></div>
        <div className="s-bottom">
            <div className='s-web'>
                <center>
                    <h1 className='s-title2'>Few Projects</h1>
                    <p className='s-sub'>
                        These are UI of few websites, for more visit my github page.Link is down below.
                    </p>
            <div className='s-web'>
                
                    <img src={web1} alt="" className='s-img'/>
                    <img src={web2} alt="" className='s-img' />
                    <img src={web3} alt="" className='s-img'/>
             </div>   
           </center>
            </div>

        </div>
    </div>

  )
}

export default Skill