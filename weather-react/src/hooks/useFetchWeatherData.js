import { useEffect, useState } from "react";
export const useFetchWeatherData = (location) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = "fdfaf3e5d5694d644e093b6be5f43f07";
  let apiCall = "";
  if (isNaN(location)) {
    const cityName = `${location}`;
    const cityNameAPICall = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;
    apiCall = cityNameAPICall;
  } else if (!isNaN(location)) {
    const zipCode = location;
    const zipAPICall = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}&units=imperial`;
    apiCall = zipAPICall;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiCall);
        const json = await response.json();
        setLoading(false);
        setData(json);
        console.log(json.data.main.temp);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    fetchData();
  }, [location]);
  return { data, loading, error };
};
