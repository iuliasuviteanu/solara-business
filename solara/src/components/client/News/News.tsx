import styles from "./News.module.scss";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const News = () => {
  return (
    <div className={`${styles.news} clientOverview`}>
      <div className="clientOverview-section">
        <h2>News</h2>
        <main className={styles.news__description}>
          <p>
            New Solara Park is open for purchases, SLR17L. It s a Lease model
            park, with an estimated yearly yield of around 17% for a 10 year
            duration. The client...
          </p>
          <a href="#">
            Read more <KeyboardArrowRightIcon className="right-arrow" />
          </a>
        </main>
      </div>
    </div>
  );
};

export default News;
