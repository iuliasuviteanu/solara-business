import BoltIcon from "@mui/icons-material/Bolt";
import InsightsIcon from "@mui/icons-material/Insights";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import styles from "./Portfolio.module.scss";

const Portfolio = () => {
  return (
    <div className={`${styles.portfolio} clientOverview`}>
      <div className="clientOverview-section">
        <h2>Portfolio</h2>
        <main>
          <div className={styles.kwhDetails}>
            <div className={styles.kwhDetails__icon}>
              <BoltIcon></BoltIcon>
              <p>kWh owned</p>
            </div>

            <p>15</p>
          </div>
          <div className={styles.kwhDetails}>
            <div className={styles.kwhDetails__icon}>
              <InsightsIcon />
              <p>kWh average yield</p>
            </div>

            <p>11.4%</p>
          </div>
          <div className={styles.kwhDetails}>
            <div className={styles.kwhDetails__icon}>
              <AttachMoneyIcon />
              <p>kWh traded</p>
            </div>
            <p>57</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Portfolio;
