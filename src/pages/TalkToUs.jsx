import Form from "../components/Form";
import ContactDetails from "../components/ContactDetails";
import image from "../assets/1.webp"

const TalkToUs = () => {
  return (
    <section className="p-4">
      {/* <img src={image} alt="" className="max-h-[488px] object-center" /> */}
      <div className="max-w-[1000px] mx-auto">
        <h1 className="text-2xl text-neutral-900 font-semibold lg:text-3xl">Submit Your Query</h1>
        <div className="md:grid md:grid-cols-2 md:mb-4">
          <Form className="text-sm flex flex-col gap-4 mt-4 md:pr-6 md:border-r md:border-r-[#17171724]" />
          <div className="text-sm text-neutral-900 flex flex-col gap-6 mt-8 md:mt-4 md:pl-6">
            <ContactDetails />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalkToUs;
