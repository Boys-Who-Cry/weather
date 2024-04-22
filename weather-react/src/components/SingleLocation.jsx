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
          <p style={{ fontSize: "1.3rem" }}>{data.main.temp}</p>
          <section className={styles.single__location__subgrid}>
            <p style={{ textAlign: "right" }}>H: {data.main.temp_max}</p>
            <p style={{ textAlign: "left" }}>L: {data.main.temp_min}</p>
          </section>
        </section>
      </section>
    </>
  );
};
export default SingleLocation;
