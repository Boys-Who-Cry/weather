import FetchWeatherForm from "./FetchWeatherForm";
import "./index.css";
import styles from "./main.module.css";
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
        </section>
      </main>
    </>
  );
};
export default Home;
