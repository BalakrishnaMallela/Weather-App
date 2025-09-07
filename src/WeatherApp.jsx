import InfoBox from './InfoBox.jsx';
import SearchBox from './SearchBox.jsx';
import { useState } from 'react';

export default function WeatherApp() {
    const [weatherinfo, setWeatherInfo] = useState({
        city: "Bengaluru",
        country: "IN",
        feels_like: 28,
        description: "Clear sky",
        temperature_min: 25,
        temperature_max: 30,
        humidity: 60,
        wind_speed: 10
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Weather App by Deltas</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherinfo} />
        </div>
    );
}
 