import React from 'react';
import Headernav from './headernav';
import Footer from './footer';
import mem1img from '../image/Team-member1.jpg';
import mem2img from '../image/Team-member2.png';
import mem3img from '../image/Team-member3.png';
import aboutusimg from '../image/aboutus.png';

function about() {
    localStorage.setItem("topid", "");
    localStorage.setItem("mcq", "");
    return (
        <div>
            <Headernav about="active" a="page" />
            <section id="about" className="section-padding about-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="section_title"><br/>
                                <div className="section_subtitle">About Us</div>
                                <h2 className="section_main_title">WE ARE <strong>CREATIVE</strong></h2>
                            </div>
                            <div class="about-item">
                                <p>
                                Students who are looking for Multiple Choice Type Questions(MCQs) for all subjects can practice here.
                                Here we provided the MCQ Questions with the Answers for all subjects to ace up your skills.

                                Here you can Practice that will help you to prepare smart and learn more.
                                It allows students to practice sample papers in simulated test environment in order to build their confidence.
                                </p>
                                <p>
                                    Our aim is to provide all study related material you need for prepareation. We make learning fun and easy.
                                We are connected with reading, learning and helping in very simple way using internent.
                                </p>
                                <br/>
                                <div class="hgt-20"></div>
                                <div class="home-button">
                                    <a href="/home" class="btn-color-background">Back to Home</a>
                                    <br/>
                                    <br/>
                                </div>
                        </div>
                        </div>
                        <div class="col-sm-5 col-sm-offset-2">
                            <div class="about-box">
                                <div class="box-overlay"></div>
                                    <a href="#y" class="videopopup">
                                        <img src={aboutusimg} alt="aboutimg" />
                                        <span class= "sonar-wrapper">
                                            <span class="sonar-emitter">
                                                <i class="fa fa-play"></i>
                                                <div class="sonar-wave"></div>
                                            </span>
                                        </span>
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br/>
            <section  id="hero" className="section-padding team-section">
            <div className="container">
                <div className="row">
                    <div className="">
                        <div className="section_title"><br/>
                        <div className="section_subtitle">Team</div>
                            <h2  className="section_main_title" >OUR CREATIVE <strong>TEAM</strong></h2>
                            <div className="container">
                                <div className="row">
                                {/* our team cards */}
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-team">
                                        <div className="pic">
                                            <img src={mem1img} alt="team-member" className="img-fluid"/>
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Vannamma N A</h4>
                                            <span className="post">Web Developer</span>
                                            <ul className="social">
                                                {/* eslint-disable-next-line */}
                                                <li><a href="https://m.facebook.com/vannamma.Ayyappanavaru.31" className="fab fa-facebook-f" aria-hidden="true"></a></li>
                                                {/* eslint-disable-next-line */}
                                                <li><a href="mailto:vannamma31@gmail.com" className="fa fa-envelope" aria-hidden="true"></a></li>
                                                {/* eslint-disable-next-line */}
                                                <li><a href="https://www.instagram.com/vannamma_148" className="fab fa-instagram" aria-hidden="true"></a></li>
                                            </ul>
                                        </div>
                                    </div>                              
                                </div>

                                <div className="col-md-4 col-sm-6">
                                    <div className="our-team">
                                        <div className="pic">
                                            <img src={mem2img} alt="team-member" className="img-fluid"/>
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Krishna Kale</h4>
                                            <span className="post">Web Designer</span>
                                            <ul className="social">
                                                {/* eslint-disable-next-line */}
                                                <li><a href="#s"  className="fab fa-facebook-f" aria-hidden="true"></a></li>
                                                {/* eslint-disable-next-line */}
                                                <li><a href="mailto:lookkrishna1995@gmail.com" className="fa fa-envelope" aria-hidden="true"></a></li>
                                                {/* eslint-disable-next-line */}
                                                <li><a href="https://www.instagram.com/krishnakale15" className="fab fa-instagram" aria-hidden="true"></a></li>
                                            </ul>
                                        </div>
                                    </div>                              
                                </div>
                                
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-team">
                                        <div className="pic">
                                            <img src={mem3img} alt="team-member" className="img-fluid"/>
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Yadnesh Gaikwad</h4>
                                            <span className="post">Backend Developer</span>
                                            <ul className="social">
                                                {/* eslint-disable-next-line */}
                                                <li><a href="https://www.facebook.com/yadnesh.gaikwad.58"  className="fab fa-facebook-f" aria-hidden="true"></a></li>
                                                {/* eslint-disable-next-line */}
                                                <li><a href="mailto:gaikwadyadnesh@gmail.com" className="fa fa-envelope" aria-hidden="true"></a></li>
                                                {/* eslint-disable-next-line */}
                                                <li><a href="https://www.instagram.com/yadnesh7_21/" className="fab fa-instagram" aria-hidden="true"></a></li>
                                            </ul>
                                        </div>
                                    </div>                              
                                </div>
                                {/* our team cards end*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/><br/><br/>
        </section>
            <Footer />
            <br/>
        </div>
    )
}

export default about