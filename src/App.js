import React from "react";
import './App.css';
import Weather from "./Weather";




function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        
        <Weather city="tokyo"/>
        <footer>
        <div id="endTag"> <a href="https://github.com/jwooding14/weather-by-Jacqueline.git" target="_blank"> Open source code</a> Coded by Jacqueline Diaz Wooding</div>
        </footer>
      </header>
     
    </div>
  );
}

export default App;
