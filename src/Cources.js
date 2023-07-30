import React from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    CardFooter,
    Button,
    Container,
    CardSubtitle,
    CardText
} from 'reactstrap';

const Course = ({course}) =>{
    return(
<Card style={{padding:5}}>
    <CardBody>
        <CardSubtitle className="AppFont">{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
    </CardBody>
    <Container >
        <Button color='primary'>Update</Button>
        <Button color='danger ml-3' style={{marginLeft:5}}>Delete</Button>
    </Container>
</Card>
    );
}
export default Course;