import { useState } from "react";
import { Link } from "react-router-dom";
import form__styles from "../css/form_styles.module.css";
import Input from "../utils/Input";
import Button from "../utils/Button";
const FetchWeatherForm = (props) => {
  const [inputValue, setInputValue] = useState("");
  const doWeatherButton = props.doWeatherButton;
  const handleInput = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <form className={form__styles.form__grid}>
        <Input
          class={form__styles.city__input}
          value={inputValue}
          onChange={handleInput}
          type={"text"}
          placeholder="Enter a city or zip code"
        />
        {doWeatherButton ? (
          <Link to={`../weather/${inputValue}`}>
            <Button
              className={form__styles.weather__button}
              handleClick={() => setInputValue("")}
              buttonText="Search"
            />
          </Link>
        ) : (
          <Button
            className={form__styles.weather__button}
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
