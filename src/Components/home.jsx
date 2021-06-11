import React from 'react';
import '../css/home.css';
import '../css/style.css';
import aboutimg from '../image/About.png';
// import aboutustransimg from '../image/aboutus Transparent.png';
// import aboutusimg from '../image/aboutus.png';
import bcomimg from '../image/bcom.png';
import bscitimg from '../image/bsc it.png';
import courseimg from '../image/Course.png';
import csimg from '../image/cs.png';
// import mem1img from '../image/Team-member1.jpg';
// import mem2img from '../image/Team-member2.png';
// import mem3img from '../image/Team-member3.jpg';
import topicimg from '../image/Topics.png';

import Headernav from './headernav';
import Footer from './footer';

function home() {
    localStorage.setItem("topid", "");
    localStorage.setItem("mcq", "");
    return (
        <div>
            <Headernav home="active" h="page" />
            {/* Carousel */}
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="100">
                        <img src={bscitimg} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                    <div className="carousel-item" data-bs-interval="200">
                        <img src={csimg} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                    <div className="carousel-item">
                        <img src={bcomimg} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <br/>
            <br/>
            {/* Carousel End */}
            {/* Features */}
            <div className="container">
                <h2 className="hit-the-floor">Hello, Welcome to Exam.com</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="thumbnail">
                            <a href="/course" className="videopopup">
                                <img src={courseimg} alt="Lights" style={{width:"82%"}}/>
                                <strong><h4>Course</h4></strong>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="thumbnail">
                            <a href="/topic" className="videopopup">
                                <img src={topicimg} alt="Nature" style={{width:"87%"}}/>
                                <strong><h4>Topics</h4></strong>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="thumbnail">
                            <a href="/about" className="videopopup">
                                <img src={aboutimg} alt="Fjords" style={{width:"68%"}}/>
                                <strong><h4>About</h4></strong>
                            </a>
                        </div>
                    </div>
                    <div className="container">
                        <br/>
                        <h4>Here You Can Prepare/Practice for Multiple Choice Questions(MCQ)</h4>
                        <p>The number of courses available here depending on your subject, you can choose subject and you might
                        have to answer questions based on provided material like Technology, Science, Commerce etc.
                        Make sure that you understand the subject/topic before you answer any connected questions.</p>
                    </div>
                </div>
            </div>
            <br/><br/>
            <Footer />
        </div>
    )
}

export default home
