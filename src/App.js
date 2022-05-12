import logo from './logo.svg';
import './App.css';
import {Landing} from "./landing.js";
import 'bootstrap/dist/css/bootstrap.min.css';


//each part of the page will be added as a component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Landing />
      </header>
    </div>
  );
}

export default App;
