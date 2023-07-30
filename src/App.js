import logo from './logo.svg';
import './App.css';
import Headers from "./Headers";
import { Button, Col, Container, Row } from "reactstrap";
import { ToastContainer,toast } from 'react-toastify';
import Home from './Home';
import Course from './Cources';
import AllCources from './AllCources';
import AddCourse from './AddCourse';
import Menus from './Menus';
import { BrowserRouter as Router,Link, Route, Routes } from 'react-router-dom';
import background from './backg.png'

function App() {

  return (
    <div className='Backimg'>
      <Router>
      <ToastContainer/>
      <Container>
    
     {/* <Course course = {{title:"Python Course", description:"This is just testing"}} />
      <Course course = {{title:"Java Course", description:"This is just testing"}} />
      <Course course = {{title:"C++ Course", description:"This is just testing"}} /> */}
      <Headers />
      <Row>
        <Col md={4}>
          <h2 style={{margin:4}}>Menu</h2>
        <Menus />

        </Col>
        <Col md={8}>
          <Routes>
          <Route path='/' Component={Home} exact />
          <Route path='/AddCourse' Component={AddCourse} exact />
          <Route path='/AllCources' Component={AllCources} exact />
          </Routes>
        </Col>
      </Row>


      </Container>
      </Router>

    </div>
  );
}

export default App;
