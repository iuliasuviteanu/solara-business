import BoltIcon from "@mui/icons-material/Bolt";
import styles from "../Wallet/Wallet.module.scss";
interface TransactionListProp {
  transactionName: string;
  transactionPrice: string;
  downloadButton?: boolean;
}
const TransactionList = ({
  transactionName,
  transactionPrice,
  downloadButton,
}: TransactionListProp) => {
  const transactionsList = downloadButton ? "transactionsList" : "";
  return (
    <div className={transactionsList}>
      <div className={styles.wallet__bottom__right__transaction}>
        <div className={styles.wallet__bottom__right__transaction__name}>
          <div>
            <BoltIcon></BoltIcon>
          </div>
          <span>{transactionName}</span>
        </div>
        <div className={styles.wallet__bottom_right__transaction__amount}>
          {transactionPrice}
        </div>
        {downloadButton ? <button>Download PDF</button> : null}
      </div>
    </div>
  );
};

export default TransactionList;
