import styles from "./Park.module.scss";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
interface ParkProps {
  title: string;
  parkName?: string;
  kwhDuration?: string;
  yearlyYield?: string;
  kwhAvailable?: string;
  children: any;
}
const ParkComponent = ({
  title,
  parkName,
  children,
  kwhDuration,
  yearlyYield,
  kwhAvailable,
}: ParkProps) => {
  return (
    <div className={styles.park__section}>
      <div className={styles.park__section__heading}>
        <h1>{title}</h1>
        <span></span>
      </div>
      <div className={styles.park__section__table}>
        <div className={styles.park__section__table__row}>
          <div className={styles.park__section__table__row__title}>
            <p>park</p>
            <p>kwh duration</p>
            <p>yearly yield</p>
            <p>kwh available</p>
            <p>purchase kwh</p>
          </div>
        </div>
        <div className={styles.park__box}>{children}</div>
        <div className={styles.seeAll}>
          <a href="#">
            See all <KeyboardArrowRightIcon className="right-arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ParkComponent;
