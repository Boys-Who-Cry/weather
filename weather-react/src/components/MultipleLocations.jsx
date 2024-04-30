import SingleLocation from "./SingleLocation.jsx";
import FetchWeatherForm from "./FetchWeatherForm.jsx";
import { useState } from "react";
import "../css/index.css";
import ml__styles from "../css/ml.module.css";
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
        <section className={ml__styles.ml__container}>
          <section className={ml__styles.weather__grid__form__container}>
            <FetchWeatherForm
              renderWeatherButton={false}
              handleClick={addToList}
              setFormClassName={ml__styles.weather__form__grid}
              setFormInputName={ml__styles.weather__input}
              setFormButtonName={ml__styles.weather__button}
            />
          </section>
          <section className={ml__styles.single__location__container}>
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
        </section>
      </main>
    </>
  );
};
export default MultipleLocations;
