import "../css/index.css";
import styles from "../css/main.module.css";
const SingleLocation = (props) => {
  const data = props.data;
  return (
    <>
      <section className={styles.single__location__grid}>
        <section>
          <h2>{data.name}</h2>
          <p>{data.weather.description}</p>
        </section>
        <section>
          <p>{data.main.temp}</p>
          <section>
            <p>{data.main.temp_min}</p>
            <p>{data.main.temp_max}</p>
          </section>
        </section>
      </section>
    </>
  );
};
export default SingleLocation;
