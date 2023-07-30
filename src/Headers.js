import React from "react";
import { Card,CardBody } from "reactstrap";
function Headers(){
    return(
       
    <div className="App"  style={{fontFamily:'Poppins',color:'#4a54f1'}}>
        <Card style={{background:'orange',padding:20}}>
         <CardBody>
        <h2 className="AppFont">Welcome To Cources Application</h2>
        </CardBody>
        </Card>
    </div>
    );
}
export default Headers;