import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "New York",
        temp: 25,
        tempMin: 20,
        tempMax: 30,
        description: "Clear sky",
        humidity: 60,
        feelsLike: 27
    });

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }

    return(
        
        <div style={{ textAlign: "center"}}>
            <h2 style={{color: "white"}}>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <br />
            <InfoBox info={weatherInfo}/>
        </div>
    )
}