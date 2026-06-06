import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import appLogo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center grid-flow-row md:grid-flow-col md:place-items-start md:text-left bg-black text-neutral-content pt-10">
        <aside className="md:place-items-start">
          <Link to="/">
            <div className="flex gap-2 items-center mb-2">
              <img className="w-8" src={appLogo} alt="App Logo" />
              <p className="font-bold text-2xl text-white">HERO.IO</p>
            </div>
          </Link>
          <p className="md:max-w-100">
            <span className="font-bold">Hero.io</span>, your premier all-in-one
            digital marketplace engineered to provide the safest, fastest, and
            most diverse selection of mobile applications available today. We
            bridge the gap between innovation and accessibility.
          </p>
        </aside>
        <nav className="md:place-items-start md:justify-self-center">
          <h6 className="font-medium text-xl text-white mb-2">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Sales</a>
        </nav>
        <nav className="md:place-items-start md:justify-self-center">
          <h6 className="font-medium text-xl text-white mb-2">Services</h6>
          <a className="link link-hover">Products & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav className="md:place-items-start md:justify-self-center">
          <h6 className="font-medium text-xl text-white mb-2">Information</h6>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Join Us</a>
        </nav>
        <nav className="md:place-items-start md:justify-self-end">
          <h6 className="font-medium text-xl text-white mb-2">Social Links</h6>
          <a className="link link-hover">
            <span className="p-0.5 rounded-full bg-white mr-1">
              <FontAwesomeIcon
                className="text-black"
                icon={faXTwitter}
              ></FontAwesomeIcon>
            </span>
            @Hero.io
          </a>
          <a className="link link-hover">
            <span className="p-0.5 rounded-full bg-white mr-1">
              <FontAwesomeIcon
                className="text-black"
                icon={faLinkedinIn}
              ></FontAwesomeIcon>
            </span>
            @Hero.io
          </a>
          <a className="link link-hover">
            <span className="p-0.5 rounded-full bg-white mr-1">
              <FontAwesomeIcon
                className="text-black"
                icon={faFacebookF}
              ></FontAwesomeIcon>
            </span>
            @Hero.io
          </a>
          <a className="link link-hover">
            <span className="p-0.5 rounded-full bg-white mr-1">
              <FontAwesomeIcon
                className="text-black"
                icon={faEnvelope}
              ></FontAwesomeIcon>
            </span>
            support@Hero.io
          </a>
        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center text-white mt-0 py-5">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            HERO.IO
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
