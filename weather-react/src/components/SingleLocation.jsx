import "../css/index.css";
import styles from "../css/main.module.css";
const SingleLocation = (props) => {
  const data = props.data;
  const locationList = props.locationList;
  const setLocationList = props.setLocationList;
  //Delete locations from list
  const deleteFromList = (itemToBeDeleted) => {
    const filtered = locationList.filter((item) => {
      return item.name !== itemToBeDeleted;
    });
    setLocationList(filtered);
  };
  return (
    <>
      <section className={styles.single__location__grid}>
        <section className={styles.single__location__grid__labels}>
          <p>{data.name}</p>
          <p>{data.weather.description}</p>
        </section>
        <section className={styles.single__location__grid__temps}>
          <p>{data.main.temp}</p>
          <section className={styles.single__location__subgrid}>
            <p>H: {data.main.temp_max}</p>
            <p>L: {data.main.temp_min}</p>
          </section>
        </section>
        <section>
          <p
            onClick={(event) => {
              deleteFromList(
                event.target.parentNode.parentNode.childNodes[0].childNodes[0]
                  .textContent
              );
            }}
            className={styles.single__location__delete}
          >
            &times;
          </p>
        </section>
      </section>
    </>
  );
};
export default SingleLocation;

//setList(list.filter((x) => x == identifyItemToBeDeleted));
