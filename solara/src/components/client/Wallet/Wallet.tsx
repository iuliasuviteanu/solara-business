import styles from "./Wallet.module.scss";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";
import BoltIcon from "@mui/icons-material/Bolt";
import router from "next/router";

const Wallet = () => {
  const handleTransactionsList = () => {
    router.push("/client/transactions");
  };
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
            <span>
              <MoreHorizIcon />
            </span>
          </div>
          <div className={styles.wallet__bottom__left__card}>
            <div className={styles.wallet__bottom__left__card__header}>
              <p>JOHN DOE</p>
              <i
                className={
                  styles.wallet__bottom__left__card__header__mastercard__icon
                }
              ></i>
            </div>
            <div className={styles.wallet__bottom__left__card__content}>
              $4,343<span>.97</span>
            </div>
            <div className={styles.wallet__bottom__left__card__bottom}>
              <p> 7856 **** **** **** 8787</p>
              <p>newBank</p>
            </div>
          </div>
          <div className={styles.wallet__bottom__left__addNew}>
            <h3>New card?</h3>
            <span>
              <AddIcon />
            </span>
          </div>
        </div>
        <div className={styles.wallet__bottom__right}>
          <div className={styles.wallet__bottom__right__list}>
            <p className={styles.wallet__bottom__right__title}>
              Last transactions
            </p>
            <span onClick={handleTransactionsList}>
              <MoreHorizIcon />
            </span>
          </div>

          <div className={styles.wallet__bottom__right__transaction}>
            <div className={styles.wallet__bottom__right__transaction__name}>
              <div>
                <BoltIcon></BoltIcon>
              </div>
              <span>SLR17 kWh selled</span>
            </div>
            <div className={styles.wallet__bottom_right__transaction__amount}>
              - $10
            </div>
          </div>
          <div className={styles.wallet__bottom__right__transaction}>
            <div className={styles.wallet__bottom__right__transaction__name}>
              <div>
                <BoltIcon></BoltIcon>
              </div>
              <span>SLR17 kWh selled</span>
            </div>
            <div className={styles.wallet__bottom_right__transaction__amount}>
              - $104
            </div>
          </div>
          <div className={styles.wallet__bottom__right__transaction}>
            <div className={styles.wallet__bottom__right__transaction__name}>
              <div>
                <BoltIcon></BoltIcon>
              </div>
              <span>SLR17 kWh selled</span>
            </div>
            <div className={styles.wallet__bottom_right__transaction__amount}>
              + $250.4
            </div>
          </div>
          <div className={styles.wallet__bottom__right__transaction}>
            <div className={styles.wallet__bottom__right__transaction__name}>
              <div>
                <BoltIcon></BoltIcon>
              </div>
              <span>SLR17 kWh selled</span>
            </div>
            <div className={styles.wallet__bottom_right__transaction__amount}>
              + $1000
            </div>
          </div>
          <div className={styles.wallet__bottom__right__transaction}>
            <div className={styles.wallet__bottom__right__transaction__name}>
              <div>
                <BoltIcon></BoltIcon>
              </div>
              <span>SLR17 kWh selled</span>
            </div>
            <div className={styles.wallet__bottom_right__transaction__amount}>
              + $1000
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
