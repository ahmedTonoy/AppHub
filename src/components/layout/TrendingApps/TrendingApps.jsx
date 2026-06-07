import { Link } from "react-router";
import AppCard from "../../ui/AppCard/AppCard";

const TrendingApps = ({ appData }) => {
  const trendingApps = appData.slice(0, 8);
  return (
    <div className="py-10">
      <div className="flex flex-col gap-3 text-center mb-8">
        <h1 className="font-bold text-4xl">Trending Apps</h1>
        <p>Explore All Trending Apps on the Market Developed by Us</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trendingApps.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
      <Link to="/apps">
        <button className="btn block w-fit mx-auto mt-8 text-white bg-linear-to-br from-[#6e38e6] to-[#985cf0]">
          Show All
        </button>
      </Link>
    </div>
  );
};

export default TrendingApps;
