import styles from "./Park.module.scss";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import axios from "axios";
import { useEffect } from "react";
interface ParkProps {
  title: string;
  children: any;
  isSelling?: boolean;
}
const ParkComponent = ({ title, children, isSelling }: ParkProps) => {
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
            {!isSelling ? <p>purchase kwh</p> : <p>sell kwh</p>}
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
