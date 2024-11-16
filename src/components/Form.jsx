const Form = ({ className }) => {
  return (
    <form action="" className={className}>
      <div>
        <label htmlFor="name">First name *</label>
        <input id="name" type="text" className="w-full border-b-2 border-b-black focus-visible:outline-none p-4" />
      </div>
      <div>
        <label htmlFor="email">Email *</label>
        <input id="email" type="email" className="w-full border-b-2 border-b-black focus-visible:outline-none p-4" />
      </div>
      <div>
        <label htmlFor="phone">Phone Number(With Country Code) *</label>
        <input id="phone" type="tel" className="w-full border-b-2 border-b-black focus-visible:outline-none p-4" />
      </div>
      <div>
        <label htmlFor="whatsapp">Whatsapp Number</label>
        <input id="whatsapp" type="tel" className="w-full border-b-2 border-b-black focus-visible:outline-none p-4" />
      </div>
      <div>
        <label htmlFor="query">Your Query *</label>
        <textarea id="query" className="w-full border-b-2 border-b-black focus-visible:outline-none p-4 resize-none h-24"></textarea>
      </div>
      <button type="submit" className="text-base p-3 bg-neutral-900 text-white">
        Submit
      </button>
    </form>
  );
};

export default Form;
