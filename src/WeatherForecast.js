import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";



export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

function handleForecastResponse(response){
    setLoaded(true);
    setForecast(response.data);
}

if (loaded && props.city === forecast.city.name)  {

   return (
      <div className="WeatherForecast row">
        <img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt="weather" />
      </div>

    );

} else {
let apiKey = "c2a0308255fedbe7dd192fcd88e7b405";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}appid=${apiKey}&units=metric`
   axios.get(url).then(handleForecastResponse);
    return null;
}
}