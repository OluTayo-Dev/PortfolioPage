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
import cart from '../asset/cart.png';
import carousel from '../asset/carousel.png';
import accordion from '../asset/accordion.png';
import quote from '../asset/quote.png';
import Phone from '../asset/Phone.png';


export default function Portfolio() {
  return (
    <div>
        <section className="header">
            <p id="nav">
                <a href="#Home">Home</a>
                <a href="#About">About</a>
                <a href="#Project">Projects</a>
                <a href="#Community">Community</a>
                <a href="#Contact">Contact</a>
            </p>
        </section>
        <div className="bgc">
        <main className="data">
            <div className="content">
                <h1>I'm <b id="bold">Olusola Temitayo </b>, I am a Software developer, 
                 writer, and Sport Analyst</h1>
                <p>A MERN stack web developer with expertise in MongoDB, Express JS, React and Node JS</p>
            </div>
            <div className="prof">
                <img src={Prof} alt="" className="image" />
            </div>
            
        </main>
          <main className="first-btn">
                <span>
                    <button id="btn">Read the blog</button>
                </span>
                <span>
                    <a id="href" href="More about Me">More about Me...</a>
                </span>
            </main>
        </div>
        <div className="background">
            <main className="About">
                <span className="png">
                    <img src={Prof} alt="" id="img" />
                </span>
                <span className="text">
                     <p id="About">About</p>
                      <p id="test">My name is Olaseinde Olusola Temitayo, A Freelancer, Web Developer, Software Engineer <br />
                         Writer, Musicologist, Instructor and Sport Analyst. I'm passionate about building innovative <br />
                         creative codebased web and mobile application using stack such as HTML, CSS, Javascript, <br />
                         Jquery, Github, React, React Native, Express JS, Mongo DB and Node JS. I'm always eager to learn <br />
                         new things and working with group of developers around me and the global technological space. I'm <br />
                         an analytic thinker and I possess a possibility mindset. As a result of this, solving real life problem is <br />
                         my ultimate priority.
                      </p>
                        <span className="first-logo">
                         <img src={NogbN} alt=""id="logo" />
                         <img src={Nogb1} alt=""id="logo" />
                         <img src={Nogb2M} alt="" id="logo" />
                         <img src={Icon} alt="" id="logo" />
                        </span>
                </span>
            </main>  
            <section className="myproj">
                <h3 id="Project">Projects</h3>
                <span className="link">
                
                    <span className="mini">
                    <img src={cart} alt="" id="proj" />
                   </span>
                   <span>
                     <img src={carousel} alt="" id="proj"/>
                     
                  </span>
                  <span>
                  <img src={accordion} alt="" id="proj"/>
                  </span>
                  <span>
                  <img src={quote} alt="" id="proj"/>
                  </span>
                  <span>
                    <img src={Phone} alt="" id="proj" />
            
                  </span>
                </span>
            </section>
            <div>
                <h3 id="Community">Community</h3>
                <span className="container">
                    <img src={AWS} alt="" id="logo" />
                    <img src={alx} alt="" id="logo" />
                    <img src={SUA} alt="" id="logo" />
                    <img src={Decagon} alt="" id="logo"/>
                    <img src={github} alt="" id="logo"/>
                    <img src={HackerRankBG} alt="" id="logo"/>
                    <img src={replit} alt="" id="logo"/>
                </span>
            </div>
        </div>
        <section className="footer">
            <span className="group-foot">
               <div className="foot">
                  <span>
                      <p>GENERAL</p>
                      <li>Home</li>
                      <li>About</li>
                      <li>Projects</li>
                      <li>Community</li>
                      <li>Contact</li>
                  </span>
             </div>
             <div className="foot">
                  <span>
                      <p>STACKS</p>
                      <li>MongoDB</li>
                      <li>Express</li>
                      <li>React</li>
                      <li>Node js</li>
                      <li>Javascript</li>
                  </span>
             </div>
             <div className="foot">
                  <span>
                      <p>EXTRA</p>
                      <li>Changelog</li>
                      <li>Meet up</li>
                      <li>Newsletter</li>
                      <li>Resume</li>
                      <li>Snippets</li>
                  </span>
             </div>
            </span> 
            <div className="bottom">
                <span className="info">
                    <input type="text-submit" id="in" placeholder="Enter message here" />
                    <input type="submit"  id="click" placeholder='' />
                </span>
                <span className="Icon">
                    <img src={fb} alt="" id="Icon" />
                    <img src={insta} alt="" id="Icon" />
                    <img src={tweet} alt="" id="Icon" />
                </span>
                <span className="contact-info">
                    <p id="Contact">+2347064219422</p>
                    <p>olusolatemitayo656@gmail.com</p>
                </span>
            </div> 
            <p id="copy">&copy;copyright 2023</p>  
                
        </section>
    </div>
  )
}
