import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../utils/Input";
import Button from "../utils/Button";
const FetchWeatherForm = (props) => {
  const [inputValue, setInputValue] = useState("");
  const renderWeatherButton = props.renderWeatherButton;
  const handleInput = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <form className={props.setFormClassName}>
        <Input
          class={props.setFormInputName}
          value={inputValue}
          onChange={handleInput}
          type={"text"}
          placeholder="Enter a city or zip code"
        />
        {renderWeatherButton ? (
          <Link to={`../weather/${inputValue}`}>
            <Button
              className={props.setFormButtonName}
              handleClick={() => setInputValue("")}
              buttonText="Search"
            />
          </Link>
        ) : (
          <Button
            className={props.setFormButtonName}
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
