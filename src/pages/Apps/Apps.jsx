import { useLoaderData } from "react-router";
import AppCard from "../../components/ui/AppCard/AppCard";
import { useEffect, useMemo, useState } from "react";
import AppNotFound from "../../components/ui/AppNotFound/AppNotFound";
import { MagnifyingGlass } from "react-loader-spinner";

const Apps = () => {
  const allApps = useLoaderData();

  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const resetSearch = () => {
    setDebouncedQuery("");
    setQuery("");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  const isSearching = query !== debouncedQuery;

  const appsToShow = useMemo(() => {
    return allApps.filter((app) =>
      app.title.toLowerCase().includes(debouncedQuery.toLowerCase()),
    );
  }, [allApps, debouncedQuery]);

  const totalApps = appsToShow.length;

  return (
    <>
      {appsToShow.length === 0 ? (
        <AppNotFound resetSearch={resetSearch} />
      ) : (
        <div className="container px-4 lg:px-0">
          <div className="mt-10 mb-8 text-center">
            <h1 className="mb-3 font-bold text-4xl">Our All Applications</h1>
            <p className="px-5 lg:px-0">
              Explore All Apps on the Market developed by us. We code for
              Millions
            </p>
          </div>
          <div>
            <div className="flex flex-col md:flex-row gap-5 md:justify-between items-center">
              <h2 className="font-bold text-xl">
                <span>({totalApps})</span> Apps Found
              </h2>
              <label className="input">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="search"
                  placeholder="Search Apps"
                />
              </label>
            </div>
          </div>
          {isSearching ? (
            <div className="flex justify-center items-center">
              <MagnifyingGlass height="200" width="200" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  mt-5 mb-10">
              {appsToShow.map((app) => (
                <AppCard key={app.id} app={app}></AppCard>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Apps;
