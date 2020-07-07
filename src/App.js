import dotenv from 'dotenv';
import React from 'react';

import {getDate} from "./Date/Date"
import {Search} from "./Search/Search"

dotenv.config()

const api = {
  key: process.env.REACT_APP_API_KEY,
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {



  return (
  <div className="App">
    <main>
    <Search />
    <div className="location-box">
      <div className="location">Saint Louis, Mo</div>
      <div className="date">{getDate(new Date())}</div>
    </div>
    </main>
  </div>
    
  );
}

export default App;
