import React, { useState,useEffect } from 'react';
import Headernav from './headernav';
import Footer from './footer';
import axios from 'axios';
import {staurl} from './gvar';
import '../css/home.css';
import '../css/style.css';
var topid = localStorage.getItem("topid");
function Topic() {

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
    const [name, setname] = useState('');
    useEffect(() => {
        axios.get(staurl+"/topictab").then((response)=>{
            var a = response.data,sortdata = [];
            if(topid === "" || topid === undefined){
                setdata(a);
                setname("All");
            }else{
                var tpid = parseInt(topid);
                // eslint-disable-next-line
                a.map(d=>{
                    if(tpid === d.cid){
                        sortdata.push(d);
                    }
                })
                setdata(sortdata);
            }
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
                        <a href="#s" className="btn btn-light"><label onClick={() => goto(p.ids)}>Click Here</label></a>
                    </div>
                </div>
            </>
        )
    }
    function goto(id){
        localStorage.setItem("mcq", id);
        window.location.href = "/mcqpage";
    }

    return (
        <div>
            <Headernav />
            <section className="section-padding search-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="section_title"><br/>     
                            <h4 className="section_main_title">Hello! <strong>How can we help You?</strong></h4>
                                <div className="row row-cols-1 row-cols-mb-3 g-3">
                                {/* <!---searchbar--> */}
                                <form className="d-flex">
                                    <input className="form-control me-2" id="myInput" onChange={mysearch} type="search" placeholder="Search Topic" aria-label="Search"/>
                                    {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                                </form>
                                {/* <!---searchbar end--> */}
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
                            {name} Topics</strong></h2>                                
                            {/* <!---course cards--> */}
                            <div className="contain" id="myTable">
                                {
                                    udata.map(d => {
                                        return(
                                            <Cards key={d.tid} ids={d.tid} name={d.TopicName} />
                                        )
                                    })
                                }
                            </div>
                            {/* <!---course cards end--> */}
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

export default Topic
