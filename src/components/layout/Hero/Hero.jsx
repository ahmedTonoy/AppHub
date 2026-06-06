import googlePlay from "../../../assets/google-play.png";
import appStore from "../../../assets/app-store.png";

const Hero = () => {
  return (
    <div className="flex flex-col gap-4 text-center mt-10 mb-4 py-5">
      <h1 className="text-6xl font-extrabold">
        We Build
        <br />
        <span className="gradient-title">Productive</span> Apps
      </h1>
      <p className="text-[#627382] hidden md:block">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br />
        Our goal is to turn your ideas into digital experiences that truly make
        an impact.
      </p>
      <p className="text-[#627382] md:hidden">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="flex justify-center gap-5 mt-3">
        <button className="btn bg-transparent border-[#627382]">
          <img className="w-5" src={googlePlay} alt="" />
          Google Play
        </button>
        <button className="btn bg-transparent border-[#627382]">
          <img className="w-6" src={appStore} alt="" />
          App Store
        </button>
      </div>
    </div>
  );
};

export default Hero;
