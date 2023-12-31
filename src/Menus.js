import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Menus =()=>{

    return(
    <ListGroup>
        <ListGroupItem tag={"a"} href='/' action>Home</ListGroupItem>
        <ListGroupItem tag={"a"} href='/AddCourse' action>Add Course</ListGroupItem>
        <ListGroupItem tag={"a"} href='/AllCources' action>View Courses</ListGroupItem>
        <ListGroupItem tag={"a"} href='#!' action>About</ListGroupItem>
        <ListGroupItem tag={"a"} href='#!' action>Contact</ListGroupItem>
    </ListGroup>
    )
}

export default Menus;
