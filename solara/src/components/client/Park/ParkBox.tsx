import { useRouter } from "next/router";
import styles from "./Park.module.scss";
import { useEffect, useState } from "react";
import ParkDetailsPage from "@/pages/client/park-details";
import { useParkContext } from "@/context/ParkContext";
import SellNow from "../SellKws/SellNow";

export interface ParkInterface {
  parkName?: string;
  kwhDuration?: string;
  yearlyYield?: string;
  kwhAvailable?: string;
  seller?: string;
  amount?: string;
  pricePerKwh?: string;
  priceTotal?: string;
  monthlyYield?: string;
  buyNow?: string;
  sellNow?: string;
}
const ParkBox = ({
  parkName,
  kwhDuration,
  yearlyYield,
  kwhAvailable,
  seller,
  amount,
  pricePerKwh,
  priceTotal,
  monthlyYield,
  buyNow,
  sellNow,
}: ParkInterface) => {
  const {
    parkDetails,
    setParkDetails,
    isParkDetailed,
    setIsParkDetailed,
    isOpen,
    setIsOpen,
  } = useParkContext();
  const router = useRouter();
  const [showDialog, setShowDialog] = useState(false);

  const handleBuyNowOnClick = () => {
    router.push("/client/park-details");
    setParkDetails({
      parkName: parkName || "",
      kwhDuration: kwhDuration || "",
      kwhAvailable: kwhAvailable || "",
      yearlyYield: yearlyYield || "",
    });
    setIsParkDetailed(!isParkDetailed);
  };

  const handleSellNowOnClick = () => {
    setShowDialog(true);
    setIsOpen(true);
  };

  const dashboardParkDetails = (
    <>
      <p className={styles.park__section__table__row__parkName}>{parkName}</p>
      <p className={styles.park__section__table__row__kwhDuration}>
        {kwhDuration}
      </p>
      <p className={styles.park__section__table__row__yearlyYield}>
        {yearlyYield}
      </p>
      <p className={styles.park__section__table__row__kwhAvailable}>
        {kwhAvailable}
      </p>
      {buyNow ? (
        <button
          onClick={handleBuyNowOnClick}
          className={styles.park__section__table__row__buyNow}
        >
          {buyNow}
        </button>
      ) : (
        <button
          onClick={handleSellNowOnClick}
          className={styles.park__section__table__row__buyNow}
        >
          {sellNow}
        </button>
      )}
      {showDialog ? <SellNow /> : null}
    </>
  );

  const parkDetailsComponent = (
    <>
      <p className={styles.park__section__table__row__parkName}>{seller}</p>
      <p className={styles.park__section__table__row__kwhDuration}>
        {amount} <span>kWh</span>
      </p>
      <p className={styles.park__section__table__row__yearlyYield}>
        {pricePerKwh}
      </p>
      <p className={styles.park__section__table__row__kwhAvailable}>
        {priceTotal}
      </p>
      <p className={styles.park__section__table__row__kwhAvailable}>
        {monthlyYield}
      </p>
      <button
        onClick={handleBuyNowOnClick}
        className={styles.park__section__table__row__buyNow}
      >
        BUY NOW
      </button>
    </>
  );
  return (
    // <div className={styles.park__section__table__row}>

    <div
      className={`${styles.park__section__table__row__title} ${styles.park__section__table__row__desc}`}
    >
      {!isParkDetailed ? dashboardParkDetails : parkDetailsComponent}
    </div>
  );
};

export default ParkBox;
