import React from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather() {
let weatherData = {
  city: "Shanghai", 
  temp: "50°F",
  date: "Saturday 2/06/2020 09:58",
  description: "Cloudy",
  humidity: "70%",
  wind: "4 mph",
  feelsLike: "55°F",
  imageUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
  pressure: "1028 MB",

}; 
    
return (
<div class="background">
      <div class="container">
        <div class="searchBar">
          <form id="searching" class="form-inline">
            <div class="form-group mb-2 mx-sm-3">
              <input
                type="search"
                autocomplete="off"
                class="form-control"
                id="response"
                placeholder="🔎  Enter city..."
                autofocus="on"
              />
              <button type="search" id="find" class="btn btn-primary mx-1">
                Search
              </button>
              <span class="secondaryButton" id="position">
                <button type="submit" class="btn btn-primary mb">
                  <span class="current-location-button">
                    My Location <i class="fas fa-location-arrow"></i
                  ></span>
                </button>
              </span>
            </div>
          </form>
        </div>

        <div class="fc">
          <a class="btn btn-primary" href="#" id="celsiusButton" role="button"
            >°C  </a
          >
          <a
            class="btn btn-primary"
            href="#"
            id="fahrenheitButton"
            role="button"
            >°F </a
          >
        </div>

        <div class="row">
          <div id="dateCity" class="col">
            <span id="date">  {weatherData.date}</span>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4">
            <div class="data"> 
              <ul>
                <li>
                  Wind<br />
                  <span id="wind">{weatherData.wind}</span> 
                </li>
                <br />
                <li>
                  Pressure <br />
                  <span id="pressure">{weatherData.pressure}</span> inHG
                </li>
              </ul>
            </div>
          </div>

          <div class="col-12 col-md-4">
            <ul>
                <li class="city">{weatherData.city}</li>
            </ul>
            <ul>
              <li class="weatherIcon">
          <strong>  <img
              src={weatherData.imageUrl}
              alt={weatherData.description}
              
            /></strong>
              </li>
              <li class="weather"></li>
            </ul>
            <ul>
              <li class="tempNow" id="tempNow">{weatherData.temp}</li>
            </ul>
          </div>

          <div class="col-12 col-md-4">
            <div class="data">
              <div class="dataHumid">
                <ul>
                  <li>
                    Humidity<br />
                    <span id="humidity">{weatherData.humidity}</span>
                  </li>
                  <br />
                  <li>
                    Feels like<br />
                    <span id="feelsLike"> {weatherData.feelsLike}</span>
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
