import React, { useState } from "react";
import Course from "./Cources";

const AllCources =()=>{

    const[courses,setCourse]=useState([
        {title:"Java Course", description:"this is demo course"},
        {title:"Python Course", description:"this is demo course"},
        {title:"Django Course", description:"this is demo course"},
        {title:"C++ Course", description:"this is demo course"}
    ])
    return(
        <div className="App">
            <h1  style={{background:'Yellow' ,fontFamily:'Poppins'}} className="AppFont">All Courses</h1>
           <marquee><p style={{fontFamily:'Poppins',color:'#4a54f1',fontSize:30,fontWeight:"bold"}}>List of Courses are as follows</p></marquee>
            {
                courses.length>0? courses.map((item)=> <Course course={item}/>) : "No courses"
            }
        </div>

    )
}

    export default AllCources;