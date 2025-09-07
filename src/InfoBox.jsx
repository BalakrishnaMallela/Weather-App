import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}) {
    const INIT_URL ="https://media.istockphoto.com/id/472784066/photo/monsoon-over-kolkata.jpg?s=1024x1024&w=is&k=20&c=aoQpFH-W1QdxiNmjbW38JTV_2juZ0d1jfGYpKvfaohQ=";
      if (!info) {
    return (
      <div className="info-box">
        <h2 style={{ color: "red" }}>City not found. Try another name.</h2>
      </div>
    );
  }

  const HOT_URL = "https://media.istockphoto.com/id/1325895908/photo/asian-woman-drying-sweat-in-a-warm-summer-day.jpg?s=1024x1024&w=is&k=20&c=tSGtyuisfaCEzumKzlH39YQUR-uwo2LcuL0rBxoFhyI=";
  const COLD_URL = "https://media.istockphoto.com/id/868098786/photo/thermometer-on-snow-shows-low-temperatures-zero-low-temperatures-in-degrees-celsius-and.jpg?s=1024x1024&w=is&k=20&c=A_D48BLCy76ux8guBDeYxk5c8i8WqWvQOcNVlFKOGk4=";
  const RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=1024x1024&w=is&k=20&c=U6uwI27fEfgEAl9j_Hz848FgLRidd9Ww0kPCkc0FZB8=";

    return (
  <div className="info-box">
    <h1>WeatherInfo</h1>
    <div className='card-container'> 
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 70
            ? RAIN_URL
            : info.feels_like > 25
            ? HOT_URL
            : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}, {info.country}
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {info.description}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Min: {info.temperature_min}&#8451; | Max: {info.temperature_max}&#8451;
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Feels like: {info.feels_like}&#8451;
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Humidity: {info.humidity}%
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Wind Speed: {info.wind_speed} km/h
        </Typography>

      </CardContent>
      <h1>Added</h1>
     </Card>
     </div>
  </div>
);

}
