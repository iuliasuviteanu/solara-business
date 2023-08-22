import styles from "./Wallet.module.scss";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import SouthEastIcon from "@mui/icons-material/SouthEast";

const Wallet = () => {
  return (
    <div className={styles.wallet}>
      <h1>My wallet</h1>

      <div className={styles.balance}>
        <div className={styles.balance__left}>
          <h3>My balance</h3>
          <h2>$ 3559</h2>
        </div>
        <div className={styles.balance__right}>
          <div className={styles.balance__right__box}>
            <h3>
              Income / <span>month</span>
            </h3>
            <h2> $ 1000</h2>
            <p>
              <span>
                <ArrowOutwardIcon />
              </span>
              + 10,2 %
            </p>
          </div>
          <div className={styles.balance__right__box}>
            <h3>
              Spendings / <span>month</span>
            </h3>
            <h2> $ 2000</h2>
            <p>
              <span>
                <SouthEastIcon />
              </span>
              - 5 %
            </p>
          </div>
        </div>
      </div>
      <div className={styles.wallet__bottom}>
        <div className={styles.wallet___bottom__left}>
          <div className={styles.wallet__bottom__left__header}>
            <h3>My credit cards</h3>
            <span>...</span>
          </div>
          <div className={styles.wallet_bottom__left__card}>
            here goes ur card
          </div>
          <div className={styles.wallet__bottom__left__addNew}>
            <h3>New card? +</h3>
          </div>
        </div>
        <div className={styles.wallet___bottom__right}>
          <div className={styles.wallet__bottom__right__transaction}>
            <p>
              <span className={styles.wallet_bottom_right__transaction__name}>
                SLR17
              </span>
            </p>
            <p className={styles.wallet__bottom_right__transaction__amount}>
              - $10
            </p>
          </div>
          <div className={styles.wallet__bottom__right__transaction}>
            <p>
              <span className={styles.wallet_bottom_right__transaction__name}>
                SLR17
              </span>
            </p>
            <p className={styles.wallet__bottom_right__transaction__amount}>
              + $40
            </p>
          </div>
          <div className={styles.wallet__bottom__right__transaction}>
            <p>
              <span className={styles.wallet_bottom_right__transaction__name}>
                SLR17
              </span>
            </p>
            <p className={styles.wallet__bottom_right__transaction__amount}>
              - $10
            </p>
          </div>
          <div className={styles.wallet__bottom__right__transaction}>
            <p>
              <span className={styles.wallet_bottom_right__transaction__name}>
                SLR13
              </span>
            </p>
            <p className={styles.wallet__bottom_right__transaction__amount}>
              + $20
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
