import FetchWeatherForm from "./FetchWeatherForm";
import styles from "./main.module.css";
const Home = () => {
  return (
    <>
      <main className={styles.container}>
        <section className={styles.grid}>
          <section>
            <h1 className={styles.grid__header}>Weather</h1>
          </section>
          <section className={styles.main__form}>
            <FetchWeatherForm />
          </section>
        </section>
      </main>
    </>
  );
};
export default Home;
