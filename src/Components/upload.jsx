import React, {useEffect} from 'react';
import Axios from 'axios';
import {staurl} from './gvar';
import XLSX from "xlsx";
import ReactDOM from 'react-dom';
import '../css/home.css';
import '../css/style.css';
import Headernav from './headernav';
import Footer from './footer';

function Upload() {

    var storearry=[];
    function Upload() {
        //Reference the FileUpload element.
        var fileUpload = document.getElementById("fileUpload");
 
        //Validate whether File is valid Excel file.
        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/;
        if (regex.test(fileUpload.value.toLowerCase())) {
            if (typeof (FileReader) != "undefined") {
                var reader = new FileReader();
 
                //For Browsers other than IE.
                if (reader.readAsBinaryString) {
                    reader.onload = function (e) {
                        ProcessExcel(e.target.result);
                    };
                    reader.readAsBinaryString(fileUpload.files[0]);
                } else {
                    //For IE Browser.
                    reader.onload = function (e) {
                        var data = "";
                        var bytes = new Uint8Array(e.target.result);
                        for (var i = 0; i < bytes.byteLength; i++) {
                            data += String.fromCharCode(bytes[i]);
                        }
                        ProcessExcel(data);
                    };
                    reader.readAsArrayBuffer(fileUpload.files[0]);
                }
            } else {
                alert("This browser does not support HTML5.");
            }
        } else {
            alert("Please upload a valid Excel file.");
        }
    };
    function ProcessExcel(data) {
        //Read the Excel File data.
        var workbook = XLSX.read(data, {
            type: 'binary'
        });
 
        //Fetch the name of First Sheet.
        var firstSheet = workbook.SheetNames[0];
 
        //Read all rows from First Sheet into an JSON array.
        var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);
 
        //Create a HTML Table element.
        var table = document.createElement("table");
        table.border = "1";
 
        //Add the header row.
        var row = table.insertRow(-1);
 
        //Add the header cells.
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "CourseName";
        row.appendChild(headerCell);
 
        headerCell = document.createElement("TH");
        headerCell.innerHTML = "TopicName";
        row.appendChild(headerCell);
 
        headerCell = document.createElement("TH");
        headerCell.innerHTML = "Question";
        row.appendChild(headerCell);
 
        headerCell = document.createElement("TH");
        headerCell.innerHTML = "Op1";
        row.appendChild(headerCell);
 
        headerCell = document.createElement("TH");
        headerCell.innerHTML = "Op2";
        row.appendChild(headerCell);
 
        headerCell = document.createElement("TH");
        headerCell.innerHTML = "Op3";
        row.appendChild(headerCell);
 
        headerCell = document.createElement("TH");
        headerCell.innerHTML = "Op4";
        row.appendChild(headerCell);
 
        headerCell = document.createElement("TH");
        headerCell.innerHTML = "Cop";
        row.appendChild(headerCell);
        //Add the data rows from Excel file.
        for (var i = 0; i < excelRows.length; i++) {
            //Add the data row.
            // eslint-disable-next-line
            var row = table.insertRow(-1);
 
            //Add the data cells.
            var cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].CourseName;
 
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].TopicName;
 
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].Question;
 
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].Op1;
 
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].Op2;
 
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].Op3;
 
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].Op4;
 
            cell = row.insertCell(-1);
            cell.innerHTML = excelRows[i].Cop;
            
            storearry.push({CourseName: excelRows[i].CourseName,TopicName: excelRows[i].TopicName
                ,Question: excelRows[i].Question,Op1: excelRows[i].Op1,Op2: excelRows[i].Op2
                ,Op3: excelRows[i].Op3,Op4: excelRows[i].Op4,Cop: excelRows[i].Cop});
        }
 
        var dvExcel = document.getElementById("dvExcel");
        dvExcel.innerHTML = "";
        dvExcel.appendChild(table);
        
        call(storearry);
    };
    function call(storearry){
        Axios.get(staurl+"/join").then((response)=>{
            var a = response.data;
            var vv = storearry.map(x => Object.assign(x, a.find(y => y.CourseName.toLowerCase() === x.CourseName.toLowerCase() && y.TopicName.toLowerCase() === x.TopicName.toLowerCase())));
            console.log(vv);
            // eslint-disable-next-line
            vv.map(d=>{
                var qus = String(d.Question);
                var op1 = String(d.Op1);
                var op2 = String(d.Op2);
                var op3 = String(d.Op3);
                var op4 = String(d.Op4);
                var cop = String(d.Cop);
                var question = qus.replace("?", "questionmarkwrap");
                var option1 = op1.replace("?", "questionmarkwrap");
                var option2 = op2.replace("?", "questionmarkwrap");
                var option3 = op3.replace("?", "questionmarkwrap");
                var option4 = op4.replace("?", "questionmarkwrap");
                var coption = cop.replace("?", "questionmarkwrap");
                // eslint-disable-next-line 
                Axios.post(staurl+"/mcqtabdata"+"/"+question+"/"+option1+"/"+option2+"/"+option3+"/"+option4+"/"+coption+"/"+d.tid).then((response)=>{
                    console.log("MCQ Records Insert Successfully");
                    window.location.href = "/uploadfunctionaccessyadneshkrishnavannamma";
                })
            })
        })
    }
    function addcourse(){
        var cou = document.getElementById("courseadd").value;
        Axios.get(staurl+"/coursetab").then((response)=>{
            var a = response.data,c=[];
            // eslint-disable-next-line
            a.map(d=>{
                c.push(d.CourseName);
            })
            if(c.includes(cou)){
                console.log("Course Already Exist");
                alert("Course Already Exist");
                document.getElementById("courseadd").value = "";
                document.getElementById("courseadd").focus();
            }else{
                // eslint-disable-next-line 
                Axios.post(staurl+"/incoursetab/"+cou).then((response)=>{
                    console.log("Course Insert Successfully");
                    alert("Course Insert Successfully");
                    window.location.href = "/uploadfunctionaccessyadneshkrishnavannamma";
                })
            } 
        })
    }
    function addtopic(){
        var top = document.getElementById("topicadd").value;
        var cid = parseInt(document.getElementById("discou").value);
        Axios.get(staurl+"/topictab").then((response)=>{
            var a = response.data,c=[];
            // eslint-disable-next-line
            a.map(d=>{
                c.push(d.TopicName);
            })
            if(c.includes(top)){
                console.log("Topic Already Exist");
                alert("Topic Already Exist");
                document.getElementById("topicadd").value = "";
                document.getElementById("topicadd").focus();
            }else{
                // eslint-disable-next-line 
                Axios.post(staurl+"/intopictab/"+top+"/"+cid).then((response)=>{
                    console.log("Topic Insert Successfully");
                    alert("Topic Insert Successfully");
                    window.location.href = "/uploadfunctionaccessyadneshkrishnavannamma";
                })
            }
        })
    }
    useEffect(() => {
        load();
    }, [])
    function load(){
        Axios.get(staurl+"/coursetab").then((response)=>{
            var a = response.data;
            var courseadd = (
                // eslint-disable-next-line
                a.map(detail=>{
                    return(
                        <option value={detail.cid}>{detail.CourseName}</option>
                    )
                })
            );
            ReactDOM.render(courseadd, document.getElementById("discou"));
        })
        Axios.get(staurl+"/topictab").then((response)=>{
            var a = response.data;
            var topicadd = (
                // eslint-disable-next-line
                a.map(detail=>{
                    if(parseInt(detail.cid) === parseInt(document.getElementById("discou").value))
                    return(
                        <option value={detail.tid}>{detail.TopicName}</option>
                    )
                })
            );
            ReactDOM.render(topicadd, document.getElementById("distop"));
        })
    }

    return (
        <div>
            <Headernav />
            <section className="section-padding search-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="section_title"><br/>                       
                                <h4 className="section_main_title">Hello! <strong>Upload File</strong></h4>
                                <div className="row row-cols-1 row-cols-mb-3 g-3">
                                <div className="d-flex">
                                    <input type="file" className="form-control me-2" id="fileUpload" />
                                    <input type="button" className="btn-color-background" id="expatcreate" value="Upload" onClick={Upload} />
                                </div>
                                <div className="d-flex">
                                    <h4>Course&nbsp;</h4>
                                    <select id="discou" className="form-control me-2" onChange={load} />
                                    <h4>Topic&nbsp;</h4>
                                    <select id="distop" className="form-control me-2" />
                                </div>
                                <h2>Add Course</h2>
                                <div className="d-flex">
                                    <input type="text" id="courseadd" className="form-control me-2" />
                                    <button onClick={addcourse} className="btn-color-background">Add Course</button>
                                </div>
                                <h2>Add Topic</h2>
                                <div className="d-flex">
                                    <input type="text" id="topicadd" className="form-control me-2" />
                                    <button onClick={addtopic} className="btn-color-background">Add Topic</button>
                                </div>
                                </div>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <input type="hidden" id="dvExcel" />
            <Footer />
        </div>
    )
}

export default Upload
