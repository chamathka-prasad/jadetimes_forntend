import Form from "../components/Form";
import ContactDetails from "../components/ContactDetails";
import Section from "../components/Section";

const TalkToUs = () => {
  return (
    <Section className="p-4">
      <h1 className="text-2xl font-semibold lg:text-3xl">Submit Your Query</h1>
      <div className="md:grid md:grid-cols-2">
        <Form className="text-sm flex flex-col gap-4 mt-4 md:pr-5 md:border-r md:border-r-neutral-300" />
        <div className="text-sm text-neutral-900 flex flex-col gap-6 mt-8 md:mt-4 md:pl-5">
          <ContactDetails />
        </div>
      </div>
    </Section>
  );
};

export default TalkToUs;
