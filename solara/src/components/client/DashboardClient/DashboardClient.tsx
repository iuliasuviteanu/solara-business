import Header from "../../Header/Header";
import Earnings from "../Earnings/Earnings";
import News from "../News/News";
import ParkComponent from "../Park/Park";
import ParkBox from "../Park/ParkBox";
import Portfolio from "../Portfolio/Portfolio";
import SimpleAreaChart from "../SimpleAreaChart";
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
          ></ParkBox>
          <ParkBox
            parkName="SLR12NL"
            kwhDuration={"21y4m"}
            yearlyYield={"10.5%"}
            kwhAvailable={"31"}
          ></ParkBox>
          <ParkBox
            parkName="SLR17L"
            kwhDuration={"6y11m"}
            yearlyYield={"18%"}
            kwhAvailable={"49"}
          ></ParkBox>
          <ParkBox
            parkName="SLR17L"
            kwhDuration={"4y11m"}
            yearlyYield={"17.5%"}
            kwhAvailable={"13"}
          ></ParkBox>
        </ParkComponent>
        <ParkComponent title={"Free Market kWh"}>
          <ParkBox
            parkName="SLR12nl"
            kwhDuration={"21y4m"}
            yearlyYield={"10.5%"}
            kwhAvailable={"31"}
          ></ParkBox>
          <ParkBox
            parkName="SLR3L"
            kwhDuration={"3y1m"}
            yearlyYield={"16%"}
            kwhAvailable={"14"}
          ></ParkBox>
          <ParkBox
            parkName="SLR4NL"
            kwhDuration={"18y8m"}
            yearlyYield={"9%"}
            kwhAvailable={"22"}
          ></ParkBox>

          <ParkBox
            parkName="SLR10L"
            kwhDuration={"4y6m"}
            yearlyYield={"18%"}
            kwhAvailable={"5"}
          ></ParkBox>
          <ParkBox
            parkName="SLR7L"
            kwhDuration={"7y4m"}
            yearlyYield={"17%"}
            kwhAvailable={"11"}
          ></ParkBox>
        </ParkComponent>
      </main>
    </div>
  );
};

export default DashboardClient;
