import { Link } from "react-router-dom";
import FetchWeatherForm from "../components/FetchWeatherForm";
import "../css/index.css";
import styles from "../css/main.module.css";
const Home = () => {
  return (
    <>
      <main className="container">
        <section className={styles.home__grid}>
          <section>
            <h1 className={styles.home__grid__header}>Weather</h1>
          </section>
          <section className={styles.form}>
            <FetchWeatherForm setFormClass={styles.home__form__grid} />
          </section>
          <section>
            <p>
              <Link to="account">Login or Sign Up</Link>
            </p>
          </section>
        </section>
      </main>
    </>
  );
};
export default Home;
