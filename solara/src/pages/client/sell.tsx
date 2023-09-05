import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import SellKwh from "components/client/SellKws/SellKwh";
const SellKwsPage = () => {
  return (
    <>
      <Header></Header>
      <main className="main">
        <SellKwh></SellKwh>
      </main>
      <Footer></Footer>
    </>
  );
};

export default SellKwsPage;
