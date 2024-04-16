import Button from "../utils/Button.jsx";
import styles from "../css/main.module.css";
const CreateAccountForm = () => {
  return (
    <>
      <section className={styles.account__container}>
        <section className={styles.account__container__header}>
          <h2>Create Account</h2>
        </section>
        <section>
          <form className={styles.account__container__form}>
            <section className={styles.account__container__subgrid}>
              <input type="text" placeholder="Enter your first name" />
              <input type="text" placeholder="Enter your last name" />
            </section>
            <input type="email" placeholder="Enter your email address" />
            <input type="password" placeholder="Create a password" />
            <Button type="submit" buttonText="Create Account" />
          </form>
        </section>
      </section>
    </>
  );
};
export default CreateAccountForm;
