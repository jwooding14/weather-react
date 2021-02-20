import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";


export default function Information(props) {

return ( 


<div className="Information"><div>
<div class="row">
<div id="dateCity" class="col">
  <span id="date"><FormattedDate date={props.data.date}/> </span>
</div>
</div>
<div class="row">
<div class="col-12 col-md-4">
  <div class="data"> 
    <ul>
      <li>
        Wind<br />
        <span id="wind">{props.data.wind} MPH</span> 
      </li>
      <br />
      <li>
        Pressure <br />
        <span id="pressure">{props.data.pressure} inHG</span> 
      </li>
    </ul>
  </div>
</div>

<div class="col-12 col-md-4">
  <ul>
      <li class="city">{props.data.city}</li>
  </ul>

  <ul>
    <li class="weatherIcon">
<strong>  <img
    src={props.data.imageUrl}
    alt={props.data.description}
    
  />
  </strong>
    </li>
    <li class="weather"></li>
  </ul>
  <ul>
   
    <div class="tempNow" id="tempNow"> <WeatherTemperature celsius={props.data.temperature}/></div>
  </ul>
</div>

<div class="col-12 col-md-4">
  <div class="data">
    <div class="dataHumid">
      <ul>
        <li>
          Humidity<br />
          <span id="humidity">{props.data.humidity}%</span>
        </li>
        <br />
        <li>
          Feels like<br />
          <span id="feelsLike">{Math.round(props.data.feelsLike)}°F</span>
        </li>
      </ul>
    </div>
  </div>
</div>
</div>
</div>
<div class="row weather-forecast" id="forecast"> </div>
</div>
);
}