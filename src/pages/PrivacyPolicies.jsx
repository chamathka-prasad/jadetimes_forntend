import { useRef } from "react";
import { Link } from "react-router-dom";

import Section from "../components/Section";
import LinkToHome from "../components/LinkToHome";

const PrivacyPolicies = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section21Ref = useRef(null);
  const section22Ref = useRef(null);
  const section23Ref = useRef(null);
  const section3Ref = useRef(null);
  const section31Ref = useRef(null);
  const section32Ref = useRef(null);
  const section33Ref = useRef(null);
  const section4Ref = useRef(null);
  const section41Ref = useRef(null);
  const section42Ref = useRef(null);
  const section43Ref = useRef(null);
  const section44Ref = useRef(null);
  const section5Ref = useRef(null);
  const section51Ref = useRef(null);
  const section52Ref = useRef(null);
  const section53Ref = useRef(null);
  const section6Ref = useRef(null);
  const section61Ref = useRef(null);
  const section62Ref = useRef(null);
  const section7Ref = useRef(null);
  const section71Ref = useRef(null);
  const section72Ref = useRef(null);
  const section8Ref = useRef(null);
  const section81Ref = useRef(null);
  const section82Ref = useRef(null);
  const section9Ref = useRef(null);
  const section91Ref = useRef(null);
  const section92Ref = useRef(null);
  const section93Ref = useRef(null);
  const section94Ref = useRef(null);
  const section95Ref = useRef(null);
  const section96Ref = useRef(null);
  const section97Ref = useRef(null);
  const section10Ref = useRef(null);
  const section101Ref = useRef(null);
  const section102Ref = useRef(null);
  const section11Ref = useRef(null);
  const section111Ref = useRef(null);
  const section112Ref = useRef(null);
  const section113Ref = useRef(null);
  const section12Ref = useRef(null);
  const section121Ref = useRef(null);
  const section122Ref = useRef(null);
  const section13Ref = useRef(null);
  const section131Ref = useRef(null);
  const section132Ref = useRef(null);
  const section14Ref = useRef(null);
  const section141Ref = useRef(null);
  const section142Ref = useRef(null);
  const section15Ref = useRef(null);
  const section16Ref = useRef(null);

  function scrollToSection(ref) {
    window.scrollTo({
      top: ref.current.offsetTop - 120,
      behavior: "smooth",
    });
  }

  return (
    <Section className="p-4">
      <h1 className="text-2xl">
        <span className="font-semibold">Jadetimes</span>® Privacy Policy
      </h1>
      <p className="text-sm mb-4">Revised and posted as of the Effective Date: June 01, 2024</p>
      <div className="pt-4 border-t border-t-neutral-300 md:grid md:grid-cols-7">
        <section className="md:order-2 md:col-span-4 md:border-l md:border-l-neutral-300 md:pl-8 lg:col-span-5">
          <h2 className="text-2xl lg:text-3xl">Welcome to Jadetimes Media LLC!</h2>
          <div className="text-sm flex flex-col gap-4 mt-4 lg:gap-6 lg:mt-8">
            <p>
              Thank you for visiting Jadetimes Media's Privacy Policy page. We are committed to protecting your privacy and ensuring that your personal information is handled securely and responsibly.
              Here, you can find detailed information about how we collect, use, and protect your data.
            </p>
            <p>
              If you have any questions or concerns about our practices or your personal information, please don't hesitate to reach out to us using the contact information provided below. Your
              privacy matters to us, and we strive to be transparent and clear in how we handle your data.
            </p>
            <p>Thank you for choosing Jadetimes Media LLC. We look forward to serving you and providing you with valuable content and services.</p>
          </div>
        </section>
        <section className="mt-4 md:mt-0 md:pr-8 md:col-span-3 lg:col-span-2">
          <h2 className="text-xl font-semibold">Content</h2>
          <ul className="text-sm mt-2 lg:text-xs">
            <li className="mb-1">
              <Link className="underline line-clamp-1" onClick={() => scrollToSection(section1Ref)}>
                1. Introduction
              </Link>
            </li>
            <li className="mb-1">
              <Link className="underline line-clamp-1" onClick={() => scrollToSection(section2Ref)}>
                2. Information We Collect
              </Link>
              <ul className="ml-10">
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section21Ref)}>
                    2.1. Personal Data
                  </Link>
                </li>
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section22Ref)}>
                    2.2. Non-Personal Data
                  </Link>
                </li>
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section23Ref)}>
                    2.3. Cookies and Tracking Technologies
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mb-1">
              <Link className="underline line-clamp-1" onClick={() => scrollToSection(section3Ref)}>
                3. How We Collect Your Information
              </Link>
              <ul className="ml-10">
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section31Ref)}>
                    3.1. Direct Interactions
                  </Link>
                </li>
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section32Ref)}>
                    3.2. Automated Technologies
                  </Link>
                </li>
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section33Ref)}>
                    3.3. Third-Party Sources
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mb-1">
              <Link className="underline line-clamp-1" onClick={() => scrollToSection(section4Ref)}>
                4. How We Use Your Information
              </Link>
              <ul className="ml-10">
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section41Ref)}>
                    4.1. Service Delivery
                  </Link>
                </li>
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section42Ref)}>
                    4.2. Marketing and Communications
                  </Link>
                </li>
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section43Ref)}>
                    4.3. Legal Obligations
                  </Link>
                </li>
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section44Ref)}>
                    4.4. Legitimate Interests
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mb-1">
              <Link className="underline line-clamp-1" onClick={() => scrollToSection(section5Ref)}>
                5. Sharing Your Information
              </Link>
              <ul className="ml-10">
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section51Ref)}>
                    5.1. Third-Party Service Providers
                  </Link>
                </li>
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section52Ref)}>
                    5.2. Legal Requirements
                  </Link>
                </li>
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section53Ref)}>
                    5.3. Business Transfers
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mb-1">
              <Link className="underline line-clamp-1" onClick={() => scrollToSection(section6Ref)}>
                6. International Data Transfers
              </Link>
              <ul className="ml-10">
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section61Ref)}>
                    6.1. Cross-Border Data Transfer
                  </Link>
                </li>
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section62Ref)}>
                    6.2. Safeguards
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mb-1">
              <Link className="underline line-clamp-1" onClick={() => scrollToSection(section7Ref)}>
                7. Data Security
              </Link>
              <ul className="ml-10">
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section71Ref)}>
                    7.1. Security Measures
                  </Link>
                </li>
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section72Ref)}>
                    7.2. Data Breach Protocols
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mb-1">
              <Link className="underline line-clamp-1" onClick={() => scrollToSection(section8Ref)}>
                8. Data Retention
              </Link>
              <ul className="ml-10">
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section81Ref)}>
                    8.1. Retention Periods
                  </Link>
                </li>
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section82Ref)}>
                    8.2. Deletion Procedures
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mb-1">
              <Link className="underline line-clamp-1" onClick={() => scrollToSection(section9Ref)}>
                9. Your Rights
              </Link>
              <ul className="ml-10">
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section91Ref)}>
                    9.1. Access
                  </Link>
                </li>
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section92Ref)}>
                    9.2. Correction
                  </Link>
                </li>
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section93Ref)}>
                    9.3. Erasure
                  </Link>
                </li>
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section94Ref)}>
                    9.4. Object to Processing
                  </Link>
                </li>
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section95Ref)}>
                    9.5. Restrict Processing
                  </Link>
                </li>
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section96Ref)}>
                    9.6. Data Portability
                  </Link>
                </li>
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section97Ref)}>
                    9.7. Withdraw Consent
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mb-1">
              <Link className="underline line-clamp-1" onClick={() => scrollToSection(section10Ref)}>
                10. Special Privacy Rights by Region
              </Link>
              <ul className="ml-10">
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section101Ref)}>
                    10.1. European Union, Switzerland, and UK (GDPR)
                  </Link>
                </li>
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section102Ref)}>
                    10.2. People's Republic of China (PIPL)
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mb-1">
              <Link className="underline line-clamp-1" onClick={() => scrollToSection(section11Ref)}>
                11. Exercising Your Rights
              </Link>
              <ul className="ml-10">
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section111Ref)}>
                    11.1. How to Make a Request
                  </Link>
                </li>
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section112Ref)}>
                    11.2. Identity Verification
                  </Link>
                </li>
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section113Ref)}>
                    11.3. Response Times
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mb-1">
              <Link className="underline line-clamp-1" onClick={() => scrollToSection(section12Ref)}>
                12. Children's Privacy
              </Link>
              <ul className="ml-10">
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section121Ref)}>
                    12.1. Data Collection from Minors
                  </Link>
                </li>
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section122Ref)}>
                    12.2. Parental Controls
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mb-1">
              <Link className="underline line-clamp-1" onClick={() => scrollToSection(section13Ref)}>
                13. Third-Party Links
              </Link>
              <ul className="ml-10">
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section131Ref)}>
                    13.1. External Websites
                  </Link>
                </li>
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section132Ref)}>
                    13.2. Liability
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mb-1">
              <Link className="underline line-clamp-1" onClick={() => scrollToSection(section14Ref)}>
                14. Changes to This Privacy Policy
              </Link>
              <ul className="ml-10">
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section141Ref)}>
                    14.1. Updates
                  </Link>
                </li>
                <li className="mb-1">
                  <Link className="underline line-clamp-1" onClick={() => scrollToSection(section142Ref)}>
                    14.2. Notification Procedures
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mb-1">
              <Link className="underline line-clamp-1" onClick={() => scrollToSection(section15Ref)}>
                15. Contact Us
              </Link>
            </li>
            <li className="mb-1">
              <Link className="underline line-clamp-1" onClick={() => scrollToSection(section16Ref)}>
                16. Glossary
              </Link>
            </li>
          </ul>
        </section>
      </div>
      <section className="text-sm flex flex-col gap-4 mt-8" ref={section1Ref}>
        <h2 className="font-medium lg:text-base">1. Introduction</h2>
        <p>
          Welcome to Jadetimes Media. We are committed to protecting your privacy and ensuring the security of your personal data. This privacy policy explains how we collect, use, disclose, and
          safeguard your information when you interact with our services. By using our services, you agree to the terms outlined in this policy.
        </p>
        <ul className="list-outside list-disc ml-8 flex flex-col gap-2">
          <li>The types of personal data we collect</li>
          <li>How we use your personal data</li>
          <li>Your rights regarding your personal data</li>
          <li>How we secure your personal data</li>
          <li>How to contact us with questions or concerns about your privacy</li>
        </ul>
        <section className="text-sm flex flex-col gap-4 ml-4">
          <h3 className="font-medium lg:text-base">Scope of Policy</h3>
          <p>This privacy policy applies to all personal data collected through:</p>
          <ul className="list-outside list-disc ml-8 flex flex-col gap-2">
            <li>
              Our website <LinkToHome className="underline">(www.jadetimes.com)</LinkToHome>
            </li>
            <li>Mobile applications</li>
            <li>Social media platforms</li>
            <li>Other online and offline interactions</li>
          </ul>
          <p>It applies to all users, including visitors, customers, and business partners of Jadetimes Media LLC, registered as an LLC in the USA.</p>
        </section>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8" ref={section2Ref}>
        <h2 className="font-medium lg:text-base">2. Information We Collect</h2>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section21Ref}>
          <h3 className="font-medium lg:text-base">2.1. Personal Data</h3>
          <p>
            At Jadetimes Media, we collect personal data that you voluntarily provide to us when you interact with our services. Personal data refers to any information that can identify you directly
            or indirectly. The types of personal data we collect may include:
          </p>
          <ul className="list-outside list-disc ml-8 flex flex-col gap-2">
            <li>
              <span className="font-medium">Contact Information:</span> Such as your name, email address, phone number, and mailing address.
            </li>
            <li>
              <span className="font-medium">Account Information:</span> Such as username, password, and other credentials used to access our services.
            </li>
            <li>
              <span className="font-medium">Payment Information:</span> Such as credit card details or other payment methods.
            </li>
            <li>
              <span className="font-medium">Demographic Information:</span> Such as age, gender, and language preferences.
            </li>
            <li>
              <span className="font-medium">Communication Preferences:</span> Such as your preferences in receiving marketing materials and communications from us.
            </li>
            <li>
              <span className="font-medium">Content:</span> Such as comments, reviews, and other information you provide when interacting with our services.
            </li>
          </ul>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section22Ref}>
          <h3 className="font-medium lg:text-base">2.2. Non-Personal Data</h3>
          <p>We also collect non-personal data that does not directly identify you. This may include:</p>
          <ul className="list-outside list-disc ml-8 flex flex-col gap-2">
            <li>
              <span className="font-medium">Usage Data:</span> Such as information about your interactions with our website, mobile applications, and other services (e.g., pages visited, links
              clicked, etc.).
            </li>
            <li>
              <span className="font-medium">Device Information:</span> Such as your IP address, browser type, device type, operating system, and language settings.
            </li>
            <li>
              <span className="font-medium">Aggregated Data:</span> Data that is combined or anonymized, which does not directly identify any individual.
            </li>
          </ul>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section23Ref}>
          <h3 className="font-medium lg:text-base">2.3. Cookies and Tracking Technologies</h3>
          <p>
            We use cookies and similar tracking technologies to enhance your experience and analyze how our services are used. Cookies are small text files stored on your device that contain data
            about your browsing behavior. These technologies help us:
          </p>
          <ul className="list-outside list-disc ml-8 flex flex-col gap-2">
            <li>
              <span className="font-medium">Provide and Operate Our Services:</span> Cookies are essential for the functioning of certain features of our website and services.
            </li>
            <li>
              <span className="font-medium">Improve Our Services:</span> Analyze trends, track user movements, and gather demographic information.
            </li>
            <li>
              <span className="font-medium">Personalize Your Experience:</span> Remember your preferences and settings for a more personalized user experience.
            </li>
            <li>
              <span className="font-medium">Marketing and Advertising:</span> Deliver relevant advertisements based on your interests and behavior.
            </li>
          </ul>
          <p>
            You have the option to manage cookies through your browser settings or by opting out where applicable. However, please note that disabling cookies may affect your ability to access certain
            features of our services.
          </p>
        </section>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8" ref={section3Ref}>
        <h2 className="font-medium lg:text-base">3. How We Collect Your Information</h2>
        <p>At Jadetimes Media, we utilize various methods to gather information that allows us to provide personalized services and enhance your overall experience.</p>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section31Ref}>
          <h3 className="font-medium lg:text-base">3.1. Direct Interactions</h3>
          <p>
            Direct interactions occur when you actively engage with us. This includes creating an account, updating your profile details, subscribing to our newsletters, participating in surveys or
            contests, or reaching out to our customer support team for assistance. Through these interactions, you provide us with specific personal data voluntarily, enabling us to fulfill your
            requests and improve our services to better meet your needs.
          </p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section32Ref}>
          <h3 className="font-medium lg:text-base">3.2. Automated Technologies</h3>
          <p>
            We employ automated technologies such as cookies, log files, and web beacons to collect information passively. These technologies automatically track and record certain data related to
            your browsing behavior and preferences on our website. By analyzing this data, we gain insights into how you navigate our platform, which content interests you the most, and how we can
            customize our offerings to enhance your user experience.
          </p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section33Ref}>
          <h3 className="font-medium lg:text-base">3.3. Third-Party Sources</h3>
          <p>
            In addition to direct interactions and automated technologies, we may obtain information from third-party sources. These sources may include social media platforms where you have chosen to
            link your account with Jadetimes Media, analytics providers offering insights into user demographics and behavior patterns, and advertising partners helping us deliver relevant
            advertisements to you. We ensure that our data collection from third-party sources complies with legal requirements and is conducted with your consent where necessary, maintaining
            transparency and accountability in how we handle your information.
          </p>
        </section>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8" ref={section4Ref}>
        <h2 className="font-medium lg:text-base">4. How We Use Your Information</h2>
        <p>At Jadetimes Media, we utilize the information collected for various purposes to enhance our services and ensure a personalized user experience.</p>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section41Ref}>
          <h3 className="font-medium lg:text-base">4.1. Service Delivery</h3>
          <p>
            We use your information to provide, personalize, and improve our services. This includes processing transactions, delivering products or services you request, managing your account, and
            responding to your inquiries and customer service requests effectively.
          </p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section42Ref}>
          <h3 className="font-medium lg:text-base">4.2. Marketing and Communications</h3>
          <p>
            We may use your information to communicate with you about products, services, promotions, and events that may be of interest to you. This communication may occur through various channels
            such as email, SMS, telephone, or targeted advertising on our website or third-party platforms. You have the option to opt-out of receiving marketing communications at any time.
          </p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section43Ref}>
          <h3 className="font-medium lg:text-base">4.3. Legal Obligations</h3>
          <p>
            In certain circumstances, we may be required to use or disclose your information to comply with legal obligations. This includes cooperating with regulatory authorities, law enforcement
            agencies, or complying with court orders and legal processes.
          </p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section44Ref}>
          <h3 className="font-medium lg:text-base">4.4. Legitimate Interests</h3>
          <p>
            We may process your information for our legitimate business interests, provided that such processing does not outweigh your rights and freedoms. This includes improving our services,
            conducting research and analytics to better understand our users' needs and preferences, detecting and preventing fraud or security incidents, and enhancing the safety and security of our
            website and services.
          </p>
        </section>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8" ref={section5Ref}>
        <h2 className="font-medium lg:text-base">5. Sharing Your Information</h2>
        <p>At Jadetimes Media, we value your privacy and are committed to ensuring your information is handled securely and responsibly. Here’s how we share your information.</p>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section51Ref}>
          <h3 className="font-medium lg:text-base">5.1. Third-Party Service Providers</h3>
          <p>
            We may share your information with trusted third-party service providers who assist us in delivering our services, such as payment processors, IT service providers, and marketing partners.
            These third parties are contractually obligated to use your information only as necessary to provide the services we require and to comply with applicable legal requirements regarding data
            protection.
          </p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section52Ref}>
          <h3 className="font-medium lg:text-base">5.2. Legal Requirements</h3>
          <p>
            We may disclose your information if required to do so by law, regulation, or legal process. This includes responding to lawful requests and legal obligations, such as court orders or
            government agencies requesting information.
          </p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section53Ref}>
          <h3 className="font-medium lg:text-base">5.3. Business Transfers</h3>
          <p>
            In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of the transaction. We will notify you via email and/or prominent
            notice on our website of any change in ownership or uses of your information, as well as any choices you may have regarding your information. We do not sell your personal information to
            third parties for their own marketing purposes without your explicit consent.
          </p>
        </section>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8" ref={section6Ref}>
        <h2 className="font-medium lg:text-base">6. International Data Transfers</h2>
        <p>
          At Jadetimes Media, we may transfer your information to countries outside of your jurisdiction for processing and storage. We take steps to ensure that your information is protected
          regardless of where it is transferred.
        </p>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section61Ref}>
          <h3 className="font-medium lg:text-base">6.1. Cross-Border Data Transfer</h3>
          <p>
            Your personal information may be transferred to and stored in countries outside of your country of residence, where data protection laws may differ. By using our services, you consent to
            the transfer of your information to these countries.
          </p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section62Ref}>
          <h3 className="font-medium lg:text-base">6.2. Safeguards</h3>
          <p>
            We implement appropriate safeguards to ensure the security and confidentiality of your information during international transfers. These safeguards may include contractual agreements with
            recipients based on standard contractual clauses approved by relevant authorities, or ensuring recipients are Privacy Shield certified if transferring to the United States.
          </p>
        </section>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8" ref={section7Ref}>
        <h2 className="font-medium lg:text-base">7. Data Security</h2>
        <p>At Jadetimes Media, safeguarding your personal information is a fundamental priority, and we have implemented comprehensive measures to ensure its security.</p>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section71Ref}>
          <h3 className="font-medium lg:text-base">7.1. Security Measures</h3>
          <p>
            We utilize state of the art security technologies and rigorous protocols to protect your personal data against unauthorized access, misuse, or disclosure. Our infrastructure includes
            robust encryption methods, secure servers, stringent access controls, and regular security audits to proactively identify and address vulnerabilities. By adhering to industry best
            practices and standards, we maintain a secure environment for your information, ensuring that only authorized personnel have access and that your data remains protected throughout its
            lifecycle.
          </p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section72Ref}>
          <h3 className="font-medium lg:text-base">7.2. Data Breach Protocols</h3>
          <p>
            In the unlikely event of a data breach affecting your personal information, Jadetimes Media has established clear and swift response protocols. These protocols include immediate
            investigation to determine the scope and impact of the breach, mitigation measures to minimize potential harm, and, if necessary, notification to you and relevant regulatory authorities in
            accordance with legal requirements.
          </p>
          <p>
            Our commitment to data security is ongoing, and we continuously review and enhance our security measures to adapt to emerging threats and technologies. By prioritizing the confidentiality
            and integrity of your data, we strive to maintain your trust in Jadetimes Media's handling of your personal information.
          </p>
        </section>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8" ref={section8Ref}>
        <h2 className="font-medium lg:text-base">8. Data Retention</h2>
        <p>At Jadetimes Media, we adhere to clear policies regarding the retention and deletion of your personal information, ensuring responsible management throughout its lifecycle.</p>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section81Ref}>
          <h3 className="font-medium lg:text-base">8.1. Retention Periods</h3>
          <p>
            We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. The
            retention periods vary depending on the type of information and the purposes for which it was collected. For example, we may retain personal data to comply with legal obligations, resolve
            disputes, enforce our agreements, or support business operations.
          </p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section82Ref}>
          <h3 className="font-medium lg:text-base">8.2. Deletion Procedures</h3>
          <p>
            When personal data is no longer necessary for the purposes for which it was collected or if you withdraw consent (where applicable), we securely delete or anonymize it in accordance with
            our data retention policies and procedures. Deletion methods are designed to prevent unauthorized access, misuse, or accidental loss of your personal information.
          </p>
          <p>
            By implementing these retention and deletion procedures, Jadetimes Media ensures that your personal data is retained only for as long as necessary and securely managed throughout its
            lifecycle. This approach reflects our commitment to protecting your privacy and complying with legal obligations regarding data retention.
          </p>
        </section>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8" ref={section9Ref}>
        <h2 className="font-medium lg:text-base">9. Your Rights</h2>
        <p>At Jadetimes Media, safeguarding your personal data is paramount, and we are committed to ensuring transparency and facilitating the exercise of your data rights under applicable laws.</p>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section91Ref}>
          <h3 className="font-medium lg:text-base">9.1. Access</h3>
          <p>
            You have the right to request access to the personal data we hold about you. This empowers you to confirm whether we process your personal data and to receive specific details about how
            and why we process it, ensuring transparency and accountability in our data handling practices.
          </p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section92Ref}>
          <h3 className="font-medium lg:text-base">9.2. Correction</h3>
          <p>
            Should you believe that any personal data we hold about you is inaccurate or incomplete, you have the right to request corrections. We prioritize the accuracy of your information and will
            promptly update or rectify any inaccuracies upon verification, ensuring your data remains reliable and up-to-date.
          </p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section93Ref}>
          <h3 className="font-medium lg:text-base">9.3. Erasure</h3>
          <p>
            You can request the deletion or removal of your personal data when it is no longer necessary for the purposes for which it was collected, if you withdraw consent (where applicable), or if
            there are no overriding legitimate grounds for continued processing. This right enables you to have control over your data and its retention.
          </p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section94Ref}>
          <h3 className="font-medium lg:text-base">9.4. Object to Processing</h3>
          <p>
            In certain circumstances, you have the right to object to the processing of your personal data, including instances where we rely on legitimate interests as our legal basis for processing.
            We will carefully assess your objection and cease processing unless we demonstrate compelling legitimate grounds that override your interests, rights, and freedoms, ensuring your concerns
            are addressed respectfully.
          </p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section95Ref}>
          <h3 className="font-medium lg:text-base">9.5. Restrict Processing</h3>
          <p>
            Under specific conditions, you have the right to request the restriction of processing of your personal data, such as contesting the accuracy of your data or objecting to processing based
            on legitimate interests. This right allows you to limit how your data is processed while issues are resolved or verified, ensuring your data's integrity and appropriate use.
          </p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section96Ref}>
          <h3 className="font-medium lg:text-base">9.6. Data Portability</h3>
          <p>
            Where technically feasible, you can request to receive your personal data in a structured, commonly used, and machine-readable format. This facilitates your ability to transfer your data
            to another data controller without hindrance from us, promoting data interoperability and enhancing your control over your information.
          </p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section97Ref}>
          <h3 className="font-medium lg:text-base">9.7. Withdraw Consent</h3>
          <p>
            If we rely on your consent to process your personal data, you have the right to withdraw that consent at any time. This withdrawal does not affect the lawfulness of any processing based on
            consent before its withdrawal, respecting your autonomy over how your data is used.
          </p>
          <p>
            To exercise any of these rights or if you have any questions regarding the processing of your personal data, please contact us using the details provided in the "Contact Us" section below.
            We are dedicated to responding to your requests promptly and within the timeframe stipulated by applicable data protection laws.
          </p>
        </section>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8" ref={section10Ref}>
        <h2 className="font-medium lg:text-base">10. Special Privacy Rights by Region</h2>
        <p>
          At Jadetimes Media, we respect and uphold privacy rights as mandated by regional laws, ensuring that your personal data is handled with transparency and in compliance with applicable
          regulations.
        </p>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section101Ref}>
          <h3 className="font-medium lg:text-base">10.1. European Union, Switzerland, and UK (GDPR)</h3>
          <p>If you are located in the European Union, Switzerland, or the UK, you are entitled to specific rights under the General Data Protection Regulation (GDPR):</p>
          <ul className="list-outside list-disc ml-8 flex flex-col gap-2">
            <li>
              <span className="font-medium">Access:</span> You have the right to request access to your personal data and obtain information about how we process it.
            </li>
            <li>
              <span className="font-medium">Correction:</span> You can request correction of inaccuracies or incomplete data we hold about you.
            </li>
            <li>
              <span className="font-medium">Erasure:</span> You have the right to request deletion of your personal data under certain circumstances.
            </li>
            <li>
              <span className="font-medium">Object to Processing:</span> You can object to the processing of your personal data, including for direct marketing purposes.
            </li>
            <li>
              <span className="font-medium">Restrict Processing:</span> In certain situations, you can request restriction of the processing of your personal data.
            </li>
            <li>
              <span className="font-medium">Data Portability:</span> You have the right to receive your personal data in a structured, commonly used, machine-readable format.
            </li>
            <li>
              <span className="font-medium">Withdraw Consent:</span> Where we rely on consent for processing, you have the right to withdraw your consent at any time.
            </li>
          </ul>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section102Ref}>
          <h3 className="font-medium lg:text-base">10.2. People's Republic of China (PIPL)</h3>
          <p>If you reside in the People's Republic of China, the Personal Information Protection Law (PIPL) grants you specific rights concerning your personal information:</p>
          <ul className="list-outside list-disc ml-8 flex flex-col gap-2">
            <li>
              <span className="font-medium">Access, Correction, and Deletion:</span> You have the right to access, correct, and delete your personal information.
            </li>
            <li>
              <span className="font-medium">Restrict or Object to Processing:</span> You can request restrictions on certain processing activities or object to the processing of your personal
              information.
            </li>
            <li>
              <span className="font-medium">Data Portability:</span> Upon request, you can obtain a copy of your personal information in a commonly used electronic format.
            </li>
            <li>
              <span className="font-medium">Deceased Persons' Information:</span> Close relatives of deceased individuals can request access, correction, or deletion of their personal information held
              by us.
            </li>
            <li>
              <span className="font-medium">Third-Party Disclosures:</span> You have the right to inquire about third parties with whom we share your personal information.
            </li>
          </ul>
        </section>
        <p>
          These rights empower you to have control over your personal data and how it is processed. To exercise these rights or for any inquiries related to your privacy, please contact us using the
          details provided in the "Contact Us" section below.
        </p>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8" ref={section11Ref}>
        <h2 className="font-medium lg:text-base">11. Exercising Your Rights</h2>
        <p>
          At Jadetimes Media, we are committed to ensuring that you can exercise your privacy rights effectively and securely. Depending on your location and the applicable laws, you have specific
          rights regarding your personal data, and we are here to assist you in exercising those rights.
        </p>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section111Ref}>
          <h3 className="font-medium lg:text-base">11.1. How to Make a Request</h3>
          <p>
            To make a request regarding your personal data, including accessing, correcting, deleting, or restricting its processing, please contact us using the information provided in the "Contact
            Us" section of this Privacy Policy. We may ask you to specify the nature of your request to facilitate our response promptly.
          </p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section112Ref}>
          <h3 className="font-medium lg:text-base">11.2. Identity Verification</h3>
          <p>
            To protect your privacy and security, and to ensure that your personal data is not disclosed to unauthorized parties, we may need to verify your identity before fulfilling your request.
            This may require us to ask for specific information to confirm your identity. We will handle any personal data collected for verification purposes in accordance with our Privacy Policy.
          </p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section113Ref}>
          <h3 className="font-medium lg:text-base">11.3. Response Times</h3>
          <p>
            We strive to respond to all legitimate requests within a reasonable timeframe as required by applicable laws. The time required to process your request may vary depending on the complexity
            and scope of your request. If we anticipate a delay or are unable to fulfill your request within a reasonable period, we will notify you and provide an explanation.
          </p>
        </section>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8" ref={section12Ref}>
        <h2 className="font-medium lg:text-base">12. Children's Privacy</h2>
        <p>
          At Jadetimes Media, we recognize the importance of protecting children's privacy, especially in an online environment. We do not knowingly collect or solicit personal data from minors under
          the age of 16 without verifiable parental consent. If we discover that we have inadvertently collected personal data from a minor without appropriate consent, we will take prompt steps to
          delete such information from our records.
        </p>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section121Ref}>
          <h3 className="font-medium lg:text-base">12.1. Data Collection from Minors</h3>
          <p>
            We do not intentionally collect personal data from individuals under the age of 16 without verifiable parental consent. If you believe that we may have collected personal data from a minor
            without parental consent, please contact us immediately using the information provided in the "Contact Us" section of this Privacy Policy. We will take appropriate steps to investigate and
            address the issue promptly.
          </p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section122Ref}>
          <h3 className="font-medium lg:text-base">12.2. Parental Controls</h3>
          <p>
            Parents and guardians play a crucial role in protecting the privacy of minors online. We encourage parents and guardians to monitor their children's online activities, implement parental
            controls on devices and services they use, and guide their children on safe and responsible use of the internet. If you are a parent or guardian and believe that your child has provided
            personal data to us without your consent, please contact us, and we will promptly take steps to delete such information.
          </p>
        </section>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8" ref={section13Ref}>
        <h2 className="font-medium lg:text-base">13. Third-Party Links</h2>
        <p>
          At Jadetimes Media, we may provide links to third-party websites or services that are not operated or controlled by us. This Privacy Policy applies solely to information collected by
          Jadetimes Media through our own platforms and services. We encourage you to review the privacy policies of any third-party websites or services that you visit through links provided on our
          platforms.
        </p>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section131Ref}>
          <h3 className="font-medium lg:text-base">13.1. External Websites</h3>
          <p>
            Our platforms may contain links to external websites or services that are not operated or controlled by Jadetimes Media. We do not have control over the content, privacy policies, or
            practices of these third-party websites or services. Therefore, we cannot be responsible for the protection and privacy of any information that you provide while visiting such websites. We
            encourage you to review the privacy policies of these third-party websites before providing any personal data.
          </p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section132Ref}>
          <h3 className="font-medium lg:text-base">13.2. Liability</h3>
          <p>
            Jadetimes Media strives to ensure that any third-party links provided on our platforms are safe and reliable. However, we cannot guarantee the security and integrity of these third-party
            websites or services. Visiting external links is at your own risk, and Jadetimes Media shall not be liable for any damages or losses arising from your use of third-party websites or
            services linked from our platforms.
          </p>
        </section>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8" ref={section14Ref}>
        <h2 className="font-medium lg:text-base">14. Changes to This Privacy Policy</h2>
        <p>
          Jadetimes Media reserves the right to update or modify this Privacy Policy at any time. Any changes we make will be posted on this page with an updated revision date. We encourage you to
          review this Privacy Policy periodically for any updates.
        </p>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section141Ref}>
          <h3 className="font-medium lg:text-base">14.1. Updates</h3>
          <p>
            We may update this Privacy Policy to reflect changes in our practices or for other operational, legal, or regulatory reasons. The updated Privacy Policy will be effective as soon as it is
            posted unless otherwise stated. Your continued use of our services after the posting of the updated Privacy Policy constitutes your acceptance of the changes.
          </p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section142Ref}>
          <h3 className="font-medium lg:text-base">14.2. Notification Procedures</h3>
          <p>
            In the event of material changes to this Privacy Policy that may affect your rights or our data processing activities significantly, we will provide notice through our website or via email
            (where we have your contact information). We encourage you to check our website periodically for any updates to our Privacy Policy.
          </p>
        </section>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8" ref={section15Ref}>
        <h2 className="font-medium lg:text-base">15. Contact Us</h2>
        <p>If you have any questions, concerns, or suggestions regarding this Privacy Policy or our privacy practices, please contact us using any of the following methods:</p>
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
        <p>We are committed to addressing any inquiries or issues regarding the handling of your personal information promptly and thoroughly.</p>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8" ref={section16Ref}>
        <h2 className="font-medium lg:text-base">16. Glossary</h2>
        <p>To better understand the terms used in this Privacy Policy, please refer to the following definitions:</p>
        <ul className="list-outside list-disc ml-8 flex flex-col gap-2">
          <li>
            <span className="font-medium">Personal Data:</span> Information that relates to an identified or identifiable individual.
          </li>
          <li>
            <span className="font-medium">Non-Personal Data:</span> Data that does not directly or indirectly identify an individual and that may be aggregated for statistical analysis.
          </li>
          <li>
            <span className="font-medium">Cookies:</span> Small files stored on your device that collect and store information about your browsing activities.
          </li>
          <li>
            <span className="font-medium">Data Controller:</span> Entity that determines the purposes and means of processing personal data.
          </li>
          <li>
            <span className="font-medium">Data Processor:</span> Entity that processes personal data on behalf of the data controller.
          </li>
          <li>
            <span className="font-medium">GDPR:</span> General Data Protection Regulation, a European Union regulation that governs the processing of personal data.
          </li>
          <li>
            <span className="font-medium">PIPL:</span> Personal Information Protection Law, applicable in the People's Republic of China, regulating the processing of personal information.
          </li>
          <li>
            <span className="font-medium">Data Subject:</span> An identified or identifiable natural person whose personal data is processed.
          </li>
          <li>
            <span className="font-medium">Processing:</span> Any operation or set of operations performed on personal data, such as collection, recording, organization, structuring, storage,
            adaptation, or alteration.
          </li>
          <li>
            <span className="font-medium">Third Party:</span> Any natural or legal person, public authority, agency, or body other than the data subject, data controller, data processor, and persons
            who, under the direct authority of the data controller or data processor, are authorized to process personal data.
          </li>
        </ul>
      </section>
      <p className="mt-8 text-sm">
        For any further clarification or questions regarding these definitions, please contact us using the information provided in Section 15 (Contact Us) of this Privacy Policy.
      </p>
    </Section>
  );
};

export default PrivacyPolicies;
