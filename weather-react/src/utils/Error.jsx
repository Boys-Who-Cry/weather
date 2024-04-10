import { Link } from "react-router-dom";
const Error = () => {
  return (
    <>
      <p>This route is invalid.</p>
      <Link style={{ color: "red" }} to="/">
        Click here to return to home page.
      </Link>
    </>
  );
};
export default Error;
