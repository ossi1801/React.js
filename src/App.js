import logo from './logo.svg';
import './App.css';
import Navigationbar from './Navbar.js'; 
import {InfoCard,InfoText} from './InfoCard.js';
import Zoom from 'react-reveal/Zoom';
//import Card from 'react-bootstrap/Card';
import ArrowAnimation from './ArrowAnimation';
//import styled from 'styled-components';
//
function App() {
  return (
    <div className="App">
      <Navigationbar/>
     

      <header className="App-header">
        <Zoom top>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Hello and welcome to Ossi's page<code></code> 
            </p>
            <p>
            <a href="#InfoText" >Click here to learn more!   <ArrowAnimation/> </a>     
            </p>

        </Zoom >
     
      </header>
      <div className="contactmeDiv">
        <div className="floaters">
         
          <InfoCard/>
        </div>
     <InfoText/>
      </div>
  
   

  <h2>This is a heading in a  element</h2>
  <p id="bot"> This is some text in a  element.</p>


    </div>
  );
}

export default App;
