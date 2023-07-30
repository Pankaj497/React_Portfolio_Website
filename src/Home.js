import React from "react";
import {Container, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer,toast } from "react-toastify";
const Home=()=>{
    const btn = ()=>{
        toast.success("Successfully Started");
      };
    return(
        <div>
            <header style={{background:'lightgray',padding:20}}>
                <h1>Learn code with Pankaj</h1>
                <p>
                    This is developed by learn code with pankaj for learning purpose  backend is on spring boot and frontend on react js
                </p>
                <Container>
                    <Button color="primary" onClick={btn}>Start Using
                    </Button>
                </Container>
                </header>

        </div>

    )
}

export default Home;