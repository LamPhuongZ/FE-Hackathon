// import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import HowItWorks from "../components/how-it-works/howItWorks";

export default function HomeTemplate() {
  return (
    <>
      <Header />
      <div
        className="content-layout pt-20 bg-white"
        style={{ minHeight: "80vh" }}
      >
        <HowItWorks></HowItWorks>
      </div>
      <Footer />
    </>
  );
}
