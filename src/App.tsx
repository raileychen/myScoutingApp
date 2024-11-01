import React from 'react';
//import logo from 'my-app/src/images/logo.png';
//import back from 'my-app/src/images/back.png';
import './App.css';

function App(): JSX.Element {
 
  type FieldType = {
    initials: string,
    matchlevel: string,
    matchnum: number,
    robotpos: string,
    preloaded: boolean,
    roundnum: number,
  };
  const rounds = [
    { label: "Qualifications", value: "qm" },
    { label: "Semi-Finals", value: "sf" },
    { label: "Finals", value: "f" },
  ];
  const robotpos = [
    { label: "R1", value: "red_1" },
    { label: "R2", value: "red_2" },
    { label: "R3", value: 'red_3' },
    { label: "B1", value: "blue_1" },
    { label: "B2", value: "blue_2" },
    { label: "B3", value: 'blue_3' },
  ];
  return (
    <div className='body'>
   
      <h1 style={{ display: 'inline-block', textAlign: 'center' }}>Match Scout</h1>
    
        <h2>Team: 0</h2>

        <h2>Scouter Initials</h2>
        
        <h2>Match #</h2>
        
        <h2>Match Level:</h2>
        
        <h2>Robot Position:</h2>
        
        </div>
  );
  
  /* </div>   <a href='/scoutingapp'><img src={back} style={{ height: 64 + 'px', paddingTop: '5%' }} alt=''></img></a>   
      <img src={logo} style={{ height: 256 + 'px' }} alt=''></img>
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>@hc.railey</p>
        <a
          className="App-link"
          href="https://github.com/raileychen"
          target="_blank"
          rel="noopener noreferrer"
        >
          Railey's Github
        </a>
        <button type="button">go fund me!</button>
        <p>Railey :)</p>
      </header>
    </div>
  );*/
}

export default App;
