import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import { useLocation } from "react-router-dom";

const Weather = () => {
  const location = useLocation();
  const { city, state } = location.state;

  const [weather, setWeather] = useState({
    city_name: "",
    state_code: "",
    data: [],
  });

  useEffect(() => {
    const apiKey = "RRPDVRJ259EVZCRL8RSDYXZVM";

    const apiRequestURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
      `${city},${state}`
    )}?key=${apiKey}&contentType=json`;

    const fetchData = async () => {
      try {
        const response = await axios.get(apiRequestURL);

        const { resolvedLocation, resolvedState, days } = response.data;

        setWeather({
          city_name: resolvedLocation,
          state_code: resolvedState,
          data: days || [],
        });
      } catch (err) {
        console.error("Error fetching data", err);
      }
    };

    fetchData();
  }, [city, state]);

  return <WeatherCard weatherData={weather.data} />;
};

export default Weather;
