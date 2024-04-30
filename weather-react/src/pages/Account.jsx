import { useState } from "react";
import { Link } from "react-router-dom";
import LogInForm from "../components/LogInForm";
import CreateAccountForm from "../components/CreateAccountForm";
import "../css/index.css";
const Account = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <main className="container">
        {isLogin ? <LogInForm /> : <CreateAccountForm />}
        <section>
          {isLogin ? (
            <p style={{ textAlign: "center" }}>
              Don't have an account?{" "}
              <span
                style={{ textDecoration: "underline" }}
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </span>
            </p>
          ) : (
            <p style={{ textAlign: "center" }}>
              Have an account?{" "}
              <span
                style={{ textDecoration: "underline" }}
                onClick={() => setIsLogin(true)}
              >
                Log In
              </span>
            </p>
          )}
        </section>
        <section style={{ textAlign: "center" }}>
          <Link to="/">Back Home</Link>
        </section>
      </main>
    </>
  );
};
export default Account;
