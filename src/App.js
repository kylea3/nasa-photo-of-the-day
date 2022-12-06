import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

import Photo from './components/Photo'
import Dropdown from './components/Dropdown'

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      setData(res.data);
      console.log(res.data);
    })
      .catch(err => {
        console.error(err);
      })
  }, []);
  const options = [
    { value: 5 },
    { value: 4 },
    { value: 3 },
    { value: 2 },
    { value: 1 }
   ];
   console.log(options);
  
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      { data && <Dropdown placeHolder={data.date} options={options} /> }
      { data && <Photo hdurl={data.hdurl} date={data.date} title={data.title} explanation={data.explanation} /> }
    </div>
  );


}

export default App;
