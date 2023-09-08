import SimpleAreaChart from "@/components/client/SimpleAreaChart";
import HeaderPark from "../HeaderPark/HeaderPark";
import styles from "./Dashboard.module.scss";
const DashboardPark = () => {
  return (
    <>
      <HeaderPark />
      <main className="main">
        <div className={styles.dashboard}>
          <div className={styles.dashboard__hero}>
            <h2>
              Invest, collect, lorem ipsum sin <br></br>dolore with us
            </h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              totam aliquid amet pariatur excepturi cupiditate, quo quam, nisi
              quae ullam temporibus, reiciendis inventore
            </h3>
          </div>
          <div className={styles.dashboard__portfolio}>
            <div className={styles.dashboard__portfolio__text}>
              <span>SOLARA</span>
              <h1>Our Portfolio</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias vel laudantium impedit blanditiis quibusdam esse
                corporis tempore quasi maxime fugiat ad dolores aspernatur
                beatae laboriosam obcaecati, error praesentium dolorem ea!
              </h3>
            </div>
            <div className={styles.dashboard__portfolio__box}>
              <div className={styles.dashboard__portfolio__box__details}>
                <span>we have</span>
                <h2>40.000 kWh</h2>
                <span>available</span>
              </div>
              <div className={styles.dashboard__portfolio__box__details}>
                <span>we have</span>
                <h2>1000</h2>
                <span>unique holders</span>
              </div>
            </div>
          </div>
          <SimpleAreaChart />
        </div>
      </main>
    </>
  );
};
export default DashboardPark;
