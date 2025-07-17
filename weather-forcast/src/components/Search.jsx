import React from "react";
import "./Search.css";
import { useWeather } from "../context/Weather";

export const Search = ({ placeholder, onSearch, onSearchForLocation }) => {
  const weather = useWeather();

  return (
    <div className="search">
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => weather.setCity(e.target.value)}
        value={weather.city}
      />
      <button onClick={onSearch}>Search</button>
      <button onClick={onSearchForLocation}>Search for My Location</button>
    </div>
  );
};
