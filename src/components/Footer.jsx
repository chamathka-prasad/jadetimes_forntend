import React from "react";
import { Link } from "react-router-dom";
import Logo from "/logo-black.png";
import {
  FaWhatsapp,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { navPaths } from "../routes/Paths";

const Footer = () => {
  return (
    <footer className="border-t border-t-black">
      <div className="max-w-[1407px] mx-auto p-4">
        <div className="flex flex-col gap-8 items-center my-8 mb-12 lg:flex-row lg:justify-between">
          <div>
            <Link to="/" className="block min-w-32 max-w-44 order-2">
              <img src={Logo} alt="jadetimes logo" />
            </Link>
            <div className="text-xs flex flex-row items-center justify-center mt-2 whitespace-nowrap">
              <Link to="/advertise-with-us" className="hover:underline">
                Advertise with us
              </Link>
              <span className="w-[1px] h-3 bg-neutral-800 mx-2"></span>
              <Link to="/talk-to-us" className="hover:underline">
                Talk to us
              </Link>
            </div>
          </div>
          <form className="flex flex-col items-center lg:flex-row">
            <label
              htmlFor="email"
              className="uppercase block text-center text-[0.8125rem] text-nowrap mx-4 mb-4 lg:mb-0"
            >
              Sign up for our newsletter
            </label>
            <div className="flex flex-col gap-[1px] md:flex-row">
              <input
                className="text-sm w-full py-1 px-5 border border-neutral-400 hover:bg-neutral-300 hover:border-neutral-300 hover:border-b-2 hover:border-b-black lg:w-96"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="off"
                required
              />
              <button className="uppercase bg-neutral-800 text-white text-xs border border-neutral-800 duration-300 py-[0.625rem] px-9 hover:bg-[#FF322E] hover:border-[#FF322E]">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <nav className="hidden lg:block border-t border-b border-neutral-200 py-4">
          <ul className="text-xs text-[#515151] flex flex-row items-center justify-center gap-3 flex-wrap font-semibold">
            {navPaths.map((path) => (
              <li key={path.key} className="gap-4 first:hidden">
                <Link to={path.to} className="duration-300 hover:underline">
                  {path.name}
                </Link>
              </li>
            ))}
            <li className="gap-4">
              <Link className="duration-300 hover:underline">
                Israel-Gaza War
              </Link>
            </li>
            <li className="gap-4">
              <Link className="duration-300 hover:underline">
                Ukraine-Russia War
              </Link>
            </li>
            <li className="gap-4">
              <Link className="duration-300 hover:underline">USA</Link>
            </li>
            <li className="gap-4">
              <Link className="duration-300 hover:underline">Europe</Link>
            </li>
            <li className="gap-4">
              <Link className="duration-300 hover:underline">Australia</Link>
            </li>
            <li className="gap-4">
              <Link className="duration-300 hover:underline">Africa</Link>
            </li>
            <li className="gap-4">
              <Link className="duration-300 hover:underline">Asia</Link>
            </li>
            <li className="gap-4">
              <Link className="duration-300 hover:underline">WWE</Link>
            </li>
            <li className="flex">
              <a
                href="https://www.whatsapp.com/channel/0029VaevKQj35fM4n9S7ub1c"
                aria-label="whatsapp"
                target="_black"
                className="inline-block text-lg"
              >
                <FaWhatsapp />
              </a>
            </li>
            <li className="flex">
              <a
                href="https://www.tiktok.com/@jadetimes_officials"
                aria-label="tiktok"
                target="_blank"
                className="inline-block text-lg"
              >
                <FaTiktok />
              </a>
            </li>
            <li className="flex">
              <a
                href="https://x.com/jade_times"
                aria-label="x-twitter"
                target="_blank"
                className="inline-block text-lg"
              >
                <FaXTwitter />
              </a>
            </li>
            <li className="flex">
              <a
                href="https://www.facebook.com/officialJadetimes"
                aria-label="facebook"
                target="_blank"
                className="inline-block text-lg"
              >
                <FaFacebookF />
              </a>
            </li>
            <li className="flex">
              <a
                href="https://www.youtube.com/channel/UCh3RLLVBaEeBRRZBbnnVWWA"
                aria-label="youtube"
                target="_blank"
                className="inline-block text-lg"
              >
                <FaYoutube />
              </a>
            </li>
            <li className="flex">
              <a
                href="https://www.instagram.com/jadetimes_official/"
                aria-label="instagram"
                target="_blank"
                className="inline-block text-lg"
              >
                <FaInstagram />
              </a>
            </li>
            <li className="flex">
              <a
                href="https://www.linkedin.com/company/99353290/admin/feed/posts/"
                aria-label="linkedin"
                target="_blank"
                className="inline-block text-lg"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </nav>
        <ul className="hidden text-[0.6875rem] mt-4 lg:flex flex-wrap flex-row text-nowrap w-full justify-center">
          <li>
            <Link
              to="/terms-and-conditions"
              className="duration-300 hover:underline"
            >
              Terms & Conditions
            </Link>
            <span className="mx-2">|</span>
          </li>
          <li>
            <Link to="/about" className="duration-300 hover:underline">
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
            <Link to="/careers" className="duration-300 hover:underline">
              Join Jadetimes Media
            </Link>
            <span className="mx-2">|</span>
          </li>
          <li>
            <Link to="/cookies" className="duration-300 hover:underline">
              Cookies
            </Link>
            <span className="mx-2">|</span>
          </li>
          <li>
            <Link to="/cookies" className="duration-300 hover:underline">
              Get Published Online Articles
            </Link>
            <span className="mx-2">|</span>
          </li>
          <li>
            <Link
              to="/accessibility-help"
              className="duration-300 hover:underline"
            >
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
          <li>
            To report security issues email us at{" "}
            <Link
              to="mailto:info@jadetimes.com"
              className="duration-300 hover:underline"
            >
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
          </li>
        </ul>
        <div className="text-[0.6875rem] mt-4 text-center">
          <p className="hidden lg:block">The JadeTimes holds no responsibility for the content of external websites. For more information, please review our policy on external linking.</p>
          <div className="mt-4">&copy; 2024 Jadetimes Media LLC. All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
