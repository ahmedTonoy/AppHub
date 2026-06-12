import { Outlet, ScrollRestoration, useMatches } from "react-router";
import Footer from "../../components/layout/Footer/Footer";
import Navbar from "../../components/layout/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

const Root = () => {
  const matches = useMatches();
  useEffect(() => {
    const currentMatch = matches[matches.length - 1];

    document.title =
      typeof currentMatch.handle?.title === "function"
        ? currentMatch.handle.title(currentMatch)
        : currentMatch.handle?.title || "HERO IO";
  }, [matches]);

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
      <ToastContainer />
    </div>
  );
};

export default Root;
