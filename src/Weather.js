import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";


export default function Weather() {
const [weatherData, setWeatherData] = useState({ ready: false });

 
function handleResponse(response) {
setWeatherData({
ready: true,
temp: response.data.main.temp,
humidity: response.data.main.humidity,
description: response.data.weather[0].description,
date: new Date(response.data.dt * 1000),
wind: response.data.wind.speed,
city: response.data.name, 
imageUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
feelsLike: response.data.main.feels_like,
pressure: response.data.main.pressure,
});
}

if (weatherData.ready) {
return (
  <div className="weather">
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
            <span id="date"><FormattedDate date={weatherData.date}/> </span>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4">
            <div class="data"> 
              <ul>
                <li>
                  Wind<br />
                  <span id="wind">{weatherData.wind} MPH</span> 
                </li>
                <br />
                <li>
                  Pressure <br />
                  <span id="pressure">{weatherData.pressure} inHG</span> 
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
              
            />
            </strong>
              </li>
              <li class="weather"></li>
            </ul>
            <ul>
              <li class="tempNow" id="tempNow">{Math.round(weatherData.temp)}°F</li>
            </ul>
          </div>

          <div class="col-12 col-md-4">
            <div class="data">
              <div class="dataHumid">
                <ul>
                  <li>
                    Humidity<br />
                    <span id="humidity">{weatherData.humidity}%</span>
                  </li>
                  <br />
                  <li>
                    Feels like<br />
                    <span id="feelsLike">{Math.round(weatherData.feelsLike)}°F</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div class="row weather-forecast" id="forecast"> </div>
        </div>
        </div>
);


} else {

const apiKey = "c2a0308255fedbe7dd192fcd88e7b405";
let city = "Los Angeles";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
axios.get(apiUrl).then(handleResponse);

return "Loading";
}
}