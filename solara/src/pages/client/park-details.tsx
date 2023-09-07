import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ParkBox from "@/components/client/Park/ParkBox";
import ParkDetails from "@/components/client/Park/ParkDetails/ParkDetails";
import axios from "axios";
import { useEffect, useState } from "react";

const ParkDetailsPage = () => {
  const [park, setPark] = useState([]);

  const parks = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_STRAPIHOST}/parks`,
  });

  async function fetchData() {
    await parks.get("/").then((response) => {
      setPark(response.data.data);
    });
  }
  useEffect(() => {
    fetchData();
  }, []);

  {
    park.map((item: any) => console.log(item.attributes.seller));
  }
  return (
    <div>
      <Header />
      <ParkDetails>
        {park.map((item: any) => (
          <ParkBox
            seller={item.attributes.seller}
            amount={item.attributes.amount}
            pricePerKwh={item.attributes.pricePerKwh}
            priceTotal={item.attributes.priceTotal}
            monthlyYield={item.attributes.monthlyYield}
            key={item.id}
          />
        ))}
      </ParkDetails>
      <Footer />
    </div>
  );
};

export default ParkDetailsPage;
