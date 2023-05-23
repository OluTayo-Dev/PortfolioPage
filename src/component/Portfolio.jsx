import React from 'react'
import Prof from '../asset/Prof.png';
import Icon from '../asset/Icon.png';
import Nogb1 from '../asset/Nobg1.png';
import Nogb2M from '../asset/Nobg2M.png';
import NogbN from '../asset/NobgN.png';
import fb from '../asset/fb.png';
import tweet from '../asset/tweet.png';
import insta from '../asset/insta.png';
import contact from '../asset/contact.png';
import Email from '../asset/Email.png';
import AWS from '../asset/AWS.png';
import Decagon from '../asset/Decagon.png';
import github from '../asset/github.png';
import SUA from '../asset/SUA.png';
import replit from '../asset/replit.png';
import alx from '../asset/alx.png';
import HackerRankBG from '../asset/HackerRankBG.png';


export default function Portfolio() {
  return (
    <div>
        <section className="header">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">My Service</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Community Wall</a></li>
            </ul>
        </section>
        <main className="data">
            <div className="content">
                <h1>I'm <b id="bold">Olusola Temitayo </b>, I am a Web developer, <br />
                 writer, Pianist and Sport Enthusiast</h1>
                <p>A MERN stack web developer with expertise in MongoDB, Express JS, React and Node JS</p>
            </div>
            <div className="prof">
                <img src={Prof} alt="" className="image" />
            </div>
            
        </main>
        <main>
                <span>
                    <button id="btn">Read the blog</button>
                </span>
                <span>
                    <a id="href" href="More about Me">More about Me...</a>
                </span>
            </main>
        <div>
            <span>
                <img src={NogbN} alt=""id="logo" />
                <img src={Nogb1} alt=""id="logo" />
            </span>
            <span>
                <img src={Nogb2M} alt="" id="logo" />
                <img src={Icon} alt=""id="logo" />
            </span>
        </div>
        <div className="background">
            <main className="About">
                <span className="png">
                    <img src={Prof} alt="" id="img" />
                </span>
                <span className="text">
                      <h3>About Me</h3>
                      <p id="test">I am Olaseinde Olusola Temitayo, A Freelancer, Web Developer, Software Engineer <br />
                         Writer, Musicologist, Instructor and Sport Analyst. I'm passionate about building innovative <br />
                         creative codebased web and mobile application using stack such as HTML, CSS, Javascript, <br />
                         Jquery, Github, React, React Native, Express JS, Mongo DB and Node JS. I'm always eager to learn <br />
                         new things and working with group of developers around me and the global technological space. I'm <br />
                         an analytic thinker and I possess a possibility mindset. As a result of this, solving real life problem is <br />
                         my ultimate priority.
                      </p>
                      <main>
                         <img src={NogbN} alt=""id="logo" />
                         <img src={Nogb1} alt=""id="logo" />
                         <img src={Nogb2M} alt="" id="logo" />
                         <img src={Icon} alt="" id="logo" />
                     </main>
                </span>
            </main>
        
          <div className="Service">
            <section className="Half">
                <h3>My Service</h3>
                <p id="test">MERN stack is a collection of technologies that enables <br />
                 faster development.It is used by developers worldwide. The main  <br />
                 purpose od using MERN stack is to developapp using Javascript only. <br />
                 This is because the four technologies that make up the technology <br />
                 stack are all JS-based.</p>
            </section>
            <span class="Halve">
                <h3>Contact</h3>
             <div className="CLOG">
                <span id="cont">
                    <img src={contact} alt="" id="contact" />
                    <span>
                     <h6>+234-7064-219-422</h6>
                    </span>
                </span>
                <span id="mail">
                    <img src={Email} alt="" id="email" /> 
                    <span>
                     <em>olusolatemitayo656@gmail.com</em>
                    </span>
                </span>
             </div>

            </span>
        </div>
        <div className="main">
            <h1 id="tag">Community Wall</h1>
            <section id="community">
                <span>
                    <img src={AWS} alt="" id="logo" />
                    <img src={github} alt="" id="logo"/>
                    <img src={replit} alt="" id="logo" />
                </span>
                <span>
                    <img src={SUA} alt="" id="logo" />
                    <img src={Decagon} alt="" id="logo" />
                    <img src={alx} alt="" id="logo" />
                    <img src={HackerRankBG} alt="" id="logo" />
                </span>
            </section>
        </div>
     </div>
        <section className="footer">
         <span className="foot">
            <div id="stack">
                <h3><bold>GENERAL</bold></h3>
                <option>Home</option>
                <option>About</option>
                <option>Products</option>
                <option>Blog</option>
            </div>
            <div id="stack">
            <h3><bold>STACKS</bold></h3>
                <option>Mongo DB</option>
                <option>Express</option>
                <option>Node Js</option>
                <option>React</option>
            </div>
            <div id="stack">
            <h3><bold>EXTRA</bold></h3>
                <option>Changelog</option>
                <option>Meet up</option>
                <option>Newsletter</option>
                <option>Resume</option>
                <option>Snippets</option>
            </div>
         </span>
         <main className="slect">
                <span>
                    <input type="text"  id="in" placeholder="Enter your input here" />
                    <button id="click">Submit</button>
                </span>
            <span className="favicon">
               <img src={fb} alt=""   id="fav"/>
               <img src={tweet} alt="" id="fav" />
               <img src={insta} alt="" id="fav" />
            </span>
        </main>
        </section>
        
    </div>
  )
}
