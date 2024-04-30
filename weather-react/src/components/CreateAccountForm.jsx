import Button from "../utils/Button.jsx";
import account__styles from "../css/account_styles.module.css";
const CreateAccountForm = () => {
  return (
    <>
      <section className={account__styles.account__container}>
        <section className={account__styles.account__container__header}>
          <h2>Create Account</h2>
        </section>
        <section>
          <form className={account__styles.account__container__form}>
            <section className={account__styles.account__container__subgrid}>
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
