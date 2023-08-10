import { useParkContext } from "@/context/ParkContext";
import styles from "../Park.module.scss";
import Image from "next/image";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import SimpleAreaChart from "../../SimpleAreaChart";

interface ParkProps {
  children: any;
}
const ParkDetails = ({ children }: ParkProps) => {
  const { parkDetails } = useParkContext();

  return (
    <main className="main">
      <div className={(styles.park__section, styles.park__details)}>
        <div
          className={`${styles.park__section__heading} ${styles.park__section__header}`}
        >
          <h1>
            Park: <span>{parkDetails.parkName}</span>
          </h1>
          <span></span>
        </div>
        <div
          className={(styles.park__section__details, styles.park__details__box)}
        >
          <div className={styles.park__details__box__image}>
            <Image
              src="/images/park.png"
              width={600}
              height={400}
              alt="Picture of the author"
            />
          </div>
          <div className={styles.park__details__box__right}>
            <div className={styles.park__details__box__text}>
              <h2>DETAILS</h2>
              <p>Yearly Yield</p>
            </div>
            <div className={styles.park__details__box__values}>
              <div className={styles.park__details__box__values__text}>
                <div>
                  <p>KWH DURATION</p>
                  <p>{parkDetails.kwhDuration}</p>
                </div>

                <div>
                  <p>MONTHLY YIELD %</p>
                  <p>1.85%</p>
                </div>
                <div>
                  <p>MONTHLY YIELD $/KWH</p>
                  <p>20.3$</p>
                </div>
                <div>
                  <p>PREVIOUS YEAR YIELD</p>
                  <p>232.3$</p>
                </div>
              </div>
              <div className={styles.park__details__box__values__percent}>
                <div>18.5%</div>
              </div>
            </div>
            <div className={styles.park__details__paragraph}>
              <p>
                Park built for a client who wanted solar panels for their own
                energy consumption, <br></br>of around 500kWh and with a lease
                on the panels on 10 years. <br></br>The client is a renowned
                brick factory in Romania.
              </p>
            </div>
            <div className={styles.park__details__contract}>
              <a href="#">
                <FilePresentIcon /> VIEW CONTRACT
              </a>
            </div>
          </div>
        </div>
        <div
          className={`${styles.park__section__table} ${styles.park__details__table}`}
        >
          <div className={styles.park__section__table__row}>
            <div className={styles.park__section__table__row__title}>
              <p>seller</p>
              <p>amount</p>
              <p>price per kwh</p>
              <p>price total</p>
              <p>monthly yield</p>
              <p>purchase kwh</p>
            </div>
            <div className={styles.park__box}>{children}</div>
          </div>
        </div>
      </div>
      <SimpleAreaChart />
      {/* <SimpleAreaChart /> */}
    </main>
  );
};

export default ParkDetails;
