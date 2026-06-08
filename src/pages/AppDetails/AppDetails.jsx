import { useLoaderData, useParams } from "react-router";
import AppDetailsCard from "../../components/ui/AppDetailsCard/AppDetailsCard";
import RatingsStat from "../../components/ui/RatingsStat/RatingsStat";
import AppDescription from "../../components/ui/AppDescription/AppDescription";

const AppDetails = () => {
  const allApps = useLoaderData();
  const { id } = useParams();
  const clickedAppId = parseInt(id);
  const clickedApp = allApps.find((app) => app.id === clickedAppId);
  const { description, ratings } = clickedApp;
  return (
    <div className="container px-4 lg:px-0 py-10">
      <AppDetailsCard app={clickedApp}></AppDetailsCard>
      <RatingsStat ratings={ratings} />
      <AppDescription description={description} />
    </div>
  );
};

export default AppDetails;
