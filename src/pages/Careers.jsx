import ContactDetails from "../components/ContactDetails";
import ChevronIcon from "../components/ChevronIcon";
import FormButton from "../components/FormButton";
import Section from "../components/Section";

const Careers = () => {
  return (
    <Section className="p-4">
      <h1 className="text-center text-2xl lg:text-4xl">
        Apply Jadetimes Media Today!
      </h1>
      <div className="text-xl text-center lg:text-2xl lg:mt-2">
        Available Positions
      </div>
      <div className="my-6 sm:grid sm:grid-cols-2 sm:gap-4">
        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Internships Available</h2>
          <ul className="text-lg list-inside list-disc ml-4">
            <li>Marketing</li>
            <li>HR</li>
            <li>Video Editing</li>
            <li>Music Production</li>
            <li>2D/3D Animation Production</li>
            <li>Article Writing</li>
            <li>Research</li>
            <li>News Reporting</li>
          </ul>
        </section>
        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Vacancies Available</h2>
          <ul className="text-lg list-inside list-disc ml-4">
            <li>New York News Reporter</li>
            <li>United Kingdom News Reporter</li>
            <li>Russia News Reporter</li>
            <li>Ukraine News Reporter</li>
            <li>UAE News Reporter</li>
            <li>Australia News Reporter</li>
            <li>Professional Reporter (Any Country)</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Jadetimes Contributor</h2>
          <ul className="text-lg list-inside list-disc ml-4">
            <li>Join with Jadetimes Media as a Part-Timer</li>
          </ul>
        </section>
      </div>
      <p className="lg:text-sm">
        Note* JadeTimes, a highly reputable media company, is offering an
        exciting opportunity for interns to join our team on a work from home
        basis. This internship is unpaid, as it focuses on providing
        comprehensive training to equip you with valuable skills and experience
        in the media industry.
      </p>
      <div className="mt-6 md:grid md:grid-cols-2">
        <div>
          <h2 className="text-xl text-center mb-6 lg:text-3xl">
            Submit Your Application Today!
          </h2>
          <form
            action=""
            className="text-sm flex flex-col gap-4 mt-4 md:pr-5"
          >
            <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-4">
              <div>
                <label htmlFor="name">
                  Full name <span className="text-accent">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full border-2 border-neutral-300 duration-300 lg:hover:border-neutral-900 focus:border-neutral-900 focus-visible:outline-none p-3 mt-2 md:border-x-0 md:border-t-0"
                />
              </div>
              <div>
                <label htmlFor="country">Country</label>
                <input
                  id="country"
                  type="text"
                  className="w-full border-2 border-neutral-300 duration-300 lg:hover:border-neutral-900 focus:border-neutral-900 focus-visible:outline-none p-3 mt-2 md:border-x-0 md:border-t-0"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email">
                Email <span className="text-accent">*</span>
              </label>
              <input
                id="email"
                type="email"
                className="w-full border-2 border-neutral-300 duration-300 lg:hover:border-neutral-900 focus:border-neutral-900 focus-visible:outline-none p-3 mt-2 md:border-x-0 md:border-t-0"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <label htmlFor="whatsapp">
                  Whatsapp Number <span className="text-accent">*</span>
                </label>
                <input
                  id="whatsapp"
                  type="tel"
                  className="w-full border-2 border-neutral-300 duration-300 lg:hover:border-neutral-900 focus:border-neutral-900 focus-visible:outline-none p-3 mt-2 md:border-x-0 md:border-t-0"
                />
              </div>
              <div className="lg:flex lg:flex-col lg:justify-between">
                <label htmlFor="cv" className="block">
                  CV Upload
                </label>
                <input
                  type="file"
                  id="cv"
                  className="w-full border-2 duration-300 lg:hover:border-neutral-900 focus:border-neutral-900 focus-visible:outline-none mt-2 md:border-x-0 md:border-t-0 file:p-3 file:border-0 file:bg-neutral-200 file:mr-3"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-4">
              <div>
                <label htmlFor="job">Applying To</label>
                <div className="relative mt-2">
                  <select
                    id="job"
                    className="w-full border-2 border-neutral-300 duration-300 lg:hover:border-neutral-900 focus:border-neutral-900 focus-visible:outline-none p-3 md:border-x-0 md:border-t-0 appearance-none"
                  >
                    <option value=""></option>
                    <option value="internships">Internships</option>
                    <option value="vacancies">Vacancies</option>
                    <option value="jadetimes-contributor<">
                      Jadetimes Contributor
                    </option>
                  </select>
                  <ChevronIcon className="w-5 absolute right-3 top-1/2 -translate-y-1/2 rotate-90 -z-10" />
                </div>
              </div>
              <div>
                <label htmlFor="country">Position Applying</label>
                <input
                  id="country"
                  type="text"
                  className="w-full border-2 border-neutral-300 duration-300 lg:hover:border-neutral-900 focus:border-neutral-900 focus-visible:outline-none p-3 mt-2 md:border-x-0 md:border-t-0"
                />
              </div>
            </div>
            <FormButton className="text-base">
              Submit Your Application
            </FormButton>
          </form>
        </div>
        <div className="text-sm text-neutral-900 flex flex-col gap-6 mt-8 md:pl-5 md:mt-1 md:border-l border-neutral-300">
          <ContactDetails />
        </div>
      </div>
    </Section>
  );
};
export default Careers;
