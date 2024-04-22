import SingleLocation from "./SingleLocation.jsx";
import FetchWeatherForm from "./FetchWeatherForm.jsx";
import "../css/index.css";
import styles from "../css/main.module.css";
const MultipleLocations = () => {
  const locationList = [
    {
      name: "CityName",
      weather: {
        description: "Description",
      },
      main: {
        temp: 50,
        temp_max: 100,
        temp_min: 10,
      },
    },
    {
      name: "CityName",
      weather: {
        description: "Description",
      },
      main: {
        temp: 50,
        temp_max: 100,
        temp_min: 10,
      },
    },
    {
      name: "CityName",
      weather: {
        description: "Description",
      },
      main: {
        temp: 50,
        temp_max: 100,
        temp_min: 10,
      },
    },
  ];
  return (
    <>
      <main className="container">
        <FetchWeatherForm setFormClass={styles.weather__form__grid} />
        {locationList.map((location, index) => {
          return <SingleLocation key={index} data={location} />;
        })}
      </main>
    </>
  );
};
export default MultipleLocations;
