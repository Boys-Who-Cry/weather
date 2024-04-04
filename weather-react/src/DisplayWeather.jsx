import { useFetchWeatherData } from "./useFetchWeatherData";
const DisplayWeather = (props) => {
  const location = props.location;
  const { data, error, loading } = useFetchWeatherData(location);
  console.log(data);
  return <></>;
};
export default DisplayWeather;
