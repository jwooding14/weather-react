import React from "react";
import './App.css';
import Weather from "./Weather";




export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="Los angeles"/>
        <footer>
        <div id="endTag"> <a href="https://github.com/jwooding14/weather-react.git" target="_blank"> Open source code</a> <span id="codedBy">Coded by Jacqueline Diaz Wooding</span></div>
        </footer>
      </header>
     
    </div>
  );
}

 