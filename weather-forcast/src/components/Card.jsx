import React from "react";
import "./Card.css";
import { useWeather } from "../context/Weather";

export const Card = ({ title, description, image }) => {
  const weather = useWeather();
  return (
    <>
      {weather.city && (
        <div className="card">
          <img
            src={weather?.weather?.current?.condition?.icon}
            alt="Weather Icon"
          />
          <h2>{weather?.weather?.current?.temp_c}°C</h2>
          <h5>
            {weather?.weather?.location?.name},{" "}
            {weather?.weather?.location?.country}
          </h5>
        </div>
      )}
    </>
  );
};
