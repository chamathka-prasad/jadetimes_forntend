import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaTiktok, FaXTwitter, FaYoutube, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

import Logo from "/footer-logo.png";

import navPaths from "../routes/navPaths";

import useWindowSize from "../hooks/useWindowSize";

const Footer = () => {
  const screenSize = useWindowSize();
  const emailRef = useRef(null);
  function handleSubmit(event) {
    event.preventDefault();
    emailRef.current.value = "";
  }
  return (
    <footer className="border-t border-t-black">
      <div className="max-w-[1407px] mx-auto p-4">
        <div className="my-8 mb-12 lg:flex lg:flex-row lg:justify-between">
          <div className="mb-4 lg:mb-0">
            <Link to="/" className="block mx-auto min-w-32 max-w-44 lg:max-w-52 order-2">
              <img src={Logo} alt="jadetimes logo" />
            </Link>
            {screenSize !== "large" && (
              <ul className="flex flex-col gap-4 text-center text-[#282626] text-sm text-nowrap my-4">
                <li>
                  <Link to="/about-jadetimes">About Jadetimes</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-and-conditions">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/shop">Jadetimes Shop</Link>
                </li>
                <li>
                  <Link to="/job-vacancies">Jobs At Jadetimes</Link>
                </li>
                <li>
                  <Link to="/advertise-with-us">Get Published Online Articles</Link>
                </li>
              </ul>
            )}
            <div className="text-sm flex flex-row items-center justify-center max-w-lg mx-auto whitespace-nowrap border-t border-t-[#17171724] pt-4 lg:text-xs lg:border-none lg:pt-0 lg:mt-3">
              <Link to="/advertise-with-us" className="lg:hover:underline">
                Advertise with us
              </Link>
              <span className="w-[1px] h-3 bg-neutral-800 mx-2"></span>
              <Link to="/talk-to-us" className="lg:hover:underline">
                Talk to us
              </Link>
            </div>
          </div>
          <form className="flex flex-col items-center gap-4 lg:flex-row" onSubmit={handleSubmit}>
            <label htmlFor="email" className="uppercase block text-center text-lg lg:text-[0.8125rem] text-nowrap lg:mb-0">
              Sign up for our newsletter
            </label>
            <div className="flex flex-row gap-[1px] max-w-lg w-full">
              <input
                className="text-sm w-full py-1 px-5 border border-neutral-300 focus-visible:outline-none lg:w-96 focus:bg-neutral-300 focus:border-b-2 focus:border-b-black lg:hover:bg-neutral-300 lg:hover:border-b-2 lg:hover:border-b-black"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="on"
                pattern="^.+@.+\.[a-zA-Z]{2,63}$"
                required
                ref={emailRef}
              />
              <button
                type="submit"
                className="uppercase text-nowrap bg-neutral-800 text-white text-xs border border-neutral-800 duration-300 py-[0.625rem] px-3 lg:hover:bg-[#FF322E] lg:hover:border-[#FF322E] lg:px-9"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        {screenSize === "large" && (
          <nav className="border-t border-b border-neutral-200 py-4 text-[#515151] 2xl:flex 2xl:items-center 2xl:justify-center 2xl:gap-3">
            <ul className="text-xs flex flex-row items-center justify-center gap-3 flex-wrap font-semibold">
              {navPaths.slice(1, navPaths.length).map((path) => (
                <li key={path.key} className="gap-4">
                  <Link to={path.to} className="inline-block duration-300 hover:underline">
                    {path.name}
                  </Link>
                </li>
              ))}
              {navPaths[1].submenus.map((submenu) => (
                <li key={submenu.key} className="gap-4">
                  <Link to={submenu.to} className="inline-block duration-300 hover:underline">
                    {submenu.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-row gap-3 w-full justify-center text-lg mt-3 2xl:w-auto 2xl:justify-normal 2xl:mt-0">
              <li className="flex">
                <a href="https://www.whatsapp.com/channel/0029VaevKQj35fM4n9S7ub1c" aria-label="whatsapp" target="_black">
                  <FaWhatsapp />
                </a>
              </li>
              <li className="flex">
                <a href="https://www.tiktok.com/@jadetimes_officials" aria-label="tiktok" target="_blank">
                  <FaTiktok />
                </a>
              </li>
              <li className="flex">
                <a href="https://x.com/jade_times" aria-label="x-twitter" target="_blank">
                  <FaXTwitter />
                </a>
              </li>
              <li className="flex">
                <a href="https://www.facebook.com/officialJadetimes" aria-label="facebook" target="_blank">
                  <FaFacebookF />
                </a>
              </li>
              <li className="flex">
                <a href="https://www.youtube.com/channel/UCh3RLLVBaEeBRRZBbnnVWWA" aria-label="youtube" target="_blank">
                  <FaYoutube />
                </a>
              </li>
              <li className="flex">
                <a href="https://www.instagram.com/jadetimes_official/" aria-label="instagram" target="_blank">
                  <FaInstagram />
                </a>
              </li>
              <li className="flex">
                <a href="https://www.linkedin.com/company/99353290/admin/feed/posts/" aria-label="linkedin" target="_blank">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </nav>
        )}
        <div className="flex flex-col items-center lg:mt-4 lg:gap-4 2xl:flex-row 2xl:justify-between">
          <div className="text-xs lg:text-[0.6875rem] text-nowrap lg:order-2 2xl:order-none">
            &copy; 2024 Jadetimes Media LLC. <span className="inline-block 2xl:block">All Rights Reserved</span>
          </div>
          {screenSize === "large" && (
            <ul className="text-[0.6875rem] flex flex-row flex-wrap justify-center 2xl:justify-normal 2xl:max-w-[1063px]">
              <li>
                <Link to="/terms-and-conditions" className="duration-300 hover:underline">
                  Terms & Conditions
                </Link>
                <span className="mx-2">|</span>
              </li>
              <li>
                <Link to="/about-jadetimes" className="duration-300 hover:underline">
                  About Jadetimes
                </Link>
                <span className="mx-2">|</span>
              </li>
              <li>
                <Link to="/privacy-policy" className="duration-300 hover:underline">
                  Privacy Policy
                </Link>
                <span className="mx-2">|</span>
              </li>
              <li>
                <Link to="/job-vacancies" className="duration-300 hover:underline">
                  Join Jadetimes Media
                </Link>
                <span className="mx-2">|</span>
              </li>
              <li>
                <Link to="/cookie-policy" className="duration-300 hover:underline">
                  Cookies
                </Link>
                <span className="mx-2">|</span>
              </li>
              <li>
                <Link to="/advertise-with-us" className="duration-300 hover:underline">
                  Get Published Online Articles
                </Link>
                <span className="mx-2">|</span>
              </li>
              <li>
                <Link to="/accessibility-help" className="duration-300 hover:underline">
                  Accessibility Help
                </Link>
                <span className="mx-2">|</span>
              </li>
              <li>
                <Link to="/faq" className="duration-300 hover:underline">
                  FAQ
                </Link>
                <span className="mx-2">|</span>
              </li>
              <li>To report security issues email us at</li>
              <li>
                <Link to="mailto:info@jadetimes.com" className="duration-300 hover:underline">
                  info@jadetimes.com
                </Link>
                <span className="mx-2">|</span>
              </li>
              <li>
                <Link to="/shop" className="duration-300 hover:underline">
                  Jadetimes Shop
                </Link>
                <span className="mx-2">|</span>
              </li>
              <li>
                <Link to="/blog" className="duration-300 hover:underline">
                  Blog
                </Link>
                <span className="mx-2">|</span>
              </li>
              <li>The JadeTimes holds no responsibility for the content of external websites. For more information, please review our policy on external linking.</li>
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
