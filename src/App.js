import dotenv from 'dotenv';
import React from 'react';

dotenv.config()

const api = {
  key: process.env.REACT_APP_API_KEY,
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {
  return (<div className="App">
    <h1>Hello</h1>
  </div>
    
  );
}

export default App;
