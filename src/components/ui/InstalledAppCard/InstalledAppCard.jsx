import { formatNumber } from "../../../utils/formatNumber";
import downloadIcon from "../../../assets/icon-downloads.png";
import starIcon from "../../../assets/icon-ratings.png";
import { updateLs } from "../../../utils/localStorageTracker";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const InstalledAppCard = ({ app, setInstalledApps }) => {
  const { id, image, title, downloads, ratingAvg, size } = app;

  const handleClick = (id, title) => {
    updateLs(id);
    setInstalledApps((prevApps) => prevApps.filter((app) => app.id !== id));
    toast.error(`${title} uninstalled`, {
      autoClose: 2500,
      icon: <FontAwesomeIcon className="text-red-500" icon={faTrashCan} />,
    });
  };

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center bg-white p-4 rounded">
      <div className="grid grid-cols-[1fr_3fr] items-center lg:flex gap-4">
        <div className="md:w-18">
          <img className="w-full rounded-lg" src={image} alt="App image" />
        </div>
        <div className="flex flex-col gap-4 lg:justify-between">
          <h1 className="font-bold text-xl">{title}</h1>
          <div className="flex gap-8 items-center font-bold">
            <span className="flex items-center gap-2 rounded-lg text-[#00D390]">
              <img className="w-6" src={downloadIcon} alt="" />
              <p>{formatNumber(downloads)}</p>
            </span>
            <span className="flex items-center gap-2 rounded-lg text-[#FF8811]">
              <img className="w-6" src={starIcon} alt="" />
              <p>{ratingAvg}</p>
            </span>
            <span>
              <p className="font-normal text-[#627382]">{size} MB</p>
            </span>
          </div>
          <button
            onClick={() => handleClick(id, title)}
            className="lg:hidden btn bg-[#00D390] text-white font-semibold"
          >
            Uninstall
          </button>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleClick(id, title)}
          className="hidden lg:block btn bg-[#00D390] text-white font-semibold"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledAppCard;
