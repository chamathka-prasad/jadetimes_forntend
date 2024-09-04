import React from "react";
import { Link } from "react-router-dom";
import Logo from "/logo-black.png"
import { FaWhatsapp, FaTiktok, FaXTwitter, FaYoutube, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t border-t-black">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex flex-col gap-8 items-center my-8 mb-12 md:flex-row md:justify-between">
          <div>
            <Link to="/" className="block min-w-32 max-w-48 order-2 px-4">
              <img src={Logo} alt="jadetimes logo" />
            </Link>
            <div className="text-sm text-neutral-700 flex flex-row items-center mt-2 whitespace-nowrap">
              <Link to="/advertise-with-us" className="hover:underline">Advertise with us</Link>
              <span className="w-[1px] h-5 bg-neutral-700 mx-2"></span>
              <Link to="/talk-to-us" className="hover:underline">Talk to us</Link>
            </div>
          </div>
          <form>
            <label htmlFor="email" className="uppercase block text-center text-sm mb-2">Sign up for our newsletter</label>
            <div className="flex flex-col gap-2 md:flex-row md:gap-1">
              <input
                className="py-1 px-3 border border-neutral-700 w-full duration-500 hover:bg-neutral-200 focus:bg-neutral-200"
                id="email"
                name="email"
                type="email"
                placeholder="examaple@email.com"
                autoComplete="off" />
              <button className="uppercase bg-neutral-700 text-white text-sm border border-neutral-700 duration-500 font-medium py-2 px-4 hover:bg-transparent hover:text-black focus-visible:outline-black focus-visible:outline-2">Subscribe</button>
            </div>
          </form>
        </div>
        <div>
          <nav className="border-t border-b border-neutral-200 py-4">
          <ul className="text-neutral-700 flex flex-wrap items-center gap-4 justify-center text-xl mb-4">
              <a href="https://www.whatsapp.com/channel/0029VaevKQj35fM4n9S7ub1c" target="_black" className="duration-500 hover:text-black"><FaWhatsapp/></a>
              <a href="https://www.tiktok.com/@jadetimes_officials" target="_blank" className="duration-500 hover:text-black"><FaTiktok/></a>
              <a href="https://x.com/jade_times" target="_blank" className="duration-500 hover:text-black"><FaXTwitter/></a>
              <a href="https://www.facebook.com/officialJadetimes" target="_blank" className="duration-500 hover:text-black"><FaFacebookF/></a>
              <a href="https://www.youtube.com/channel/UCh3RLLVBaEeBRRZBbnnVWWA" target="_blank" className="duration-500 hover:text-black"><FaYoutube/></a>
              <a href="https://www.instagram.com/jadetimes_official/" target="_blank" className="duration-500 hover:text-black"><FaInstagram/></a>
              <a href="https://www.linkedin.com/company/99353290/admin/feed/posts/" target="_blank" className="duration-500 hover:text-black"><FaLinkedinIn/></a>
            </ul>
            <ul className="flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-700">
              <li>
                <Link to="/news" className="hover:underline">News</Link>
              </li>
              <li>
                <Link to="/business" className="hover:underline">Business</Link>
              </li>
              <li>
                <Link to="/sports" className="hover:underline">Sports</Link>
              </li>
              <li>
                <Link to="/travel" className="hover:underline">Travel</Link>
              </li>
              <li>
                <Link to="/culture" className="hover:underline">Culture</Link>
              </li>
              <li>
                <Link to="/entertainment" className="hover:underline">Entertainment</Link>
              </li>
              <li>
                <Link to="/innovation" className="hover:underline">Innovation</Link>
              </li>
              <li>
                <Link to="/political" className="hover:underline">Political</Link>
              </li>
              <li>
                <Link to="/universe" className="hover:underline">Universe</Link>
              </li>
              <li>
                <Link to="/fashion" className="hover:underline">Fashion</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
