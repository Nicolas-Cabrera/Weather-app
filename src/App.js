import React, { useState } from 'react';
import './App.css';
import Output from './Output';
import Input from './Input';
const APIkey = 'f474c5ad41135c5df510a79853a2b255';

export default function App() {

  // const [getWeather, setGetWeather] = useState(getWeatherAPI);
  const [location, setLocation] = useState('');
  // const [icon, setIcon] = useState('');
  const [celsius, setCelsius] = useState('');
  const [tempMax, setTempMax] = useState('');
  const [tempMin, setTempMin] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);

  //Weather Icons = Thunderstorm, Drizzle, Rain, Snow, Atmosphere, Clear, Cloudy

  function calcCelsius(temp) {
    let celsius = Math.round(temp - 273.15);
    return celsius;
  }

  const getWeatherAPI = async (e) => {
    e.preventDefault();
    try {
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      if (city && country) {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIkey}`)
        const res = await api_call.json();
        setLocation(`${res.name}, ${res.sys.country}`);
        setCelsius(calcCelsius(res.main.temp));
        setTempMin(calcCelsius(res.main.temp_min));
        setTempMax(calcCelsius(res.main.temp_max));
        setDescription(res.weather[0].description)
      } else {
        setError(true);
      }
    } catch (e) {
      console.log('Error', e)
    }
  }
  return (
    <div className="App">
      <div className='container'>
        <h1>Weather App</h1>
        <Input getWeather={getWeatherAPI} error={error} />
        <Output location={location}
          tempCelcius={celsius}
          tempMax={tempMax}
          tempMin={tempMin}
          description={description} />
      </div>
    </div>
  );

}

