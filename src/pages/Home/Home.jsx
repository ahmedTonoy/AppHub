import Banner from "../../components/layout/Banner/Banner";
import Hero from "../../components/layout/Hero/Hero";

const Home = () => {
  return (
    <>
      <div className="container px-4 md:px-0">
        <Hero></Hero>
      </div>
      <Banner></Banner>
    </>
  );
};

export default Home;
