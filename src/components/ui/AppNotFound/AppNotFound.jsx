import noAppImg from "../../../assets/App-Error.png";

const AppNotFound = ({ resetSearch }) => {
  return (
    <div className="h-full my-10">
      <div className="flex flex-col items-center justify-center gap-2 text-center px-4 lg:px-0">
        <img
          className="w-1/5"
          src={noAppImg}
          alt="App not found symbolic image"
        />
        <h1 className="text-2xl font-semibold">OOPS, APP NOT FOUND!</h1>
        <p className="text-lg">
          The App you are requesting is not found on our system. Please try
          another app
        </p>
        <p
          onClick={resetSearch}
          className="btn px-10 text-xl text-white bg-linear-to-br from-[#6e38e6] to-[#985cf0]"
        >
          Go Back!
        </p>
      </div>
    </div>
  );
};

export default AppNotFound;
