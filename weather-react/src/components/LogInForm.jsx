import Button from "../utils/Button.jsx";
import styles from "../css/main.module.css";
const LogInForm = () => {
  return (
    <>
      <section className={styles.account__container}>
        <section className={styles.account__container__header}>
          <h2>Log In</h2>
        </section>
        <section>
          <form className={styles.account__container__form}>
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
