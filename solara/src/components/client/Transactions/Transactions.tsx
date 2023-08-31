import { Stack } from "@mui/system";
import SimpleAreaChart from "../SimpleAreaChart";
import TransactionList from "./TransactionList";
import styles from "./Transactions.module.scss";
import Pagination from "@mui/material/Pagination";

const Transactions = () => {
  return (
    <div className={styles.transactions}>
      <div className={styles.transactions__history}>
        <h1>Transactions History</h1>
        <div>
          <TransactionList
            transactionName={"SLR17 kWh selled "}
            downloadButton={true}
            transactionPrice={"-10$"}
          />
          <TransactionList
            transactionName={"SLR17 kWh selled "}
            downloadButton={true}
            transactionPrice={"-10$"}
          />
          <TransactionList
            transactionName={"SLR17 kWh selled "}
            downloadButton={true}
            transactionPrice={"-10$"}
          />
          <TransactionList
            transactionName={"SLR17 kWh selled "}
            downloadButton={true}
            transactionPrice={"-10$"}
          />
          <TransactionList
            transactionName={"SLR17 kWh selled "}
            downloadButton={true}
            transactionPrice={"-10$"}
          />
          <TransactionList
            transactionName={"SLR17 kWh selled "}
            downloadButton={true}
            transactionPrice={"-10$"}
          />
          <Stack spacing={2} className={styles.transactions__pagination}>
            <Pagination count={10} />
          </Stack>
        </div>
      </div>
      <div className={styles.transactions__graphic}>
        <div className={styles.transactions__graphic__header}>
          <h3>Your Balance Chart</h3>
          <span></span>
        </div>

        <SimpleAreaChart />
      </div>
    </div>
  );
};
export default Transactions;
