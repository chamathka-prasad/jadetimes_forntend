import { useState } from "react";
import { BsXLg, BsCheck2 } from "react-icons/bs";
import { Link } from "react-router-dom";

import Logo from "/logo-black.png";

const Login = ({ handleLoginClose }) => {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <section className="fixed w-full h-full z-[100] top-0 bg-white p-8 pt-[71.97px] lg:pt-[59.9px] overflow-y-auto lg:flex lg:items-center lg:justify-center">
      <div className="max-w-[613px] mx-auto">
        <img src={Logo} alt="jadetimes logo" className="max-w-80 mx-auto md:max-w-64" />
        <h1 className="font-bold text-[1.0625rem] text-neutral-800 mt-8 text-center md:text-4xl">Register for a Jadetimes Account</h1>
        <p className="text-neutral-900 text-sm text-center mt-2">You must be 18 or over to register for a Jadetimes account</p>
        <form className="text-neutral-900">
          <div className="md:grid md:grid-cols-2 md:gap-8 mt-4">
            <input
              type="text"
              name="firstname"
              placeholder="First name"
              autoComplete="off"
              aria-label="first name"
              className="text-[1.15rem] md:text-base placeholder:text-neutral-900 border-b border-black py-2 block mb-3 pb-3 w-full focus-visible:outline-none focus-visible:border-b-2 lg:hover:border-b-2"
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last name"
              autoComplete="off"
              aria-label="last name"
              className="text-[1.15rem] md:text-base placeholder:text-neutral-900 border-b border-black py-2 block mb-3 pb-3 w-full focus-visible:outline-none focus-visible:border-b-2 lg:hover:border-b-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              pattern="^.+@.+\.[a-zA-Z]{2,63}$"
              maxLength="250"
              autoComplete="off"
              aria-label="email"
              className="text-[1.15rem] md:text-base placeholder:text-neutral-900 border-b border-black py-2 block mb-3 pb-3 w-full focus-visible:outline-none focus-visible:border-b-2 lg:hover:border-b-2"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              autoComplete="off"
              aria-label="password"
              className="text-[1.15rem] md:text-base placeholder:text-neutral-900 border-b border-black py-2 block mb-3 pb-3 w-full focus-visible:outline-none focus-visible:border-b-2 lg:hover:border-b-2"
            />
          </div>
          <div className="my-6 flex">
            <div className="mr-2 relative w-6 h-6 flex items-center justify-center">
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className="appearance-none w-6 h-6 border border-black absolute cursor-pointer"
                checked={isChecked}
                onChange={() => setIsChecked((prevChecked) => !prevChecked)}
              />
              {isChecked && <BsCheck2 size={20} />}
            </div>
            <label htmlFor="checkbox">Join the community</label>
          </div>
          <div className="text-sm">
            By clicking Register, you accept our <Link className="underline">Terms of Use. </Link>Find out about our <Link className="underline">Privacy</Link> and{" "}
            <Link className="underline">Cookies Policy</Link>
          </div>
          <button type="submit" className="text-xl bg-neutral-900 text-white w-full px-4 py-4 my-4 md:py-3 md:text-base">
            Register
          </button>
          <div className="text-sm text-center">
            Already have a Jadetimes Account? <Link className="underline font-semibold">Log In</Link>
          </div>
          <Link className="underline text-xs block w-fit mx-auto">Find out more about Jadetimes accounts</Link>
        </form>
      </div>
      <div className="absolute top-0 left-0 right-0 px-4 py-[1.45rem] lg:py-[1.10rem] flex max-w-[1300px] mx-auto">
        <button onClick={handleLoginClose} className="ml-auto">
          <BsXLg size={25} />
        </button>
      </div>
    </section>
  );
};

export default Login;
