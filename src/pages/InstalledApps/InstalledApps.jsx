import { useLoaderData } from "react-router";
import SortDropdown from "../../components/ui/SortDropdown/SortDropdown";
import { useState } from "react";
import { installedAppsFinder } from "../../utils/installedAppsFinder";
import InstalledAppCard from "../../components/ui/InstalledAppCard/InstalledAppCard";
import { sortItems } from "../../utils/sortItems";

const InstalledApps = () => {
  const allApps = useLoaderData();
  const [installedApps, setInstalledApps] = useState(
    () => installedAppsFinder(allApps) || [],
  );

  const totalInstalledCount = installedApps.length;

  const [sortOrder, setSortOrder] = useState("default");
  const sortField = "Downloads";

  const sortedInstalledApps = sortItems(installedApps, "downloads", sortOrder);

  return (
    <div className="container px-4 lg:px-0">
      <div className="mt-10 mb-8 text-center">
        <h1 className="mb-3 font-bold text-4xl">Your Installed Apps</h1>
        <p className="px-5 lg:px-0">
          Explore All Apps on the Market developed by us
        </p>
      </div>
      <div>
        <div className="flex flex-col md:flex-row gap-5 md:justify-between items-center">
          <h2 className="font-bold text-xl">
            <span>{totalInstalledCount}</span> Apps Found
          </h2>
          <SortDropdown setSortOrder={setSortOrder} sortField={sortField} />
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-5 mb-10">
        {sortedInstalledApps.map((app) => (
          <InstalledAppCard
            key={app.id}
            app={app}
            setInstalledApps={setInstalledApps}
          />
        ))}
      </div>
    </div>
  );
};

export default InstalledApps;
