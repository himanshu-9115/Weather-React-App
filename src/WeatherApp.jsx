import SearchBox from "./searchBox";
import InfoBox from "./InfoBox"
import {useState} from "react";

export default function WeatherApp(){

  const [WeatherInfo , setWeatherInfo] = useState({
    city : "Lucknow",
    feelslike : 24.84,
    temp : 25.05,
    tempMin : 25.05,
    tempMax : 25.05,
    humidity : 47,
    weather : "haze",

  });

  let updateInfo = (newInfo)=>{
    setWeatherInfo(newInfo);
  }


  return (

<div style={{textAlign:"center"}}>
  <h2>Weather App by Himanshu</h2>
  <SearchBox updateInfo={updateInfo}/>
  <InfoBox info={WeatherInfo} />
</div>



  );

}