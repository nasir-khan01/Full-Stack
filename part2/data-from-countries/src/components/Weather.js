import axios from "axios";
import React, { useState, useEffect } from "react";
const Weather = ({ show }) => {
  const [weather, setWeather] = useState(null);
  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${show[0].capital}`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, [api_key, show]);

  console.log("weather is", weather);
  return (
    weather && (
      <div>
        <h1>Weather in {show[0].capital}</h1>
        <strong>temperature : </strong>
        {weather.current.temperature}
        <br />
        <img src={weather.current.weather_icons} />
        <br />
        <strong>wind :</strong>
        {weather.current.wind_speed} mph direction {weather.current.wind_dir}
      </div>
    )
  );
};

export default Weather;
