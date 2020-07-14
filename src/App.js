import React, {useState} from 'react';

import {api} from "./api/index"
import {convertToFah} from "./utils/index"
import {getDate, Welcome} from "./components"



function App() {
  const [query, setQuery] = useState('')
  const[weather, setWeather] = useState({})


const search = evt => {
  if(evt.type === 'click' || evt.key === 'Enter') {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
  .then(res => res.json())
  .then(results => {
      setWeather(results);
      setQuery('');
  })
  }
}

  return (
  <div className={
    (typeof weather.main != "undefined")
    ? ((weather.main.temp > 1)
      ? 'App' 
      : 'App cold')
      : 'App'}>
    <main>

      <div className="search-box">
        <input 
        type="text" 
        className="search-bar" 
        placeholder="&#128269;Search By City" 
        onChange={e => setQuery(e.target.value)} 
        value={query} 
        onKeyPress={search} /> 
      </div>
      <div className="button_container">
      <button className="btn" onClick={search} ><span>Enter</span></button>
      </div>


    {(typeof weather.main != "undefined") ? (
    <div className="content">
      <div className="location-box">
        <div className="location">{weather.name}, {weather.sys.country}</div>
        <div className="date">{getDate(new Date())}</div>
      </div>
      <div className="weather-box">
        <div className="temp">
          {Math.round(convertToFah(weather.main.temp))}°f
        </div>
        <div className="weather">{weather.weather[0].main}</div>
      </div>
    </div>
    ) : (<div className="welcome">
        <Welcome />
      </div>)}
    </main>
  </div>
    
  );
}

export default App;
