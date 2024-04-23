import SingleLocation from "./SingleLocation.jsx";
import FetchWeatherForm from "./FetchWeatherForm.jsx";
import { useState } from "react";
import "../css/index.css";
import styles from "../css/main.module.css";
const MultipleLocations = () => {
  const [locationList, setLocationList] = useState([
    {
      key: "1",
      name: "Manhattan",
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
      key: "2",
      name: "Queens",
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
      key: "3",
      name: "Staten Island",
      weather: {
        description: "Description",
      },
      main: {
        temp: 50,
        temp_max: 100,
        temp_min: 10,
      },
    },
  ]);
  return (
    <>
      <main className="container">
        <FetchWeatherForm setFormClass={styles.weather__form__grid} />
        <section className={styles.single__location__container}>
          {locationList.map((location, index) => {
            return (
              <SingleLocation
                key={index}
                data={location}
                locationList={locationList}
                setLocationList={setLocationList}
              />
            );
          })}
        </section>
      </main>
    </>
  );
};
export default MultipleLocations;
