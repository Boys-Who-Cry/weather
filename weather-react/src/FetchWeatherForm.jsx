import { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
const FetchWeatherForm = (props) => {
  const [inputValue, setInputValue] = useState("");
  const handleInput = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <form className={props.setFormClass}>
        <input
          value={inputValue}
          onChange={handleInput}
          type="text"
          placeholder="Enter a city or zip code"
        />
        <Link to="weather" state={{ location: inputValue }}>
          <Button buttonText="Search" />
        </Link>
      </form>
    </>
  );
};
export default FetchWeatherForm;
