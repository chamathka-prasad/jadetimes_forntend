import PricePlanCard from "../../components/PricePlanCard";

const PricePlan = () => {
  return (
    <section className="bg-neutral-900 text-center px-4 pb-4 lg:pb-8">
      <div className="text-white py-12">
        <h1 className="text-2xl font-semibold mb-4 lg:text-[2.5rem]">Accelerate Your Growth</h1>
        <p className="text-lg lg:text-base">Gain unlimited insights and exclusive benefits. Become a Jadetimes member for only $1.00 per week.</p>
      </div>
      <div>
        <PricePlanCard />
      </div>
    </section>
  );
};

export default PricePlan;
