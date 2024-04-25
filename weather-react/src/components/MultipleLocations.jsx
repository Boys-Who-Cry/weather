import SingleLocation from "./SingleLocation.jsx";
import FetchWeatherForm from "./FetchWeatherForm.jsx";
import { useState } from "react";
import "../css/index.css";
import styles from "../css/main.module.css";
const MultipleLocations = () => {
  const [locationList, setLocationList] = useState([
    {
      id: crypto.randomUUID(),
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
      id: crypto.randomUUID(),
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
      id: crypto.randomUUID(),
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
  //Add to list
  const addToList = () => {
    setLocationList([
      {
        id: crypto.randomUUID(),
        name: Math.random(),
        weather: {
          description: "Description",
        },
        main: {
          temp: 50,
          temp_max: 100,
          temp_min: 10,
        },
      },
      ...locationList,
    ]);
  };
  //Delete locations from list
  const deleteFromList = (itemToBeDeleted) => {
    const filtered = locationList.filter((item) => {
      return item.id !== itemToBeDeleted;
    });
    setLocationList(filtered);
  };
  return (
    <>
      <main className="container">
        <FetchWeatherForm
          renderWeatherButton={false}
          handleClick={addToList}
          setFormClass={styles.weather__form__grid}
        />
        <section className={styles.single__location__container}>
          {locationList.map((location, index) => {
            return (
              <SingleLocation
                key={index}
                data={location}
                handleClick={deleteFromList}
              />
            );
          })}
        </section>
      </main>
    </>
  );
};
export default MultipleLocations;
