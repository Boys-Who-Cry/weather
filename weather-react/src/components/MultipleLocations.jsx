import SingleLocation from "./SingleLocation.jsx";
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
  ];
  return (
    <>
      {locationList.map((location, index) => {
        return <SingleLocation key={index} data={location} />;
      })}
    </>
  );
};
export default MultipleLocations;
