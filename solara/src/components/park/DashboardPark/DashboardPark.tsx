import SimpleAreaChart from "@/components/client/SimpleAreaChart";
import HeaderPark from "../HeaderPark/HeaderPark";
import styles from "./Dashboard.module.scss";
import { useState } from "react";
import VolumeComponent from "../FinancialBoxes/Volume/Volume";
import AverageSellPriceTabComponent from "../FinancialBoxes/AverageSellPrice/AverageSellPriceTabComponent";
import InitialSaleEarningsComponent from "../FinancialBoxes/InitialSaleEarnings/InitialSaleEarningsComponent";
import TradingEarningsComponent from "../FinancialBoxes/TradingEarnings/TradingEarningsComponent";
import PayoutsComponent from "../FinancialBoxes/Payouts/PayoutsComponent";
const DashboardPark = () => {
  const [activeTab, setActiveTab] = useState("Volume");
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };
  return (
    <>
      <HeaderPark />
      <main className="main">
        <div className={styles.dashboard}>
          <div className={styles.dashboard__hero}>
            <h2>
              Invest, collect, lorem ipsum sin <br></br>dolore with us
            </h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              totam aliquid amet pariatur excepturi cupiditate, quo quam, nisi
              quae ullam temporibus, reiciendis inventore
            </h3>
          </div>
          <div className={styles.dashboard__portfolio}>
            <div className={styles.dashboard__portfolio__text}>
              <span>SOLARA</span>
              <h1>Our Portfolio</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias vel laudantium impedit blanditiis quibusdam esse
                corporis tempore quasi maxime fugiat ad dolores aspernatur
                beatae laboriosam obcaecati, error praesentium dolorem ea!
              </h3>
            </div>
            <div className={styles.dashboard__portfolio__box}>
              <div className={styles.dashboard__portfolio__box__details}>
                <span>we have</span>
                <h2>40.000 kWh</h2>
                <span>available</span>
              </div>
              <div className={styles.dashboard__portfolio__box__details}>
                <span>we have</span>
                <h2>1000</h2>
                <span>unique holders</span>
              </div>
            </div>
          </div>
          <SimpleAreaChart />

          <div className={styles.dashboard__tabs}>
            <h2>Financial Metrics</h2>
            <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
            <div className={styles.dashboard__tabs__wrapper}>
              <div
                className={`${styles.dashboard__tabs__wrapper__box} ${
                  activeTab === "Volume" && styles.activeTab
                }`}
                onClick={() => handleTabClick("Volume")}
              >
                Volume
              </div>
              <div
                className={`${styles.dashboard__tabs__wrapper__box} ${
                  activeTab === "AverageSellPrice" && styles.activeTab
                }`}
                onClick={() => handleTabClick("AverageSellPrice")}
              >
                Average sell price
              </div>
              <div
                className={`${styles.dashboard__tabs__wrapper__box} ${
                  activeTab === "InitialSaleEarnings" && styles.activeTab
                }`}
                onClick={() => handleTabClick("InitialSaleEarnings")}
              >
                Earning from initial sale
              </div>
              <div
                className={`${styles.dashboard__tabs__wrapper__box} ${
                  activeTab === "TradingEarnings" && styles.activeTab
                }`}
                onClick={() => handleTabClick("TradingEarnings")}
              >
                Earnings from trading
              </div>
              <div
                className={`${styles.dashboard__tabs__wrapper__box} ${
                  activeTab === "Payouts" && styles.activeTab
                }`}
                onClick={() => handleTabClick("Payouts")}
              >
                Payouts handed
              </div>
            </div>
            {activeTab === "Volume" && <VolumeComponent />}
            {activeTab === "AverageSellPrice" && (
              <AverageSellPriceTabComponent />
            )}
            {activeTab === "InitialSaleEarnings" && (
              <InitialSaleEarningsComponent />
            )}
            {activeTab === "TradingEarnings" && <TradingEarningsComponent />}
            {activeTab === "Payouts" && <PayoutsComponent />}
          </div>
        </div>
      </main>
    </>
  );
};
export default DashboardPark;
