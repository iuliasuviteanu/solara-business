import styles from "./Earnings.module.scss";
import Image from "next/image";

const Earnings = () => {
  return (
    <div className={`${styles.earnings} clientOverview`}>
      <div className="clientOverview-section">
        <h2>Earnings</h2>
        <main>
          <div className={styles.earnings__wrapper}>
            <div className={styles.earnings__wrapper__details}>
              <div className={styles.earnings__wrapper__details}>
                <p>Last month</p>
                <span>+ 157$</span>
              </div>
              <div className={styles.earnings__wrapper__details}>
                <p>Lifetime</p>
                <span>+ 3.513$</span>
              </div>
            </div>
            <div className={styles.earnings__graphic}>
              <Image
                src="/images/solara-graphics.png"
                width={300}
                height={170}
                alt="Picture of the author"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Earnings;
