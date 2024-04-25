import "../css/index.css";
const Button = (props) => {
  return (
    <>
      <button
        type={props.type}
        onClick={props.handleClick}
        className={`${props.className} weather__button`}
      >
        {props.buttonText}
      </button>
    </>
  );
};
export default Button;
