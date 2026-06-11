import { Mosaic } from "react-loading-indicators";

const LoadingSpinner = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Mosaic color="#6e38e6" size="large" text="Loading" textColor="#6e38e6" />
    </div>
  );
};

export default LoadingSpinner;
