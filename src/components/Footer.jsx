import React from "react";
import { Link } from "react-router-dom";
import Logo from "/logo-black.png"
import { FaWhatsapp, FaTiktok, FaXTwitter, FaYoutube, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import Paths from "../routes/Paths"

const Footer = () => {
  return (
    <footer className="border-t border-t-black">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex flex-col gap-8 items-center my-8 mb-12 md:flex-row md:justify-between">
          <div>
            <Link to="/" className="block min-w-32 max-w-48 order-2 px-4">
              <img src={Logo} alt="jadetimes logo" />
            </Link>
            <div className="text-sm text-neutral-800 flex flex-row items-center mt-2 whitespace-nowrap">
              <Link to="/advertise-with-us" className="hover:underline">Advertise with us</Link>
              <span className="w-[1px] h-5 bg-neutral-800 mx-2"></span>
              <Link to="/talk-to-us" className="hover:underline">Talk to us</Link>
            </div>
          </div>
          <form className="w-full max-w-lg">
            <label htmlFor="email" className="uppercase block text-center text-sm mb-2 font-medium">Sign up for our newsletter</label>
            <div className="flex flex-col gap-2 md:flex-row md:gap-1">
              <input
                className="py-2 px-3 border border-neutral-400 w-full duration-500 hover:bg-neutral-300 hover:border-neutral-300 hover:border-b-black"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="off"
                required />
              <button className="uppercase bg-neutral-800 text-white text-sm border border-neutral-800 duration-500 font-medium py-[0.625rem] px-8 hover:bg-transparent hover:text-black">Subscribe</button>
            </div>
          </form>
        </div>
        <div>
          <nav className="border-t border-b border-neutral-200 py-4">
            <ul className="text-neutral-800 flex flex-wrap items-center gap-4 justify-center text-xl mb-4">
              <li className="flex"><Link to="https://www.whatsapp.com/channel/0029VaevKQj35fM4n9S7ub1c" aria-label="whatsapp" target="_black" className="p-2 inline-block rounded-full duration-500 border border-white hover:text-black hover:border-neutral-800"><FaWhatsapp /></Link></li>
              <li className="flex"><Link to="https://www.tiktok.com/@jadetimes_officials" aria-label="tiktok" target="_blank" className="p-2 inline-block rounded-full duration-500 border border-white hover:text-black hover:border-neutral-800"><FaTiktok /></Link></li>
              <li className="flex"><Link to="https://x.com/jade_times" aria-label="x-twitter" target="_blank" className="p-2 inline-block rounded-full duration-500 border border-white hover:text-black hover:border-neutral-800"><FaXTwitter /></Link></li>
              <li className="flex"><Link to="https://www.facebook.com/officialJadetimes" aria-label="facebook" target="_blank" className="p-2 inline-block rounded-full duration-500 border border-white hover:text-black hover:border-neutral-800"><FaFacebookF /></Link></li>
              <li className="flex"><Link to="https://www.youtube.com/channel/UCh3RLLVBaEeBRRZBbnnVWWA" aria-label="youtube" target="_blank" className="p-2 inline-block rounded-full duration-500 border border-white hover:text-black hover:border-neutral-800"><FaYoutube /></Link></li>
              <li className="flex"><Link to="https://www.instagram.com/jadetimes_official/" aria-label="instagram" target="_blank" className="p-2 inline-block rounded-full duration-500 border border-white hover:text-black hover:border-neutral-800"><FaInstagram /></Link></li>
              <li className="flex"><Link to="https://www.linkedin.com/company/99353290/admin/feed/posts/" aria-label="linkedin" target="_blank" className="p-2 inline-block rounded-full duration-500 border border-white hover:text-black hover:border-neutral-800"><FaLinkedinIn /></Link></li>
            </ul>
            <ul className="text-xs text-neutral-800 flex flex-row items-center justify-center gap-4 flex-wrap">
              {Paths.map(Path => (
                <li key={Path.key} className="contents gap-4">
                  <Link to={Path.to} className="duration-500 hover:underline">{Path.name}</Link>
                  {Path.submenus && <ul className="flex flex-row items-center justify-center gap-4 flex-wrap">
                    {Path.submenus.map(submenu => (
                      <li key={submenu.key} className="contents">
                        <Link to={submenu.to} className="whitespace-nowrap duration-500 hover:underline">{submenu.name}</Link>
                      </li>
                    ))}
                  </ul>}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="text-xs text-neutral-600 mt-11 flex gap-4 flex-col items-center justify-center">
          <p className="text-center">© 2024 Jadetimes Media LLC. All Rights Reserved</p>
          <ul className="flex flex-wrap gap-4 justify-center">
            <li>
              <Link to="/terms-and-conditions" className="duration-500 hover:underline">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/about" className="duration-500 hover:underline">About Jadetimes</Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="duration-500 hover:underline">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/careers" className="duration-500 hover:underline">Join Jadetimes Media</Link>
            </li>
            <li>
              <Link to="/cookies" className="duration-500 hover:underline">Cookies</Link>
            </li>
            <li>
              <Link to="/faq" className="duration-500 hover:underline">FAQ</Link>
            </li>
            <li>
              <Link to="/shop" className="duration-500 hover:underline">Jadetimes Shop</Link>
            </li>
            <li>
              <Link to="/blog" className="duration-500 hover:underline">Blog</Link>
            </li>
            <li>
              <Link to="mailto:info@jadetimes.com" className="duration-500 hover:underline">info@jadetimes.com</Link>
            </li>
            <li>
              <Link to="/accessibility-help" className="duration-500 hover:underline">Accessibility Help</Link>
            </li>
            <li className="text-center">The JadeTimes holds no responsibility for the content of external websites. For more information, please review our policy on external linking</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
