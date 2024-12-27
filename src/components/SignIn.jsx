import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "/logo-black.png";

import CloseButton from "./CloseButton";
import FormButton from "./FormButton";

import useSwitch from "../hooks/useSwitch";

const SignIn = ({ handleSignInOff, handleNavItem }) => {
  const [isLogIn, handleLogInOn, handleLogInOff] = useSwitch();
  const [isResetPassword, handleResetPasswordOn, handleResetPasswordOff] =
    useSwitch();
  const [isChecked, setIsChecked] = useState(true);
  const inputStyles =
    "text-[1.15rem] md:text-base placeholder:text-neutral-500 border-b-2 border-neutral-300 py-2 block mb-3 md:mb-0 pb-3 w-full focus-visible:outline-none focus-visible:border-b-2 lg:hover:border-b-neutral-900 focus:border-b-neutral-900 duration-300";

  function handleNavItemAndSignInOff() {
    handleSignInOff();
    handleNavItem();
  }

  return (
    <div className="fixed w-screen top-0 bottom-0 left-0 z-[100] bg-white text-neutral-900 p-4 pt-16 overflow-y-auto custom-screen">
      {isLogIn ? (
        isResetPassword ? (
          <div className="max-w-[640px] md:max-w-[308px] mx-auto">
            <div className="font-semibold text-heading text-center text-4xl">
              Reset password
            </div>
            <p className="text-sm text-center my-4">
              Enter your login email and we’ll send you a link to reset your
              password.
            </p>
            <form className="flex flex-col gap-6 mb-5">
              <input
                className={inputStyles}
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                aria-label="email"
                required
                pattern="^.+@.+\.[a-zA-Z]{2,63}$"
                maxLength="250"
              />
              <FormButton>Reset Password</FormButton>
            </form>
            <div className="text-sm text-center">
              Back to{" "}
              <button
                className="underline font-medium text-heading"
                onClick={handleResetPasswordOff}
              >
                Log In
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-[640px] md:max-w-[308px] mx-auto">
            <div className="font-medium text-heading text-center text-4xl">
              Log In
            </div>
            <div className="text-sm text-center my-4">
              New to this site ?{" "}
              <button
                className="underline font-medium text-heading"
                onClick={handleLogInOff}
              >
                Sign In
              </button>
            </div>
            <form className="flex flex-col gap-6">
              <input
                className={inputStyles}
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                aria-label="email"
                required
                pattern="^.+@.+\.[a-zA-Z]{2,63}$"
                maxLength="250"
              />
              <input
                className={inputStyles}
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
                aria-label="password"
                required
              />
              <button
                className="underline w-fit text-sm"
                onClick={handleResetPasswordOn}
              >
                Forgot Password ?
              </button>
              <FormButton>Log In</FormButton>
            </form>
            <div className="flex items-center justify-center my-6">
              <span className="border-t border-neutral-300 w-full mr-4"></span>
              <span>or</span>
              <span className="border-t border-neutral-300 w-full ml-4"></span>
            </div>
            <div className="text-neutral-900 flex items-center justify-center gap-5">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-google w-6"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                </svg>
              </a>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-facebook w-6"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </a>
            </div>
          </div>
        )
      ) : (
        <div className="max-w-[640px] mx-auto">
          <img
            src={Logo}
            alt="jadetimes logo"
            className="max-w-80 mx-auto md:max-w-64"
          />
          <div className="font-semibold text-xl text-heading mt-8 text-center md:text-4xl">
            Register for a Jadetimes Account
          </div>
          <p className="text-sm text-center mt-2">
            You must be 18 or over to register for a Jadetimes account
          </p>
          <form>
            <div className="md:grid md:grid-cols-2 md:gap-6 mt-4">
              <input
                className={inputStyles}
                type="text"
                name="firstname"
                placeholder="First name"
                autoComplete="off"
                aria-label="first name"
              />
              <input
                className={inputStyles}
                type="text"
                name="lastname"
                placeholder="Last name"
                autoComplete="off"
                aria-label="last name"
              />
              <input
                className={inputStyles}
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                aria-label="email"
                required
                pattern="^.+@.+\.[a-zA-Z]{2,63}$"
                maxLength="250"
              />
              <input
                className={inputStyles}
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
                aria-label="password"
                required
              />
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
                {isChecked && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                  </svg>
                )}
              </div>
              <label htmlFor="checkbox">Join the community</label>
            </div>
            <p className="text-sm">
              By clicking Register, you accept our{" "}
              <Link
                to="/terms-and-conditions"
                className="underline"
                onClick={handleNavItemAndSignInOff}
              >
                Terms
              </Link>{" "}
              of use. Find out about our{" "}
              <Link
                to="/privacy-policy"
                className="underline"
                onClick={handleNavItemAndSignInOff}
              >
                Privacy
              </Link>{" "}
              and{" "}
              <Link
                to="/cookies-policy"
                className="underline"
                onClick={handleNavItemAndSignInOff}
              >
                Cookies
              </Link>{" "}
              Policy
            </p>
            <FormButton className="mt-6">Register</FormButton>
          </form>
          <div className="text-sm text-center mt-6">
            Already have a Jadetimes Account ?{" "}
            <button
              className="underline font-medium text-heading"
              onClick={handleLogInOn}
            >
              Log In
            </button>
          </div>
          <Link
            to="/terms-and-conditions"
            className="underline text-xs block w-fit mx-auto mt-2"
            onClick={handleNavItemAndSignInOff}
          >
            Find out more about Jadetimes accounts
          </Link>
        </div>
      )}
      <div className="absolute top-0 left-0 right-0 p-4 max-w-[1376px] mx-auto">
        <div className="ml-auto flex items-center justify-center w-8 h-8 lg:h-[2.0625rem]">
          <CloseButton
            className="text-black w-[1.7rem]"
            onClick={handleSignInOff}
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
