import { Link } from "react-router-dom";

const pricePlans = [
  {
    duration: "monthly",
    amount: 6.99,
    date: "month",
    popular: false,
  },
  {
    duration: "annual",
    amount: 49.99,
    date: "year",
    popular: true,
  },
  {
    duration: "two year",
    amount: 79.99,
    date: "2 year",
    popular: false,
  },
];

const PricePlanCard = () => {
  return (
    <ul className="flex flex-col gap-4 md:flex-row justify-center max-w-[1000px] mx-auto lg:gap-8">
      {pricePlans.map((pricePlan, index) => (
        <li key={index} className={`bg-white text-neutral-900 p-8 relative w-full md:order-none ${pricePlan.popular ? "-order-1" : ""}`.trim()}>
          <h2 className="uppercase text-lg lg:text-xl">{pricePlan.duration}</h2>
          <div className="my-6 md:mb-1">
            <div>
              <span className="text-lg align-top mr-1 inline-block">$</span>
              <span className="text-4xl lg:text-5xl inline-block">{pricePlan.amount}</span>
            </div>
            <div className="text-sm md:text-xs">Every {pricePlan.date}</div>
          </div>
          <div className="text-sm md:text-xs">7 day free trial</div>
          <Link className={`text-lg text-white w-full block py-3 mt-5 md:text-sm lg:duration-300 lg:hover:opacity-80 ${pricePlan.popular ? "bg-[#FF322E]" : "bg-neutral-800"}`}>Subscribe</Link>
          {pricePlan.popular && (
            <div className="text-lg bg-[#FF322E] text-white uppercase w-fit px-4 py-2 absolute -top-6 left-1/2 -translate-x-1/2 text-nowrap md:py-1 md:text-sm md:-top-4">Most Popular</div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default PricePlanCard;
