import FetchWeatherForm from "./FetchWeatherForm";
import DisplayWeather from "./DisplayWeather";
import { useParams } from "react-router-dom";
import styles from "./main.module.css";
const Weather = () => {
  const { location } = useParams();
  return (
    <>
      <main className="container">
        <section>
          <FetchWeatherForm setFormClass={styles.weather__form__grid} />
        </section>
        <section>
          <DisplayWeather location={location} />
        </section>
      </main>
    </>
  );
};
export default Weather;
