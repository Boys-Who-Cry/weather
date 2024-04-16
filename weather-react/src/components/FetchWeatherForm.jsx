import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
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
        <Link onClick={() => setInputValue("")} to={`../weather/${inputValue}`}>
          <Button type="submit" buttonText="Search" />
        </Link>
      </form>
    </>
  );
};
export default FetchWeatherForm;
