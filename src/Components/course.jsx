import React, {useState,useEffect} from 'react';
import Headernav from './headernav';
import Footer from './footer';
import '../css/home.css';
import '../css/style.css';
import axios from 'axios';
import {staurl} from './gvar';

function Course() {
    localStorage.setItem("mcq", "");

    function mysearch() {
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("div");
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("h3")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }
    }
    const [udata, setdata] = useState([]);
    useEffect(() => {
        axios.get(staurl+"/coursetab").then((response)=>{
            var a = response.data;
            setdata(a);
        })
    }, [])
    const Cards = (p) => {
        return(
            <>
                <div className="row1">
                    <div className="column1" id="out">
                        <h3>{p.name}</h3>
                    </div>
                    <div className="content">
                        <p className="card-text">Here you can practice MCQ Question And Answer all topic related to Commerce</p>
                        <a href="#t" className="btn btn-light"><label onClick={() => goto(p.ids)}>Click Here</label></a>
                    </div>
                </div>
            </>
        )
    }
    function goto(id){
        localStorage.setItem("topid", id);
        window.location.href = "/topic";
    }
    return (
        <div>
            <Headernav course="active" c="page" />
            <section className="section-padding search-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="section_title"><br/>                       
                                <h4 className="section_main_title">Hello! <strong>How can we help You?</strong></h4>
                                <div className="row row-cols-1 row-cols-mb-3 g-3">
                                <form className="d-flex">
                                    <input className="form-control me-2" id="myInput" onChange={mysearch} type="search" placeholder="Search Course" aria-label="Search"/>
                                </form>
                                </div>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!----Courses Cards Section-----> */}
            <section className="courses">
                <div className="container">
                    <div className="row">
                        <div className="section_title"><br/>
                            <h2 className="section_main_title1" ><strong>
                            ALL Courses</strong></h2>       
                            <div className="contain" id="myTable">
                                {
                                    udata.map(d => {
                                        return(
                                            <Cards key={d.cid} ids={d.cid} name={d.CourseName} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <br/><br/>
            {/* <!----Courses Cards Section end-----> */}
            <Footer />
            <br/>
        </div>
    )
}

export default Course
