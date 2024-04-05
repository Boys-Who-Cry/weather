import { useFetchWeatherData } from "./useFetchWeatherData";
import styles from "./main.module.css";
const DisplayWeather = (props) => {
  const location = props.location;
  const { data, error, loading } = useFetchWeatherData(location);
  return (
    <>
      {data && (
        <main>
          <section className={styles.displayWeatherGrid}>
            <article>
              <h2>{data.name}</h2>
            </article>
            <article>
              <h2>{data.main.temp}</h2>
              <section>
                <p>H: {data.main.temp_max}</p>
                <p>L: {data.main.temp_min}</p>
              </section>
            </article>
            <article>{data.weather[0].main}</article>
          </section>
        </main>
      )}
    </>
  );
};
export default DisplayWeather;
