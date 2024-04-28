import styles from "../css/main.module.css";
const DisplayWeather = (props) => {
  const data = props.data;
  console.log(data);
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
            <p>{data.weather[0].description}</p>
          </section>
        </article>
      )}
    </>
  );
};
export default DisplayWeather;

/*
<section className={styles.displayWeatherGrid__weather}>
            <p>{data.weather[0].main}</p>
          </section>
*/
