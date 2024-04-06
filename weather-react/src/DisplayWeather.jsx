import { useFetchWeatherData } from "./useFetchWeatherData";
import styles from "./main.module.css";
const DisplayWeather = (props) => {
  const location = props.location;
  const { data, error, loading } = useFetchWeatherData(location);
  return (
    <>
      {data && (
        <article className={styles.displayWeatherGrid}>
          <section className={styles.displayWeatherGrid__location}>
            <h2>{data.name}</h2>
          </section>
          <section className={styles.displayWeatherGrid__temperature}>
            <h3>{Math.floor(data.main.temp)}&deg;</h3>
            <section>
              <p>H: {Math.floor(data.main.temp_max)}&deg;</p>
              <p>L: {Math.floor(data.main.temp_min)}&deg;</p>
            </section>
          </section>
          <section className={styles.displayWeatherGrid__weather}>
            <p>{data.weather[0].main}</p>
          </section>
        </article>
      )}
    </>
  );
};
export default DisplayWeather;
