import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import styled from 'styled-components';
import Photo from './components/Photo'
import Dropdown from './components/Dropdown'

const dummyData = {
  "date":"2022-12-06",
  "explanation":"What\u2019s happening inside this interstellar mountain? Stars are forming. The mountain is actually a column of gas and dust in the picturesque Eagle Nebula (M16).  A pillar like this is so low in density that you could easily fly though it -- it only appears solid because of its high dust content and great depth. The glowing areas are lit internally by newly formed stars. These areas shine in red and infrared light because blue light is scattered away by intervening interstellar dust. The featured image was captured recently in near-infrared light in unprecedented detail by the James Webb Space Telescope (JWST), launched late last year. Energetic light, abrasive winds, and final supernovas from these young stars will slowly destroy this stellar birth column over the next 100,000 years.   Astrophysicists: Browse 2,900+ codes in the Astrophysics Source Code Library",
  "hdurl":"https://apod.nasa.gov/apod/image/2212/M16Pillar_WebbOzsarac_1668.jpg",
  "media_type":"image",
  "service_version":"v1",
  "title":"M16: A Star Forming Pillar from Webb",
  "url":"https://apod.nasa.gov/apod/image/2212/M16Pillar_WebbOzsarac_960.jpg"
}

const StyledDiv = styled.div`
  background-color: #DCD6DO;   
`;

const Styledp = styled.p`
  color: orange;
  font-weight: bold; 
`;

function App() {
  const [data, setData] = useState();

  // remove after finished styling
  useEffect(() => {setData(dummyData)}, []);

  // useEffect(() => {
  //   axios.get('https://api.nasa.gov/planetary/apod?api_key=6JdC1yN5x6fpWvEs4VKhxbyI8tCNOSHmDGCxegCm')
  //   .then(res => {
  //     setData(res.data);
  //     console.log(res.data);
  //   })
  //     .catch(err => {
  //       console.error(err);
  //     })
  // }, []);
  
  const options = [
    { value: 5, label: "Five Days Ago"},
    { value: 4, label: "Four Days Ago"},
    { value: 3, label: "Three Days Ago"},
    { value: 2, label: "Two Days Ago"},
    { value: 1, label: "One Day Ago"}
   ];
  
  return (
    <div className="App">
      <StyledDiv> 
        <Styledp>
          Choose another date from the dropdown menu to see the photo from that 
        day!
        </Styledp>
        { data && <Dropdown placeHolder={data.date} options={options} /> }
        { data && <Photo hdurl={data.hdurl} date={data.date} title={data.title} explanation={data.explanation} /> }
      </StyledDiv>
    </div>
  );


}

export default App;
