import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";


export default function Weather(props) {
function handleResponse(response) {
    alert(`the weather ${response.data.name} is cool ${response.data.main.temp}`);
}

let key = "c2a0308255fedbe7dd192fcd88e7b405";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${key}&units=imperial`;
axios.get(apiUrl).then(handleResponse);
return (  
<Loader
    type="Puff"
    color="#orange"
    height={100}
    width={100}
    timeout={3000}
  />
  );
}
