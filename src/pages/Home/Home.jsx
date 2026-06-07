import { useLoaderData } from "react-router";
import Banner from "../../components/layout/Banner/Banner";
import Hero from "../../components/layout/Hero/Hero";
import TrendingApps from "../../components/layout/TrendingApps/TrendingApps";

const Home = () => {
  const appData = useLoaderData();

  return (
    <>
      <div className="container px-4 md:px-0">
        <Hero></Hero>
      </div>
      <Banner></Banner>
      <div className="container px-4 md:px-0">
        <TrendingApps appData={appData}></TrendingApps>
      </div>
    </>
  );
};

export default Home;
