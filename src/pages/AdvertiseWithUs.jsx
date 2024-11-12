import Address from "../components/Address";
import ShowCard from "../components/ShowCard";

const addresses = [
  {
    agent: "United States New Mexico Agent",
    street: "8206 Louisiana Blvd NE, Ste B #10483, Albuquerque, NM 87113",
    landline: "Landline +1 617 320 4530",
    fax: "Fax : +1 617 320 4530",
  },
  {
    agent: "United States New York Agent",
    street: "145 bishop street, Staten Island, NY 10306, USA",
    landline: "Landline : +1 929 321 3710",
    fax: "Fax : +1 929 321 3710",
  },
  {
    agent: "Sweden Agent",
    street: "1404, Terapivägen 12B, Huddinge, Stockholm, Sweden, 14156",
    landline: "Landline : +4 676 431 7837",
    fax: "Fax : +4 676 431 7837",
  },
  {
    agent: "Germany Agent",
    street: "Megaforce GmbH, Linnicher Str 2, Dusseldorf, 40210, Germany",
    landline: "Landline : +49 172 2008875",
    fax: "Fax : +49 172 2008875",
  },
  {
    agent: "Spain Agent",
    street: "Mall de costa, tingalado 3, tarragona, 43004",
    landline: "Landline : +3 460 218 2924",
    fax: "Fax : +3 460 218 2924",
  },
  {
    agent: "Sri Lanka Agent",
    street: "154/12, Pahalabiyan Villa, Kadawatha, 11850, Sri Lanka",
    landline: "Landline : +94 71 647 3158",
    fax: "Fax : +94 71 647 3158",
  },
  {
    agent: "India Agent",
    street: "Office no 475 New court's, Jalandhar, Punjab 144001, India",
    landline: "Landline : +91 70871 99788",
    fax: "Fax : +91 70871 99788",
  },
];

const AdvertiseWithUs = () => {
  return (
    <section className="p-4">
      <div className="max-w-[1000px] mx-auto">
        <h1 className="text-neutral-900 text-xl font-semibold border-b border-b-[#17171724] pb-1 md:text-center md:text-2xl md:pb-4 lg:text-3xl lg:py-8 lg:pb-11">Contact Us</h1>
        <h2 className="text-neutral-900 text-xl font-semibold my-3 md:text-base md:text-center md:my-8">Ad Sales Contacts in the America</h2>
        <ul className="border-y border-y-[#17171724] py-8 text-xs flex flex-col gap-6 text-center md:text-[0.8125rem] md:flex-row">
          <li className="md:w-1/2 md:pr-9 md:border-r md:border-r-[#17171724]">
            <Address address={addresses[0]} />
          </li>
          <li className="md:w-1/2 md:pl-9">
            <Address address={addresses[1]} />
          </li>
        </ul>
        <ul className="my-8 text-xs text-center flex flex-col gap-5 w-40 mx-auto md:w-96 md:text-[0.8125rem]">
          {addresses.slice(2, addresses.length).map((address, index) => (
            <li key={index}>
              <Address address={address} />
            </li>
          ))}
        </ul>
        <ShowCard className="mb-7 flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3" />
        <h2 className="text-2xl text-neutral-900 font-semibold">How to Report News To Us</h2>
        <div className="md:grid md:grid-cols-2 md:mb-4">
          <form action="" className="text-sm flex flex-col gap-4 mt-4 md:pr-6 md:border-r md:border-r-[#17171724]">
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
          <div className="text-sm text-neutral-900 flex flex-col gap-6 mt-8 md:mt-4 md:pl-6">
            <div>
              <h3 className="font-semibold">Online</h3>
              <div>Submit Request Form</div>
              <div>Live Chat</div>
              <div>Email : Info@jadetimes.com</div>
            </div>
            <div>
              <h3 className="font-semibold">Post</h3>
              <address>
                <div>Jadetimes Media LLC</div>
                <div>8206 Louisiana Blvd NE,</div>
                <div>Ste B #10483 Albuquerque,</div>
                <div>NM 87113 United States</div>
              </address>
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <div>USA : +1 9293213710</div>
            </div>
            <p className="text-xs">
                *Thank you for being a valued member of the Jadetimes Media community. We are dedicated to bringing you the stories that matter, with insightful analysis, breaking news, and a diverse
                range of perspectives. Your engagement and support are what drive us to deliver high quality content every day. We look forward to continuing this journey together, providing you with
                the news and information you need and trust. Thank you for choosing Jadetimes Media as your go-to source for the stories that shape our world.
              </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertiseWithUs;
