import styles from "./Park.module.scss";

export interface ParkInterface {
  parkName: string;
  kwhDuration: string;
  yearlyYield: string;
  kwhAvailable: string;
}

const ParkBox = ({
  parkName,
  kwhDuration,
  yearlyYield,
  kwhAvailable,
}: ParkInterface) => {
  return (
    // <div className={styles.park__section__table__row}>
    <div
      className={`${styles.park__section__table__row__title} ${styles.park__section__table__row__desc}`}
    >
      <p className={styles.park__section__table__row__parkName}>{parkName}</p>
      <p className={styles.park__section__table__row__kwhDuration}>
        {kwhDuration}
      </p>
      <p className={styles.park__section__table__row__yearlyYield}>
        {yearlyYield}
      </p>
      <p className={styles.park__section__table__row__kwhAvailable}>
        {kwhAvailable}
      </p>
      <button className={styles.park__section__table__row__buyNow}>
        BUY NOW
      </button>
    </div>
  );
};

export default ParkBox;
