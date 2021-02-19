import React, { useState } from "react";
import Information from "./Information";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ ready: false });
const [city, setCity] = useState(props.defaultCity);

function handleSubmit (event) {
  event.preventDefault();
  search();
}

function handleCityChange(event){
  event.preventDefault();
setCity (event.target.value);

}


function handleResponse(response) {

setWeatherData({
ready: true,
temperature: response.data.main.temp,
humidity: response.data.main.humidity,
description: response.data.weather[0].description,
date: new Date(response.data.dt * 1000),
wind: response.data.wind.speed,
imageUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
feelsLike: response.data.main.feels_like,
pressure: response.data.main.pressure,
city: response.data.name,
});
}

function search() {
  const apiKey = "c2a0308255fedbe7dd192fcd88e7b405";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
} 


if (weatherData.ready) {
return (
  <div className="weather">
<div class="background">
      <div class="container">
        <div class="searchBar">
          <form onSubmit={handleSubmit} id="searching" class="form-inline">
            <div class="form-group mb-2 mx-sm-3">
              <input
                type="search"
                onChange={handleCityChange}
                autocomplete="off"
                class="form-control"
                id="response"
                placeholder="🔎  Enter city..."
                autofocus="on"
              />
              <button type="search" id="find" class="btn btn-primary mx-1">
                Search
              </button>
              
            </div>
          </form>
          </div>
          <Information data={weatherData}/>
        </div>
        </div>
        </div>
);


} else {
search();
return "Loading";

}
}