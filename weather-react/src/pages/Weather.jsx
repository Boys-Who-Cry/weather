import FetchWeatherForm from "../components/FetchWeatherForm";
import DisplayWeather from "../components/DisplayWeather";
import { useParams } from "react-router-dom";
import styles from "../css/main.module.css";
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
