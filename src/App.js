import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";

function App() {
  return (
    <div className="App">
      <div className="font-bold bg-red-500 ">Abarrar</div>
      <div className="temp">No Tailwind</div>
      <Button variant="outlined" color="primary">
        Button
      </Button>
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
