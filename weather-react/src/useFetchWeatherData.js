import { useEffect, useState } from "react";
export const useFetchWeatherData = (city, zip) => {
  const [weatherData, setWeatherData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = "fdfaf3e5d5694d644e093b6be5f43f07";
  let apiCall = "";
  if (city && !zip) {
    const cityName = `${city}`;
    const cityNameAPICall = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;
    apiCall = cityNameAPICall;
    console.log("CITY");
  } else if (!city && Number(zip)) {
    const zipCode = zip;
    const zipAPICall = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}&units=imperial`;
    apiCall = zipAPICall;
    console.log("ZIP");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiCall);
        const json = await response.json();
        console.log(json);
        setLoading(false);
        setWeatherData(json);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    fetchData();
  }, [apiCall]);
  return { weatherData, error, loading };
};
