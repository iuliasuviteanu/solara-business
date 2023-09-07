import { useEffect, useState } from "react";
import Header from "../../Header/Header";
import Earnings from "../Earnings/Earnings";
import News from "../News/News";
import ParkComponent from "../Park/Park";
import ParkBox from "../Park/ParkBox";
import Portfolio from "../Portfolio/Portfolio";
import styles from "./DashboardClient.module.scss";
import axios from "axios";
const DashboardClient = () => {
  const [availableSlr, setAvailableSlr] = useState([]);
  const [freeMrk, setFreeMrk] = useState([]);

  const availableSolaras = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_STRAPIHOST}/available-solaras`,
  });

  const freeMarkets = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_STRAPIHOST}/free-markets`,
  });

  async function fetchDataSolara() {
    await availableSolaras.get("/").then((response) => {
      setAvailableSlr(response.data.data);
    });
  }

  async function fetchDataMarket() {
    await freeMarkets.get("/").then((response) => {
      setFreeMrk(response.data.data);
    });
  }
  useEffect(() => {
    fetchDataSolara();
    fetchDataMarket();
  }, []);

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
          {availableSlr.map((item: any) => (
            <ParkBox
              parkName={item.attributes.park}
              kwhDuration={item.attributes.kwhDuration}
              yearlyYield={item.attributes.yearlyYield}
              kwhAvailable={item.attributes.kwhAvailable}
              buyNow={"BUY NOW"}
              key={item.id}
            />
          ))}
        </ParkComponent>
        <ParkComponent title={"Free Market kWh"}>
          {freeMrk.map((item: any) => (
            <ParkBox
              parkName={item.attributes.park}
              kwhDuration={item.attributes.kwhDuration}
              yearlyYield={item.attributes.yearlyYield}
              kwhAvailable={item.attributes.kwhAvailable}
              buyNow={"BUY NOW"}
              key={item.id}
            />
          ))}
        </ParkComponent>
      </main>
    </div>
  );
};

export default DashboardClient;
