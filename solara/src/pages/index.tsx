import { Inter } from "@next/font/google";
import LoginPage from "./login";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="main">
        <LoginPage></LoginPage>
      </main>
    </>
  );
}
