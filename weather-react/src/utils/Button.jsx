import "../css/index.css";
const Button = (props) => {
  return (
    <>
      <button
        type={props.type}
        onClick={props.handleClick}
        className="weatherButton"
      >
        {props.buttonText}
      </button>
    </>
  );
};
export default Button;
