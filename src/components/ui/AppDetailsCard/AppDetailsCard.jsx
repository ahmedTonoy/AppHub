import { useState } from "react";
import downloadIcon from "../../../assets/icon-downloads.png";
import ratingIcon from "../../../assets/icon-ratings.png";
import reviewIcon from "../../../assets/icon-review.png";
import { formatNumber } from "../../../utils/formatNumber";
import {
  checkInstallation,
  updateLs,
} from "../../../utils/localStorageTracker";
import { toast } from "react-toastify";

const AppDetailsCard = ({ app }) => {
  const { id, title, image, companyName, size, downloads, reviews, ratingAvg } =
    app;

  const [isInstalled, setIsInstalled] = useState(checkInstallation(id));
  const handleClick = (id, title) => {
    setIsInstalled(true);
    updateLs(id);
    toast.success(`${title} installed successfully!`, { autoClose: 2500 });
  };

  return (
    <div className="flex flex-col md:items-stretch md:flex-row md:gap-12 pb-10 mb-10 border-b border-b-[#627382]">
      <div className="md:w-80 p-6 rounded-lg bg-white">
        <img
          className="rounded-lg w-full h-full object-cover"
          src={image}
          alt=""
        />
      </div>
      <div className="flex-1">
        <h1 className="font-extrabold text-4xl mt-5 md:mt-0 mb-2">{title}</h1>
        <h2 className="text-xl text-[#627382] pb-7 mb-10 border-b border-b-[#627382]">
          Developed by{" "}
          <span className="font-bold gradient-title">{companyName}</span>
        </h2>
        <div className="flex justify-center md:justify-start text-center md:text-left gap-15">
          <div className="flex flex-col gap-3">
            <img className="w-10 mx-auto md:mx-0" src={downloadIcon} alt="" />
            <h3 className="text-[#001931] grow">Downloads</h3>
            <p className="font-extrabold text-4xl">{formatNumber(downloads)}</p>
          </div>
          <div className="flex flex-col gap-3">
            <img className="w-10 mx-auto md:mx-0" src={ratingIcon} alt="" />
            <h3 className="text-[#001931] grow">Average Rating</h3>
            <p className="font-extrabold text-4xl">{formatNumber(ratingAvg)}</p>
          </div>
          <div className="flex flex-col gap-3">
            <img className="w-10 mx-auto md:mx-0" src={reviewIcon} alt="" />
            <h3 className="text-[#001931] grow">Total Reviews</h3>
            <p className="font-extrabold text-4xl">{formatNumber(reviews)}</p>
          </div>
        </div>
        <button
          onClick={() => handleClick(id, title)}
          disabled={isInstalled}
          className={`btn bg-[#00D390] text-white font-semibold w-full md:w-fit mx-auto md:mx-0 mt-9 text-xl ${isInstalled ? "disabled: cursor-not-allowed disabled: opacity-70" : ""}`}
        >
          {isInstalled ? "Installed" : "Install Now"} ({size} MB)
        </button>
      </div>
    </div>
  );
};

export default AppDetailsCard;
