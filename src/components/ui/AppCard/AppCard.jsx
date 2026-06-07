import downloadIcon from "../../../assets/icon-downloads.png";
import starIcon from "../../../assets/icon-ratings.png";
import { formatNumber } from "../../../utils/formatNumber";

const AppCard = ({ app }) => {
  const { title, image, downloads, ratingAvg } = app;

  return (
    <div className="bg-white flex flex-col rounded-lg p-4">
      <img className="rounded-lg" src={image} alt="" />
      <h2 className="my-3 font-bold grow">{title}</h2>
      <div className="flex justify-between items-center font-bold">
        <span className="flex items-center gap-2 rounded-lg p-2 px-4 text-[#00D390] bg-[#F1F5E8]">
          <img className="w-6" src={downloadIcon} alt="" />
          <p>{formatNumber(downloads)}</p>
        </span>
        <span className="flex items-center gap-2 rounded-lg p-2 px-4 text-[#FF8811] bg-[#FFF0E1]">
          <img className="w-6" src={starIcon} alt="" />
          <p>{ratingAvg}</p>
        </span>
      </div>
    </div>
  );
};

export default AppCard;
