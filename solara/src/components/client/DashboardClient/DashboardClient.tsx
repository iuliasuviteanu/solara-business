import Header from "../../Header/Header";
import Earnings from "../Earnings/Earnings";
import News from "../News/News";
import ParkComponent from "../Park/Park";
import ParkBox from "../Park/ParkBox";
import Portfolio from "../Portfolio/Portfolio";
import styles from "./DashboardClient.module.scss";

const DashboardClient = () => {
  return (
    <div>
      <Header></Header>
      <main className={`${styles.dashboard} main`}>
        <div className={styles.dashboard__desc}>
          <Portfolio></Portfolio>
          <Earnings></Earnings>
          <News></News>
        </div>
        <ParkComponent title={"Available Solara kWh"}>
          <ParkBox
            parkName="SLR17L"
            kwhDuration={"9y11m"}
            yearlyYield={"17%"}
            kwhAvailable={"173"}
            buyNow={"BUY NOW"}
          ></ParkBox>
          <ParkBox
            parkName="SLR12NL"
            kwhDuration={"21y4m"}
            yearlyYield={"10.5%"}
            kwhAvailable={"31"}
            buyNow={"BUY NOW"}
          ></ParkBox>
          <ParkBox
            parkName="SLR17L"
            kwhDuration={"6y11m"}
            yearlyYield={"18%"}
            kwhAvailable={"49"}
            buyNow={"BUY NOW"}
          ></ParkBox>
          <ParkBox
            parkName="SLR17L"
            kwhDuration={"4y11m"}
            yearlyYield={"17.5%"}
            kwhAvailable={"13"}
            buyNow={"BUY NOW"}
          ></ParkBox>
        </ParkComponent>
        <ParkComponent title={"Free Market kWh"}>
          <ParkBox
            parkName="SLR12nl"
            kwhDuration={"21y4m"}
            yearlyYield={"10.5%"}
            kwhAvailable={"31"}
            buyNow={"BUY NOW"}
          ></ParkBox>
          <ParkBox
            parkName="SLR3L"
            kwhDuration={"3y1m"}
            yearlyYield={"16%"}
            kwhAvailable={"14"}
            buyNow={"BUY NOW"}
          ></ParkBox>
          <ParkBox
            parkName="SLR4NL"
            kwhDuration={"18y8m"}
            yearlyYield={"9%"}
            kwhAvailable={"22"}
            buyNow={"BUY NOW"}
          ></ParkBox>

          <ParkBox
            parkName="SLR10L"
            kwhDuration={"4y6m"}
            yearlyYield={"18%"}
            kwhAvailable={"5"}
            buyNow={"BUY NOW"}
          ></ParkBox>
          <ParkBox
            parkName="SLR7L"
            kwhDuration={"7y4m"}
            yearlyYield={"17%"}
            kwhAvailable={"11"}
            buyNow={"BUY NOW"}
          ></ParkBox>
        </ParkComponent>
      </main>
    </div>
  );
};

export default DashboardClient;
