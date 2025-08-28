import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchBox.css';

export default function SearchBox({ updateInfo }){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "09d7d6c157f75e2fd14c9501d70a24dd";

    let getWeatherInfo = async() => {
        try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result ={
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            description: jsonResponse.weather[0].description,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
        }
        console.log(result);
        return result;
    } catch (error) {
        throw error;
    }
};

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try{
        event.preventDefault();
        console.log("Searching weather for:", city);
        setCity("");
        setError(false);
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        } catch (error) {
            setError(true);
        }
    }

    return(
        <div className='searchbox'>

        <form action="" onSubmit={handleSubmit}>
        <TextField required id="city" label="City Name" variant="outlined" value={city} onChange={handleChange}/>
        <br /><br />
        <Button variant="outlined" type='submit'>Search</Button>

        {error && <p className='error' style={{color: "red"}}>Sorry, we can not find this place</p>}
        </form>
        
        </div>
    );
}