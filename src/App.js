import dotenv from 'dotenv';
import React from 'react';

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
    </main>
  </div>
    
  );
}

export default App;
