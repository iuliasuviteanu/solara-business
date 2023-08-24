import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ParkBox from "@/components/client/Park/ParkBox";
import ParkDetails from "@/components/client/Park/ParkDetails/ParkDetails";
import axios from "axios";
import { useEffect, useState } from "react";

const ParkDetailsPage = () => {
  const [park, setPark] = useState([]);

  const parks = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_STRAPI_URL}/parks`,
  });

  useEffect(() => {
    parks.get("/").then((response) => {
      setPark(response.data.data);
    });
  }, []);
  return (
    <div>
      <Header />
      <ParkDetails>
        {/* {park.map((item: any) => (
          <ParkBox
            parkName={item.attributes.seller}
            amount={item.attributes.amount}
            yearlyYield={item.attributes.pricePerKwh}
            kwhAvailable={item.attributes.priceTotal}
            monthlyYield={item.attributes.monthlyYield}
            sellNow={"SELL NOW"}
            key={item.id}
          />
        ))} */}
        <ParkBox
          seller={"Andrew S."}
          amount={"3"}
          pricePerKwh={"900$"}
          priceTotal={"2,700$"}
          monthlyYield={"60,9$"}
        ></ParkBox>
        <ParkBox
          seller={"Silviu R."}
          amount={"1"}
          pricePerKwh={"800$"}
          priceTotal={"800$"}
          monthlyYield={"20,3$"}
        ></ParkBox>
        <ParkBox
          seller={"Ionut P."}
          amount={"3"}
          pricePerKwh={"883$"}
          priceTotal={"2,650$"}
          monthlyYield={"60,9$"}
        ></ParkBox>
        <ParkBox
          seller={"Mihnea G."}
          amount={"3"}
          pricePerKwh={"966$"}
          priceTotal={"2,900$"}
          monthlyYield={"60,9$"}
        ></ParkBox>
      </ParkDetails>
      <Footer />
    </div>
  );
};

export default ParkDetailsPage;
