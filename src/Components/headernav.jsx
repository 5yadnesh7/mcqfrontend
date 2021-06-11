import React from 'react';
import '../css/home.css';
import '../css/style.css';

function headernav(p) {
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                <a className="navbar-brand" href="/home">EXAMMCQ</a>
                
                <div className="col-auto">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className={"nav-link "+p.home} aria-current={p.h} href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={"nav-link "+p.course} aria-current={p.c} href="/course">Courses</a>
                        </li>
                        <li className="nav-item">
                            <a className={"nav-link "+p.about} aria-current={p.a} href="/about">About us</a>
                        </li>
                    </ul>
                </div>
                </div>
                </div>
            </nav>
            {/* Navbar End */}
        </div>
    )
}

export default headernav
