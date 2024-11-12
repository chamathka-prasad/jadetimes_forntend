import { Link, Outlet } from "react-router-dom";

import useWindowSize from "../../hooks/useWindowSize";

import membershipImage from "../../assets/membership.webp";

const memberBenefits = [
  {
    type: "Unlimited Digital Access",
    details:
      "Experience the depth of JadeTimes journalism with unlimited access to all articles. Stay informed with actionable information, unique insights, and inspiring stories that keep you ahead.",
  },
  {
    type: "Members Only Events",
    details:
      "Engage with industry leaders and experts through exclusive members only events. Participate in webinars, Q&A sessions, and discussions on topics like leadership, financial planning, health, and more.",
  },
  {
    type: "Enhanced Browsing Experience",
    details: "Enjoy a seamless and distraction free reading experience with fewer ads. Save unlimited articles to your personal library for easy access anytime, anywhere.",
  },
  {
    type: "Premium Video Content",
    details: "Delve into our extensive library of premium videos featuring interviews, panel discussions, and talks with influential visionaries, entrepreneurs, and thought leaders.",
  },
  {
    type: "Personalized Content Recommendations",
    details: "Receive tailored content recommendations based on your reading preferences and interests, ensuring you never miss the stories that matter most to you.",
  },
];

const Membership = () => {
  const screen = useWindowSize();
  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      <Outlet />
      <section className="py-8">
        <h2 className="text-xl font-semibold text-neutral-800 text-center">Member Benefits</h2>
        <ul className="text-neutral-900 mt-8 px-4 flex flex-col gap-4 md:grid md:grid-cols-2 max-w-[1300px] mx-auto lg:gap-x-8">
          {memberBenefits.map((benefit, index) => (
            <li key={index}>
              {screen === "large" && <div className="text-5xl font-black text-[#949494] float-left min-w-[4.0625rem] text-center mr-4">{index + 1 <= 9 ? `0${index + 1}` : index + 1}</div>}
              <div className="flex flex-row gap-4 items-center">
                {screen !== "large" && <div className="text-5xl font-black text-[#949494] min-w-[4.0625rem] text-center">{index + 1 <= 9 ? `0${index + 1}` : index + 1}</div>}
                <h3 className="font-semibold text-[1.0625rem]">{benefit.type}</h3>
              </div>
              <p className="mt-2 lg:text-sm md:line-clamp-4 lg:line-clamp-3">{benefit.details}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="bg-neutral-50 py-4">
        <div className="flex flex-col gap-4 p-4 max-w-[1032px] mx-auto md:grid md:grid-cols-2 lg:px-4 items-center md:gap-8 lg:gap-20">
          <picture className="w-full">
            <img src={membershipImage} alt="" />
          </picture>
          <div className="text-neutral-900 md:-order-1">
            <h2 className="text-xl font-semibold mb-4 lg:text-2xl">Community Access</h2>
            <p className="md:max-w-80">
              Join a community of like minded individuals. Participate in forums and discussion groups to share ideas, network, and collaborate with other JadeTimes members.
            </p>
            <Link
              to="/membership"
              target="_self"
              onClick={scrollTop}
              className="text-xs bg-[#282626] border border-[#282626] text-white px-6 py-4 inline-block tracking-widest mt-6 lg:py-3 duration-300 lg:hover:bg-neutral-50 lg:hover:text-black"
            >
              Subscribe Now
            </Link>
          </div>
        </div>
      </section>
      <section className="text-neutral-900 py-6 px-4 text-sm lg:text-center lg:text-base lg:max-w-[700px] mx-auto">
        <h2 className="text-xl font-semibold mb-4 lg:text-2xl">Support & Resources</h2>
        <div className="mb-4">What is a JadeTimes Digital Membership?</div>
        <p>
          A JadeTimes digital membership provides you with unlimited access to all our premium journalism on JadeTimes.com in a streamlined format with fewer ads and interruptions. At the time of
          writing, there are three membership plans to choose from:
        </p>
        <ul>
          <li>Monthly</li>
          <li>Annual</li>
          <li>Two-Year</li>
        </ul>
        <div className="my-4">Membership Benefits:</div>
        <p>
          Unlimited Digital Access: Enjoy full access to all articles and content on JadeTimes.com.Members-Only Events: Participate in exclusive events covering topics like leadership, financial
          planning, health, and more.
        </p>
        <div className="mt-4 text-xs">
          Can’t find what you’re looking for? Email us at{" "}
          <a href="mailto:info@jadetimes.com" className="underline inline-block lg:no-underline lg:hover:underline">
            info@jadetimes.com
          </a>{" "}
          for more information.
        </div>
      </section>
    </>
  );
};

export default Membership;
