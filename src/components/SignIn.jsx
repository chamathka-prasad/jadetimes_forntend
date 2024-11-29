import { useState } from "react";
import { BsCheck2 } from "react-icons/bs";
import { Link } from "react-router-dom";

import Logo from "/logo-black.png";

import CloseButton from "./CloseButton";

const SignIn = ({ handleSignInOff }) => {
  const [isLogIn, setIsLogIn] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const inputStyles =
    "text-[1.15rem] md:text-base placeholder:text-neutral-500 border-b-2 border-neutral-300 py-2 block mb-3 md:mb-0 pb-3 w-full focus-visible:outline-none focus-visible:border-b-2 lg:hover:border-b-neutral-900 focus:border-b-neutral-900 duration-300";

  return (
    <div className="fixed w-screen h-full top-0 left-0 z-[100] bg-white text-neutral-900 p-8 pt-[71.97px] lg:pt-[59.9px] overflow-y-auto lg:flex lg:items-center lg:justify-center">
      {isLogIn ? (
        <div className="max-w-[640px] mx-auto">
          <img src={Logo} alt="jadetimes logo" className="max-w-80 mx-auto md:max-w-64" />
          <div className="font-bold text-xl text-heading mt-8 text-center md:text-4xl">Register for a Jadetimes Account</div>
          <p className="text-sm text-center mt-2">You must be 18 or over to register for a Jadetimes account</p>
          <form>
            <div className="md:grid md:grid-cols-2 md:gap-6 mt-4">
              <input className={inputStyles} type="text" name="firstname" placeholder="First name" autoComplete="off" aria-label="first name" />
              <input className={inputStyles} type="text" name="lastname" placeholder="Last name" autoComplete="off" aria-label="last name" />
              <input className={inputStyles} type="email" name="email" placeholder="Email" autoComplete="off" aria-label="email" required pattern="^.+@.+\.[a-zA-Z]{2,63}$" maxLength="250" />
              <input className={inputStyles} type="password" name="password" placeholder="Password" autoComplete="off" aria-label="password" required />
            </div>
            <div className="my-6 flex">
              <div className="mr-2 relative w-6 h-6 flex items-center justify-center">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  className="appearance-none w-6 h-6 border-2 border-neutral-300 absolute cursor-pointer duration-300 focus-visible:outline-none focus:border-neutral-900 lg:hover:border-neutral-900"
                  checked={isChecked}
                  onChange={() => setIsChecked((prevChecked) => !prevChecked)}
                />
                {isChecked && <BsCheck2 className="text-black" />}
              </div>
              <label htmlFor="checkbox">Join the community</label>
            </div>
            <p className="text-sm">
              By clicking Register, you accept our{" "}
              <Link to="/terms-and-conditions" className="underline" onClick={handleSignInOff}>
                Terms
              </Link>{" "}
              of use. Find out about our{" "}
              <Link to="/privacy-policy" className="underline" onClick={handleSignInOff}>
                Privacy
              </Link>{" "}
              and{" "}
              <Link to="/cookie-policy" className="underline" onClick={handleSignInOff}>
                Cookies
              </Link>{" "}
              Policy
            </p>
            <button type="submit" className="text-xl bg-neutral-900 text-white w-full px-4 py-4 mt-6 md:py-3 md:text-base">
              Register
            </button>
          </form>
          <div className="text-sm text-center mt-6">
            Already have a Jadetimes Account ? <Link className="underline font-semibold text-heading">Log In</Link>
          </div>
          <Link to="/terms-and-conditions" className="underline text-xs block w-fit mx-auto" onClick={handleSignInOff}>
            Find out more about Jadetimes accounts
          </Link>
        </div>
      ) : (
        <div className="max-w-80 mx-auto">
          <div className="font-bold text-heading text-center text-4xl">Log In</div>
          <div className="text-sm text-center my-4">
            New to this site ? <Link className="underline font-semibold text-heading">Sign In</Link>
          </div>
          <form className="flex flex-col gap-6">
            <input className={inputStyles} type="email" name="email" placeholder="Email" autoComplete="off" aria-label="email" required pattern="^.+@.+\.[a-zA-Z]{2,63}$" maxLength="250" />
            <input className={inputStyles} type="password" name="password" placeholder="Password" autoComplete="off" aria-label="password" required />
            <Link className="underline w-fit">Forgot Password ?</Link>
            <button type="submit" className="text-xl bg-neutral-900 text-white w-full px-4 py-4 md:py-3 md:text-base">
              Log In
            </button>
          </form>
          <div className="flex items-center justify-center mt-6">
            <span className="border-t border-neutral-300 w-full mr-4"></span>
            <span>or</span>
            <span className="border-t border-neutral-300 w-full ml-4"></span>
          </div>
        </div>
      )}
      <div className="absolute top-0 left-0 right-0 px-6 py-[1.45rem] lg:py-[1.10rem] flex max-w-[1285px] mx-auto">
        <CloseButton className="ml-auto text-black text-[1.6rem]" onClick={handleSignInOff} />
      </div>
    </div>
  );
};

export default SignIn;
