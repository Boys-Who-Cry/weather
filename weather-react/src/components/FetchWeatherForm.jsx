import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
const FetchWeatherForm = (props) => {
  const [inputValue, setInputValue] = useState("");
  const renderWeatherButton = props.renderWeatherButton;
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
        {renderWeatherButton ? (
          <Link to={`../weather/${inputValue}`}>
            <Button
              handleClick={() => setInputValue("")}
              type="submit"
              buttonText="Search"
            />
          </Link>
        ) : (
          <Button
            handleClick={props.handleClick}
            type={"button"}
            buttonText="Add"
          />
        )}
      </form>
    </>
  );
};
export default FetchWeatherForm;
