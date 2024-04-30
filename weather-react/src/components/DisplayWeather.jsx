import "../css/display_weather.css";
const DisplayWeather = (props) => {
  const data = props.data;
  console.log(data);
  return (
    <>
      {data && (
        <article className="display__weather__grid">
          <section className="display__weather__grid__location">
            <h2>{data.name}</h2>
          </section>
          <section className="display__weather__grid__temperature">
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
