import Section from "../components/Section";

const CookiesPolicies = () => {
  return (
    <Section className="p-4">
      <h1 className="text-2xl">
        <span className="font-semibold">Jadetimes</span>® Cookie Policy
      </h1>
      <p className="text-sm mb-4 border-b border-b-neutral-300 pb-4">Revised and posted as of the Effective Date: June 01, 2024</p>
      <section className="text-sm flex flex-col gap-4 mt-8">
        <h2 className="font-medium lg:text-base">Introduction</h2>
        <p>
          At Jadetimes Media, we are committed to providing you with the best possible online experience. To achieve this, our website uses cookies and similar technologies. This Cookie Policy
          explains what cookies are, how we use them, and your choices regarding their usage.
        </p>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8">
        <h2 className="font-medium lg:text-base">What Are Cookies?</h2>
        <p>
          Cookies are small text files that are placed on your computer or mobile device when you visit a website. They allow the website to recognize your device and store information about your
          preferences or past actions. Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device for a set period of time, while session cookies are deleted once you
          close your browser.
        </p>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8">
        <h2 className="font-medium lg:text-base">Types of Cookies We Use</h2>
        <section className="text-sm flex flex-col gap-4 ml-4">
          <h3 className="font-medium lg:text-base">Essential Cookies</h3>
          <p>
            These cookies are necessary for the basic functioning of our website. They enable you to navigate our site and use its features, such as accessing secure areas. Without these cookies,
            certain services you request cannot be provided.
          </p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4">
          <h3 className="font-medium lg:text-base">Performance and Analytics Cookies</h3>
          <p>
            We use these cookies to collect information about how visitors use our website. This data helps us understand which pages are most popular, how users move around the site, and if they
            encounter any errors. This information is aggregated and anonymous, and it helps us improve the website’s performance.
          </p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4">
          <h3 className="font-medium lg:text-base">Functional Cookies</h3>
          <p>
            Functional cookies allow our website to remember choices you make and provide enhanced, more personalized features. For example, these cookies can remember your username, language
            preferences, or the region you are in. They can also be used to provide services you have asked for, such as watching a video or commenting on a blog.
          </p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4">
          <h3 className="font-medium lg:text-base">Advertising and Targeting Cookies</h3>
          <p>
            These cookies are used to deliver ads that are more relevant to you and your interests. They can also limit the number of times you see an ad and help measure the effectiveness of
            advertising campaigns. They remember that you have visited a website and this information is shared with other organizations, such as advertisers.
          </p>
        </section>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8">
        <h2 className="font-medium lg:text-base">How We Use Cookies</h2>
        <div>We use cookies to:</div>
        <ul className="list-outside list-disc ml-8 flex flex-col gap-2">
          <li>Ensure the website functions as intended</li>
          <li>Provide a secure browsing experience</li>
          <li>Collect analytical data to improve our services</li>
          <li>Remember your preferences and personalize your experience</li>
          <li>Serve relevant advertisements</li>
        </ul>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8">
        <h2 className="font-medium lg:text-base">Third-Party Cookies</h2>
        <p>
          In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website and deliver advertisements. These third-party cookies are placed by
          third-party services that appear on our pages. These services may collect information about your online activities across different websites and over time.
        </p>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8">
        <h2 className="font-medium lg:text-base">Your Choices Regarding Cookies</h2>
        <div>You have several options for managing cookies on your device. You can set your browser to:</div>
        <ul className="list-outside list-disc ml-8 flex flex-col gap-2">
          <li>Automatically accept or reject cookies</li>
          <li>Delete all or specific cookies</li>
          <li>Notify you when a cookie is set</li>
        </ul>
        <p>Please note that blocking or deleting cookies may impact your user experience and some parts of our website may become inaccessible or not function properly.</p>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8">
        <h2 className="font-medium lg:text-base">Managing Cookies in Your Browser</h2>
        <div>
          You can find information on how to manage cookies in your specific browser by visiting the browser’s help section. Below are links to the cookie management instructions for popular browsers:
        </div>
        <ul className="list-outside list-disc ml-8 flex flex-col gap-2">
          <li>Google Chrome</li>
          <li>Mozilla Firefox</li>
          <li>Safari</li>
          <li>Microsoft Edge</li>
        </ul>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8">
        <h2 className="font-medium lg:text-base">Changes to This Cookie Policy</h2>
        <p>We may update this Cookie Policy from time to time to reflect changes in our practices or legal requirements. Any changes will be posted on this page with an updated revision date.</p>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8">
        <h2 className="font-medium lg:text-base">Contact Us</h2>
        <div>If you have any questions or concerns about our use of cookies or this Cookie Policy, please contact us at:</div>
        <ul className="list-outside list-disc ml-8 flex flex-col gap-2">
          <li>
            <span className="font-medium">Postal Address:</span>
            <address>
              <div>Jadetimes Media LLC</div>
              <div>8206 Louisiana Blvd NE, Ste B #10483</div>
              <div>Albuquerque, NM 87113</div>
              <div>United States</div>
            </address>
          </li>
          <li>
            <span className="font-medium">Email:</span>
            <div><a href="mailto:Info@jadetimes.com">Info@jadetimes.com</a></div>
          </li>
          <li>
            <span className="font-medium">Live chat:</span>
            <div>Chat support is provided as a convenience and may not be available at all times.</div>
          </li>
        </ul>
      </section>
    </Section>
  );
};

export default CookiesPolicies;
