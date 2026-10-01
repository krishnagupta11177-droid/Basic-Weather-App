import SeachBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Indore",
    feelsLike: 27.76,
    humidity: 26,
    temp: 29.12,
    tempMax: 29.12,
    tempMin: 29.12,
    weather: "clear sky",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontFamily: "monospace", fontSize: "2rem" }}>Weather App</h1>
      <SeachBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
