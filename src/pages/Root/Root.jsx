import { Outlet, ScrollRestoration } from "react-router";
import Footer from "../../components/layout/Footer/Footer";
import Navbar from "../../components/layout/Navbar/Navbar";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen font-inter">
      <div className="container px-4 lg:px-0">
        <Navbar></Navbar>
      </div>
      <div className="grow bg-[#F5F5F5]">
        <Outlet></Outlet>
      </div>
      <div className="bg-black">
        <div className="container px-4 lg:px-0">
          <Footer></Footer>
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default Root;
