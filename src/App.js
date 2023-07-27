import logo from './logo.svg';
import './App.css';
import Headers from "./Headers";
import { Button } from "reactstrap";

function App() {
  return (
    <div className="App">
      <h1>this is bootstrap component</h1>
      <Button color="warning" outline size='lg'>this is first bootstrap button</Button>
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
