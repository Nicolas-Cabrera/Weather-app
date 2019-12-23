import React, { useState, useEffect } from 'react';
import './App.css';
import Output from './Output';
import Input from './Input';
const APIkey = 'f474c5ad41135c5df510a79853a2b255';

export default function App() {

  // const [getWeather, setGetWeather] = useState(getWeatherAPI);
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [icon, setIcon] = useState('');
  const [celsius, setCelsius] = useState('');
  const [tempMax, setTempMax] = useState('');
  const [tempMin, setTempMin] = useState('');
  const [description, setDescription] = useState('');

  //Weather Icons = Thunderstorm, Drizzle, Rain, Snow, Atmosphere, Clear, Cloudy

  function calcCelsius(temp) {
    let celsius = Math.round(temp - 273.15);
    return celsius;
  }

  const getWeatherAPI = async () => {
      try {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${APIkey}`)
        const res = await api_call.json();
        setCity(res.name);
        setCountry(res.sys.country);
        setCelsius(calcCelsius(res.main.temp));
        setTempMin(calcCelsius(res.main.temp_min));
        setTempMax(calcCelsius(res.main.temp_max));
        setDescription(res.weather[0].description)
        console.log(res);
      } catch(e) {
        console.error("problem", e)
      }
  }
  getWeatherAPI();

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Input />
      <Output city={city} country={country} tempCelcius={celsius} tempMax={tempMax} tempMin={tempMin} description={description}/>
    </div>
  );

}

