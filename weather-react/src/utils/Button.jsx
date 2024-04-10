import "../css/index.css";
const Button = (props) => {
  return (
    <>
      <button className="weatherButton">{props.buttonText}</button>
    </>
  );
};
export default Button;
