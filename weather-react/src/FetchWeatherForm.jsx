import { useState } from "react";
import Button from "./Button";
import styles from "./main.module.css";
const FetchWeatherForm = () => {
  const [inputValue, setInputValue] = useState();
  const handleInput = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <form className={styles.grid__form}>
        <input
          value={inputValue}
          onChange={handleInput}
          type="text"
          placeholder="Enter a city or zip code"
        />
        <Button buttonText="Search" />
      </form>
    </>
  );
};
export default FetchWeatherForm;
