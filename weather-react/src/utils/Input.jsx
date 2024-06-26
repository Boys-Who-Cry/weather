import "../css/index.css";
const Input = (props) => {
  return (
    <>
      <input
        className={props.class}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </>
  );
};
export default Input;
