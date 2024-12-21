import { Link } from "react-router-dom";

import LinkToHome from "./LinkToHome";

import useWindowSize from "../hooks/useWindowSize";

import navPaths from "../routes/navPaths";
import mobileNavPaths from "../routes/mobileNavPaths";

import Logo from "/footer-logo.png";

const Footer = () => {
  const screenSize = useWindowSize();
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <footer className="border-t border-t-neutral-900 text-neutral-900">
      <div className="max-w-[1376px] mx-auto p-4">
        <div className="mt-6 mb-5 lg:flex lg:flex-row lg:justify-between lg:mt-10 lg:mb-14">
          <div className="mb-4 lg:mb-0">
            <LinkToHome className="block mx-auto w-44 order-2">
              <img src={Logo} alt="jadetimes logo" loading="lazy" />
            </LinkToHome>
            {screenSize < 1200 && (
              <ul className="flex flex-col gap-4 text-center text-neutral-900 text-sm text-nowrap mb-4 mt-5">
                {mobileNavPaths.map((path) => (
                  <li key={path.key}>
                    <Link to={path.to}>{path.name}</Link>
                  </li>
                ))}
              </ul>
            )}
            <div className="text-sm flex flex-row items-center justify-center max-w-lg mx-auto whitespace-nowrap border-t border-t-neutral-300 pt-4 lg:text-xs lg:border-none lg:pt-0 lg:mt-3">
              <Link to="/advertise-with-us" className="lg:hover:underline">
                Advertise with us
              </Link>
              <span className="w-[1px] h-3 bg-neutral-900 mx-2"></span>
              <Link to="/talk-to-us" className="lg:hover:underline">
                Talk to us
              </Link>
            </div>
          </div>
          <form className="flex flex-col items-center gap-4 lg:flex-row" onSubmit={handleSubmit}>
            <label htmlFor="subscription" className="uppercase block text-center text-lg lg:text-[0.8125rem] text-nowrap text-black lg:mb-0">
              Sign up for our newsletter
            </label>
            <div className="flex flex-row gap-[1px] max-w-lg w-full">
              <input
                className="text-sm w-full py-2 px-5 duration-300 placeholder:text-neutral-500 border-2 border-neutral-300 focus-visible:outline-none lg:w-96 lg:py-1 lg:hover:border-neutral-900 focus:border-neutral-900"
                id="subscription"
                name="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="on"
                pattern="^.+@.+\.[a-zA-Z]{2,63}$"
                required
              />
              <button
                type="submit"
                className="uppercase text-nowrap bg-neutral-900 text-white text-xs border border-neutral-900 duration-300 py-[0.625rem] px-3 lg:hover:bg-[#FF322E] lg:hover:border-[#FF322E] lg:px-9"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        {screenSize >= 1200 && (
          <nav className="border-t border-b border-neutral-300 py-4 text-[#515151] 2xl:flex 2xl:items-center 2xl:justify-center 2xl:gap-3">
            <ul className="text-xs flex flex-row items-center justify-center gap-3 flex-wrap font-semibold">
              {navPaths.slice(1, navPaths.length).map((path) => (
                <li key={path.key} className="gap-4">
                  <Link to={path.to} className="inline-block duration-300 hover:underline">
                    {path.name}
                  </Link>
                </li>
              ))}
              {navPaths[1].submenus.slice(0, 5).map((submenu) => (
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
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-whatsapp w-4" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                </a>
              </li>
              <li className="flex">
                <a href="https://www.tiktok.com/@jadetimes_officials" aria-label="tiktok" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-tiktok w-4" viewBox="0 0 16 16">
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                  </svg>
                </a>
              </li>
              <li className="flex">
                <a href="https://x.com/jade_times" aria-label="x-twitter" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-twitter-x w-4" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                  </svg>
                </a>
              </li>
              <li className="flex">
                <a href="https://www.facebook.com/officialJadetimes" aria-label="facebook" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-facebook w-4" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                </a>
              </li>
              <li className="flex">
                <a href="https://www.youtube.com/channel/UCh3RLLVBaEeBRRZBbnnVWWA" aria-label="youtube" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-youtube w-4" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                  </svg>
                </a>
              </li>
              <li className="flex">
                <a href="https://www.instagram.com/jadetimes_official/" aria-label="instagram" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-instagram w-4" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                </a>
              </li>
              <li className="flex">
                <a href="https://www.linkedin.com/company/99353290/admin/feed/posts/" aria-label="linkedin" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-linkedin w-4" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        )}
        <div className="flex flex-col items-center lg:mt-4 lg:gap-4 2xl:flex-row 2xl:justify-between">
          <div className="text-xs lg:text-[0.6875rem] mb-6 text-nowrap lg:order-2 2xl:order-none lg:mb-0">
            &copy; 2024 Jadetimes Media LLC. <span className="inline-block 2xl:block">All Rights Reserved</span>
          </div>
          {screenSize >= 1200 && (
            <ul className="text-[0.6875rem] flex flex-row flex-wrap justify-center 2xl:justify-normal 2xl:max-w-[1063px]">
              <li>
                <Link to="/terms-and-conditions" className="duration-300 hover:underline">
                  Terms & Conditions
                </Link>
                <span className="mx-2">|</span>
              </li>
              <li>
                <Link to="/about-us" className="duration-300 hover:underline">
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
                <Link to="/cookies-policy" className="duration-300 hover:underline">
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
                <Link className="duration-300 hover:underline">
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
