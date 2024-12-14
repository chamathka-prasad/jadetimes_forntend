import { Link } from "react-router-dom";

import ContactDetails from "../components/ContactDetails";
import Form from "../components/Form";
import ShowCard from "../components/ShowCard";

import building from "../assets/show/1.webp";

const AboutUs = () => {
  return (
    <section>
      <div className="p-4">
        <h1 className="text-center font-semibold text-2xl lg:text-3xl lg:mb-1">
          Learn more about what we do
        </h1>
        <p className="text-center text-xs lg:text-sm">
          where we go beyond the ordinary to bring you exclusive insights.
        </p>
      </div>
      <div className="p-4">
        <div className="max-w-[1000px] mx-auto">
          <section>
            <div className="lg:flex lg:flex-row lg:gap-4 lg:justify-between lg:items-center">
              <h2 className="font-semibold text-2xl mb-4 lg:text-3xl lg:text-nowrap lg:mb-0">
                Jadetimes Mission
              </h2>
              <p className="text-sm lg:w-[600px]">
                At Jadetimes Media, our mission is to deliver high quality and
                engaging content, offering diverse perspectives on the issues
                that matter most to our readers.
              </p>
            </div>
            <section>
              <h3 className="font-semibold text-[1.35rem] py-4 border-y border-y-neutborder-r-neutral-300 mt-5 lg:text-base lg:py-8 text-center">
                Jadetimes Media By The Numbers
              </h3>
              <ul className="py-5 flex flex-col gap-4 items-center border-b border-b-neutborder-r-neutral-300 justify-center md:flex-row md:gap-0">
                <li className="w-40 text-center border-b border-b-neutborder-r-neutral-300 pb-4 md:pb-0 md:border-b-0 md:pr-8 md:border-r md:border-r-neutral-300 md:w-auto lg:pr-16">
                  <div className="font-semibold text-5xl lg:text-4xl">250+</div>
                  <div className="text-sm lg:text-xs">Overall Award Wins</div>
                </li>
                <li className="w-40 text-center border-b border-b-neutborder-r-neutral-300 pb-4 md:pb-0 md:border-b-0 md:px-8 md:border-r md:border-r-neutral-300 md:w-auto lg:px-16">
                  <div className="font-semibold text-5xl lg:text-4xl">250</div>
                  <div className="text-sm lg:text-xs">Employees Worldwide</div>
                </li>
                <li className="w-40 text-center border-b border-b-neutborder-r-neutral-300 pb-4 md:pb-0 md:border-b-0 md:px-8 md:border-r md:border-r-neutral-300 md:w-auto lg:px-16">
                  <div className="font-semibold text-5xl lg:text-4xl">
                    500k+
                  </div>
                  <div className="text-sm lg:text-xs">Readers</div>
                </li>
                <li className="w-40 text-center md:w-auto md:pl-8 lg:pl-16">
                  <div className="font-semibold text-5xl lg:text-4xl">75+</div>
                  <div className="text-sm lg:text-xs">Journalists</div>
                </li>
              </ul>
            </section>
            <section className="mb-5 lg:mt-8">
              <h3 className="text-2xl font-semibold my-4">Who We Are</h3>
              <p className="text-sm">
                Jadetimes Media is a dynamic and innovative media company based
                in Albuquerque, New Mexico. We are committed to maintaining the
                highest standards of integrity and professionalism in everything
                we do. Our team of dedicated journalists, editors, and creative
                professionals work tirelessly to produce content that is both
                compelling and credible.
              </p>
              <div className="md:flex md:flex-row md:gap-5 md:items-center mt-6">
                <img
                  src={building}
                  alt="View of the company building"
                  className="aspect-video"
                />
                <div className="my-4 md:my-0">
                  <h4 className="text-xl font-semibold md:mb-4 md:text-lg lg:text-base text-heading">
                    Meet the Visionaries Behind JadeTimes Media: Board of Directors
                  </h4>
                  <p className="text-sm">
                    At JadeTimes Media, our Board of Directors comprises dynamic
                    leaders with diverse expertise, driving innovation and success.
                    Each member brings unique skills and experiences, shaping our
                    vision and ensuring sustainable growth.
                  </p>
                  <Link
                    to="/team"
                    className="text-sm md:text-xs bg-neutral-900 border border-neutral-900 text-white px-6 py-4 inline-block tracking-widest mt-6 lg:py-3 md:mb-2 duration-300 lg:hover:bg-white lg:hover:text-black"
                  >
                    Board of Directors
                  </Link>
                </div>
              </div>
            </section>
          </section>
          <section className="lg:mt-8">
            <h2 className="text-2xl font-semibold mb-4">What we do</h2>
            <ShowCard className="mb-7 flex flex-col gap-4 md:grid md:gap-5 md:grid-cols-2 lg:grid-cols-3" />
          </section>
          <section>
            <h2 className="text-2xl font-semibold">How to Report News To Us</h2>
            <div className="md:grid md:grid-cols-2 md:mb-4">
              <Form className="text-sm flex flex-col gap-4 mt-4 md:pr-5 md:border-r md:border-r-neutral-300" />
              <div className="text-sm text-neutral-900 flex flex-col gap-6 mt-8 md:mt-4 md:pl-5">
                <ContactDetails />
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
