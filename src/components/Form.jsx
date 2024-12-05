import FormButton from "./FormButton";

const Form = ({ className }) => {
  return (
    <form action="" className={className}>
      <div>
        <label htmlFor="name">
          First name <span className="text-accent">*</span>
        </label>
        <input id="name" type="text" className="w-full border-b-2 duration-300 border-b-neutral-300 focus:border-b-neutral-900 lg:hover:border-b-neutral-900 focus-visible:outline-none p-4" />
      </div>
      <div>
        <label htmlFor="email">
          Email <span className="text-accent">*</span>
        </label>
        <input id="email" type="email" className="w-full border-b-2 duration-300 border-b-neutral-300 focus:border-b-neutral-900 lg:hover:border-b-neutral-900 focus-visible:outline-none p-4" />
      </div>
      <div>
        <label htmlFor="phone">
          Phone Number(With Country Code) <span className="text-accent">*</span>
        </label>
        <input id="phone" type="tel" className="w-full border-b-2 duration-300 border-b-neutral-300 focus:border-b-neutral-900 lg:hover:border-b-neutral-900 focus-visible:outline-none p-4" />
      </div>
      <div>
        <label htmlFor="whatsapp">Whatsapp Number</label>
        <input id="whatsapp" type="tel" className="w-full border-b-2 duration-300 border-b-neutral-300 focus:border-b-neutral-900 lg:hover:border-b-neutral-900 focus-visible:outline-none p-4" />
      </div>
      <div>
        <label htmlFor="query">
          Your Query <span className="text-accent">*</span>
        </label>
        <textarea
          id="query"
          className="block w-full border-b-2 duration-300 border-b-neutral-300 focus:border-b-neutral-900 lg:hover:border-b-neutral-900 focus-visible:outline-none p-4 resize-none h-24"
        ></textarea>
      </div>
      <FormButton className="text-base">Submit</FormButton>
    </form>
  );
};

export default Form;
