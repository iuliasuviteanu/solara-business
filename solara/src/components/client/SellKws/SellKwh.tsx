import ParkComponent from "../Park/Park";
import ParkBox from "../Park/ParkBox";
import styles from "./SellNow.module.scss";
const SellKwh = () => {
  return (
    <div className={styles.sellkWh}>
      <h1 className={styles.sellkWh__header}>Your kWhs available for sale</h1>
      <ParkComponent title={"Available Solara kWh"} isSelling={true}>
        <ParkBox
          parkName="SLR17L"
          kwhDuration={"9y11m"}
          yearlyYield={"17%"}
          kwhAvailable={"173"}
          sellNow={"SELL NOW"}
        ></ParkBox>
        <ParkBox
          parkName="SLR12NL"
          kwhDuration={"21y4m"}
          yearlyYield={"10.5%"}
          kwhAvailable={"31"}
          sellNow={"SELL NOW"}
        ></ParkBox>
        <ParkBox
          parkName="SLR17L"
          kwhDuration={"6y11m"}
          yearlyYield={"18%"}
          kwhAvailable={"49"}
          sellNow={"SELL NOW"}
        ></ParkBox>
        <ParkBox
          parkName="SLR17L"
          kwhDuration={"4y11m"}
          yearlyYield={"17.5%"}
          kwhAvailable={"13"}
          sellNow={"SELL NOW"}
        ></ParkBox>
      </ParkComponent>
      <ParkComponent title={"Free Market kWh"} isSelling={true}>
        <ParkBox
          parkName="SLR12nl"
          kwhDuration={"21y4m"}
          yearlyYield={"10.5%"}
          kwhAvailable={"31"}
          sellNow={"SELL NOW"}
        ></ParkBox>
        <ParkBox
          parkName="SLR3L"
          kwhDuration={"3y1m"}
          yearlyYield={"16%"}
          sellNow={"SELL NOW"}
          kwhAvailable={"14"}
        ></ParkBox>
        <ParkBox
          parkName="SLR4NL"
          kwhDuration={"18y8m"}
          yearlyYield={"9%"}
          kwhAvailable={"22"}
          sellNow={"SELL NOW"}
        ></ParkBox>

        <ParkBox
          parkName="SLR10L"
          kwhDuration={"4y6m"}
          yearlyYield={"18%"}
          sellNow={"SELL NOW"}
          kwhAvailable={"5"}
        ></ParkBox>
      </ParkComponent>{" "}
    </div>
  );
};

export default SellKwh;
