import Button from "../utils/Button.jsx";
import account__styles from "../css/account_styles.module.css";
const LogInForm = () => {
  return (
    <>
      <section className={account__styles.account__container}>
        <section className={account__styles.account__container__header}>
          <h2>Log In</h2>
        </section>
        <section>
          <form className={account__styles.account__container__form}>
            <input type="text" placeholder="Enter your email address" />
            <input type="password" placeholder="Enter your password" />
            <Button type="submit" buttonText="Log In" />
          </form>
        </section>
      </section>
    </>
  );
};
export default LogInForm;
