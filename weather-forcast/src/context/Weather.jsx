import { createContext, useContext, useState } from "react";
import { getWeather, getWeatherForLocation } from "../api";

export const WeatherContext = createContext(null);
export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");

  const fetchWeather = async () => {
    const data = await getWeather(city);
    setWeather(data);
  };

  const fetchWeatherForLocation = async () => {
    const data = await getWeatherForLocation(lat, long);
    debugger;
    setWeather(data);
    setCity(data.location.name);
  };

  return (
    <WeatherContext.Provider
      value={{
        weather,
        setWeather,
        city,
        setCity,
        fetchWeather,
        fetchWeatherForLocation,
        lat,
        long,
        setLat,
        setLong,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
