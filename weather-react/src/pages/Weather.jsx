import FetchWeatherForm from "../components/FetchWeatherForm.jsx";
import DisplayWeather from "../components/DisplayWeather.jsx";
import { useFetchWeatherData } from "../hooks/useFetchWeatherData.js";
import { useParams } from "react-router-dom";
import styles from "../css/main.module.css";
const Weather = () => {
  const { location } = useParams();
  const { data, loading, error } = useFetchWeatherData(location);
  return (
    <>
      <main className="container">
        <section>
          <FetchWeatherForm setFormClass={styles.weather__form__grid} />
        </section>
        <section>
          <DisplayWeather data={data} />
        </section>
      </main>
    </>
  );
};
export default Weather;
