import { useEffect, useState } from "react";
import Header from "../../Header/Header";
import Earnings from "../Earnings/Earnings";
import News from "../News/News";
import ParkComponent from "../Park/Park";
import ParkBox from "../Park/ParkBox";
import Portfolio from "../Portfolio/Portfolio";
import styles from "./DashboardClient.module.scss";
import axios from "axios";
import { JsonData } from "../Park/ParkDetails/types";
const DashboardClient = () => {
  const [market, setMarket] = useState<JsonData | null>(null);

  useEffect(() => {
    fetch("/json/data.json") // Use the relative path to your JSON file
      .then((response) => response.json())
      .then((jsonData) => setMarket(jsonData));
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
          {market?.availableSolaras.map((item: any) => (
            <ParkBox
              parkName={item.park}
              kwhDuration={item.kwhDuration}
              yearlyYield={item.yearlyYield}
              kwhAvailable={item.kwhAvailable}
              buyNow="BUY NOW"
              key={item.id}
            />
          ))}
        </ParkComponent>
        <ParkComponent title={"Free Market kWh"}>
          {market?.freeMarket.map((item: any) => (
            <ParkBox
              parkName={item.park}
              kwhDuration={item.kwhDuration}
              yearlyYield={item.yearlyYield}
              kwhAvailable={item.kwhAvailable}
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
