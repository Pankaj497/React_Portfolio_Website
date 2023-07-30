import React, { Fragment } from "react";
import {Card, Button, CardBody, Form, FormGroup,Input, Container } from "reactstrap";

const AddCourse = () => {
    return (
        <Fragment>
            <Card>
            <CardBody>
            <h1 className="AppFont App" style={{fontFamily:'Poppins'}}>Fill Course Details</h1>
            <Form className="AppFont">
                <FormGroup>
                    <label for="userId">Course Id </label>
                    <Input 
                    type="text" 
                    name="userId" 
                    placeholder="Enter Here" 
                    id="userId" />
                </FormGroup>
                <FormGroup>
                    <label for="courseTitle">Course  Title </label>
                    <Input 
                    type="text" 
                    name="courseTitle" 
                    placeholder="Enter title Here" 
                    id="courseTitle" />
                </FormGroup>
                <FormGroup>
                    <label for="desc">Description </label>
                    <Input 
                    type="textarea" 
                    name="desc" 
                    placeholder="Enter Description Here" 
                    id="desc" 
                   style={{height:100}}/>
                </FormGroup>
                <Container className="App">
                <Button color="success" > Save</Button>
                <Button color="warning" style={{margin:30}}>Clear</Button>
                </Container>
                
            </Form>
            </CardBody>
            </Card>
        </Fragment>
    
    )
}
export default AddCourse;