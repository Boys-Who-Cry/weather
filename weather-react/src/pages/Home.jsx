import { Link } from "react-router-dom";
import FetchWeatherForm from "../components/FetchWeatherForm";
import "../css/index.css";
import home__styles from "../css/home_styles.module.css";
import styles from "../css/main.module.css";
const Home = () => {
  return (
    <>
      <main className="container">
        <section className={home__styles.home__grid}>
          <section className={home__styles.home__grid__header__container}>
            <h1>Weather</h1>
          </section>
          <section className={home__styles.home__grid__form__container}>
            <FetchWeatherForm doWeatherButton={true} />
          </section>
          <section className={home__styles.home__grid__accountLink__container}>
            <Link to="account">Login or Sign Up</Link>
          </section>
        </section>
      </main>
    </>
  );
};
export default Home;
