export const getWeather = async (city) => {
  const baseURL = `https://api.weatherapi.com/v1/current.json?key=da05ab0d77b04a55af4202826251607&q=${city}&aqi=no`;
  const response = await fetch(baseURL);
  const data = await response.json();
  return data;
};

export const getWeatherForLocation = async (lat, long) => {
  const baseURL = `https://api.weatherapi.com/v1/current.json?key=da05ab0d77b04a55af4202826251607&q=${lat},${long}&aqi=no`;
  const response = await fetch(baseURL);
  const data = await response.json();
  return data;
};
