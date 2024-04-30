import FetchWeatherForm from "../components/FetchWeatherForm.jsx";
import DisplayWeather from "../components/DisplayWeather.jsx";
import { useFetchWeatherData } from "../hooks/useFetchWeatherData.js";
import { Link, useParams } from "react-router-dom";
import weather__styles from "../css/weather_styles.module.css";
const Weather = () => {
  const { location } = useParams();
  const { data, loading, error } = useFetchWeatherData(location);
  return (
    <>
      <main className="container">
        <section className={weather__styles.weather__container}>
          <section className={weather__styles.weather__grid__form__container}>
            <FetchWeatherForm
              renderWeatherButton={true}
              setFormClassName={weather__styles.weather__form__grid}
              setFormInputName={weather__styles.weather__input}
              setFormButtonName={weather__styles.weather__button}
            />
          </section>
          <section>
            <DisplayWeather data={data} />
          </section>
          <section className={weather__styles.weather__grid__home__container}>
            <Link to="/">Back Home</Link>
          </section>
        </section>
      </main>
    </>
  );
};
export default Weather;
