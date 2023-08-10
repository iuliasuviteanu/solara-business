import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ParkBox from "@/components/client/Park/ParkBox";
import ParkDetails from "@/components/client/Park/ParkDetails/ParkDetails";

const ParkDetailsPage = () => {
  return (
    <div>
      <Header />
      <ParkDetails>
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
