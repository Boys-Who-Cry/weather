import { Link } from "react-router-dom";
import FetchWeatherForm from "../components/FetchWeatherForm";
import "../css/index.css";
import home__styles from "../css/home_styles.module.css";
import form__styles from "../css/form_styles.module.css";
const Home = () => {
  return (
    <>
      <main className="container">
        <section className={home__styles.home__grid}>
          <section className={home__styles.home__grid__header__container}>
            <h1>Weather</h1>
          </section>
          <section className={home__styles.home__grid__form__container}>
            <FetchWeatherForm
              doWeatherButton={true}
              setFormClassName={form__styles.form__grid}
              setFormInputName={form__styles.city__input}
              setFormButtonName={form__styles.weather__button}
            />
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
