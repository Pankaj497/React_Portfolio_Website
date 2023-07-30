import logo from './logo.svg';
import './App.css';
import Headers from "./Headers";
import { Button } from "reactstrap";
import { ToastContainer,toast } from 'react-toastify';

function App() {

  const btn = ()=>{
    toast.success("this is my first message");
  };
  return (
    <div className="App">
      <ToastContainer/>
      <h1>this is bootstrap component</h1>
      <Button color='primary' outline onClick={btn}>this is first bootstrap button</Button>
      <Headers />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
