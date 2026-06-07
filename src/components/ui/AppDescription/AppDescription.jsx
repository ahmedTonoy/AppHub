import { splitIntoThreeParagraphs } from "../../../utils/splitIntoThreeParagraphs";

const AppDescription = ({ description }) => {
  const paragraphs = splitIntoThreeParagraphs(description);
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-2">Description</h1>
      <div className="flex flex-col gap-5 text-justify">
        <p>{paragraphs[0]}</p>
        <p>{paragraphs[1]}</p>
        <p>{paragraphs[2]}</p>
      </div>
    </div>
  );
};

export default AppDescription;
