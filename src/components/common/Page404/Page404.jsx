import img404 from "../../../assets/error-404.png";
import { Link } from "react-router";

const Page404 = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4 text-center px-4 lg:px-0">
        <img
          className="w-8/10"
          src={img404}
          alt="Page not found symbolic image"
        />
        <h1 className="text-5xl font-semibold">Oops, page not found!</h1>
        <p className="text-xl">
          The page you are looking for is not available.
        </p>
        <Link to="/">
          <p className="btn px-10 text-xl text-white bg-linear-to-br from-[#6e38e6] to-[#985cf0]">
            Go Back!
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Page404;
