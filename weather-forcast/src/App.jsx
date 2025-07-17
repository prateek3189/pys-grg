import { useEffect } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Search } from "./components/Search";
import { useWeather } from "./context/Weather";

function App() {
  const weather = useWeather();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      weather.setLat(position.coords.latitude);
      weather.setLong(position.coords.longitude);
    });
  }, []);

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search
        placeholder="Enter City Name"
        onSearch={weather.fetchWeather}
        onSearchForLocation={weather.fetchWeatherForLocation}
      />
      <Card />
    </div>
  );
}

export default App;
