import React, { useState,useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import Headernav from './headernav';
import Footer from './footer';
import axios from 'axios';
import {staurl} from './gvar';
import '../css/home.css';
import '../css/style.css';
var mcqtopid = localStorage.getItem("mcq");

function Mcqpage() {
    
    const [cdata, setcData] = useState([]);
    var ctcols= {
        columns: [
            {
                label: 'Questions',
                field: 'Question',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Option 1',
                field: 'Op1',
                sort: 'asc',
                width: 200,
            },
            {
                label: 'Option 2',
                field: 'Op2',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Option 3',
                field: 'Op3',
                sort: 'asc',
                width: 400,
            },
            {
                label: 'Option 4',
                field: 'Op4',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Correct Options',
                field: 'Cop',
                sort: 'asc',
                width: 200,
            }
        ]
    }
    var ctro={
        rows: cdata
    }
    var cdatass = {columns: ctcols.columns, rows: ctro.rows};
    useEffect(() => {
        if(mcqtopid === "" || mcqtopid === undefined){
            window.location.href = "/home";
        }else{
            axios.get(staurl+"/mcqtab").then((response)=>{
                var a = response.data,sortdata = [];
                // eslint-disable-next-line
                a.map(d=>{
                    if(parseInt(mcqtopid) === d.topid){
                        sortdata.push(d);
                    }
                })
                setcData(sortdata);
            })
        }
    },[]);

    return (
        <div>
            <Headernav />
            <div id="outmdb">
                <MDBDataTable
                    hover 
                    striped
                    bordered
                    noBottomColumns
                    entriesOptions={[5, 10, 15, 20]} 
                    entries={5} 
                    pagesAmount={5} 
                    data={cdatass}
                    paging={true}
                    id = "mdbtab"
                />
            </div><br/><br/>
            <Footer />
            <br/>
        </div>
    )
}

export default Mcqpage
