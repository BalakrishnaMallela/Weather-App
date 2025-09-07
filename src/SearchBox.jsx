import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "f0f61705430b6d7678e9e06a1dce6e2f";

  let getWeatherInfo = async () => {
    try {
      let url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      let result = {
      city: data.name,
      country: data.sys.country,
      feels_like: data.main.feels_like,
      description: data.weather[0].description,
      temperature_min: data.main.temp_min,
      temperature_max: data.main.temp_max,
      humidity: data.main.humidity,
      wind_speed: data.wind.speed,
    };

    console.log(result);
    return result;
  }catch (err) {
    setError("no such place is found in our database");
  }
  };


  let handleChange = (event) => {
    setCity(event.target.value);
 };

 const handleSubmit = async (event) => {
  try{
    event.preventDefault();
    console.log("form submitted");
    console.log(city);
    setCity("");
    let newInfo = await getWeatherInfo();
    console.log(newInfo);
    updateInfo(newInfo);

  }catch (err) {
    setError("no such place is found in our database");
  }
     
  }
  return (
    <div className='search-box'>
         
        <form onSubmit={handleSubmit}>
          <TextField id="city" 
          label="City Name" 
          variant="outlined" 
          required onChange={handleChange} />
          <br></br>
          <Button type="submit" variant="contained">Search</Button>
          {error &&  <p style={{color:"red"}}>no such place is found in our database</p>}
        </form>
    </div>
  );
}

