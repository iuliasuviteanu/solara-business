import CryptoCompareWidget from "../../Graphic/Graphic";
import styles from "./Volume.module.scss";
const VolumeComponent = () => {
  return (
    <div>
      <div className={styles.volume}>
        <div className={styles.volume__description}>
          <h2>Volume - Financial Informations</h2>
          <h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In,
            debitis? Corporis, molestiae id quas sunt illo vitae aspernatur
            voluptatum quam cum quasi ut. Laudantium fugiat autem fuga suscipit
            atque molestias?
          </h3>
        </div>
        <CryptoCompareWidget></CryptoCompareWidget>
        <div className={styles.volume__holders}>
          <h2>Top 10 Holders</h2>
          <div className={styles.volume__holders__table}>
            <div className={styles.volume__holders__table__head}>
              <p>Rank</p>
              <p>Holder</p>
              <p>Amount</p>
              <p>Volume</p>
            </div>
            <div className={styles.volume__holders__table__body}>
              <div>1</div>
              <div>Test Holder</div>
              <div>Test Amount</div>
              <div>Test Volume</div>
            </div>
            <div className={styles.volume__holders__table__body}>
              <div>2</div>
              <div>Test 2 Holder</div>
              <div>Test 2 Amount</div>
              <div>Test 2 Volume</div>
            </div>
            <div className={styles.volume__holders__table__body}>
              <div>3</div>
              <div>Test 3 Holder</div>
              <div>Test 3 Amount</div>
              <div>Test 3 Volume</div>
            </div>
            <div className={styles.volume__holders__table__body}>
              <div>4</div>
              <div>Test 4 Holder</div>
              <div>Test 4 Amount</div>
              <div>Test 4 Volume</div>
            </div>
            <div className={styles.volume__holders__table__body}>
              <div>5</div>
              <div>Test 5 Holder</div>
              <div>Test 5 Amount</div>
              <div>Test 5 Volume</div>
            </div>
            <div className={styles.volume__holders__table__body}>
              <div>6</div>
              <div>Test 6 Holder</div>
              <div>Test 6 Amount</div>
              <div>Test 6 Volume</div>
            </div>
            <div className={styles.volume__holders__table__body}>
              <div>7</div>
              <div>Test 7 Holder</div>
              <div>Test 7 Amount</div>
              <div>Test 7 Volume</div>
            </div>
            <div className={styles.volume__holders__table__body}>
              <div>8</div>
              <div>Test 8 Holder</div>
              <div>Test 8 Amount</div>
              <div>Test 8 Volume</div>
            </div>
            <div className={styles.volume__holders__table__body}>
              <div>9</div>
              <div>Test 9 Holder</div>
              <div>Test 9 Amount</div>
              <div>Test 9 Volume</div>
            </div>
            <div className={styles.volume__holders__table__body}>
              <div>10</div>
              <div>Test 10 Holder</div>
              <div>Test 10 Amount</div>
              <div>Test 10 Volume</div>
            </div>
          </div>
          <div className={styles.volume__trends}>
            <h2>Trends</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aut
              est debitis iure quis quas accusantium quisquam. Eligendi earum
              sed dolores amet, odio architecto alias accusamus perferendis,
              numquam similique corrupti. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Sint aut est debitis iure quis quas
              accusantium quisquam. Eligendi earum sed dolores amet, odio
              architecto alias accusamus perferendis, numquam similique
              corrupti. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Sint aut est debitis iure quis quas accusantium quisquam.
              Eligendi earum sed dolores amet, odio architecto alias accusamus
              perferendis, numquam similique corrupti. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Sint aut est debitis iure quis
              quas accusantium quisquam. Eligendi earum sed dolores amet, odio
              architecto alias accusamus perferendis, numquam similique
              corrupti. v Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Sint aut est debitis iure quis quas accusantium quisquam.
              Eligendi earum sed dolores amet, odio architecto alias accusamus
              perferendis, numquam similique corrupti.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VolumeComponent;
