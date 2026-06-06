import bannerImg from "../../../assets/hero copy.png";

const Banner = () => {
  return (
    <div className="flex flex-col">
      <img
        className="w-8/10 md:w-2/5 mx-auto"
        src={bannerImg}
        alt="Banner Image"
      />
      <div className="flex flex-col gap-8 text-white bg-linear-to-br from-[#6e38e6] to-[#985cf0] py-15">
        <h1 className="text-4xl text-center font-bold">
          Trusted By Millions, Built for You
        </h1>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-3">
            <p className="text-xs">Total Downloads</p>
            <h1 className="text-5xl font-extrabold">29.6M</h1>
            <p className="text-xs">21% more than last month</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <p className="text-xs">Total Reviews</p>
            <h1 className="text-5xl font-extrabold">906K</h1>
            <p className="text-xs">46% more than last month</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <p className="text-xs">Active Apps</p>
            <h1 className="text-5xl font-extrabold">132+</h1>
            <p className="text-xs">13 more will be launched</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
