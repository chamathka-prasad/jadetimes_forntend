import { useRef } from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section41Ref = useRef(null);
  const section42Ref = useRef(null);
  const section43Ref = useRef(null);
  const section5Ref = useRef(null);
  const section51Ref = useRef(null);
  const section52Ref = useRef(null);
  const section6Ref = useRef(null);
  const section61Ref = useRef(null);
  const section62Ref = useRef(null);
  const section63Ref = useRef(null);
  const section64Ref = useRef(null);
  const section65Ref = useRef(null);
  const section66Ref = useRef(null);
  const section7Ref = useRef(null);
  const section8Ref = useRef(null);
  const section81Ref = useRef(null);
  const section82Ref = useRef(null);
  const section83Ref = useRef(null);
  const section84Ref = useRef(null);
  const section9Ref = useRef(null);
  const section10Ref = useRef(null);
  const section11Ref = useRef(null);
  const section12Ref = useRef(null);
  const section13Ref = useRef(null);

  function scrollToSection(ref) {
    window.scrollTo({
      top: ref.current.offsetTop - 120,
      behavior: "smooth",
    });
  }

  return (
    <div className="p-4 text-neutral-900 max-w-[1300px] mx-auto">
      <h1 className="text-2xl">
        <span className="font-semibold">Jadetimes</span>® Terms of Service
      </h1>
      <p className="text-sm mb-4">Revised and posted as of the Effective Date: June 01, 2024</p>
      <div className="pt-4 border-t border-t-[#17171724] lg:grid lg:grid-cols-7">
        <section className="lg:order-2 lg:col-span-5 lg:border-l lg:border-l-[#17171724] lg:pl-8">
          <h2 className="text-2xl lg:text-4xl">Welcome to Jadetimes Media LLC!</h2>
          <div className="text-sm flex flex-col gap-4 mt-4 lg:gap-6 lg:mt-8">
            <p>
              Welcome to Jadetimes Media LLC, where your experience is our priority. We appreciate your interest in our Terms of Service, which outline the rules and guidelines for using our website
              and services. By accessing or using our platform, you agree to abide by these terms, ensuring a safe and enjoyable environment for all users.
            </p>
            <p>
              Our Terms of Service cover important aspects such as content usage, intellectual property rights, user conduct, and dispute resolution. It's essential to review these terms to understand
              your rights and responsibilities while interacting with Jadetimes.
            </p>
            <p>
              If you have any questions or concerns about our Terms of Service, please don't hesitate to contact us. We're here to assist you and ensure your experience with Jadetimes is positive and
              fulfilling.
            </p>
            <p>Thank you for choosing Jadetimes Media LLC. We look forward to serving you and providing you with valuable content and services.</p>
          </div>
        </section>
        <section className="mt-4 lg:mt-0 lg:pr-8 lg:col-span-2">
          <h2 className="text-xl font-semibold">Content</h2>
          <ul className="text-sm mt-2 lg:text-xs">
            <li className="mb-1">
              <Link className="underline" onClick={() => scrollToSection(section1Ref)}>
                1. Introduction
              </Link>
            </li>
            <li className="mb-1">
              <Link className="underline" onClick={() => scrollToSection(section2Ref)}>
                2. Acceptance of Terms
              </Link>
            </li>
            <li className="mb-1">
              <Link className="underline" onClick={() => scrollToSection(section3Ref)}>
                3. Eligibility
              </Link>
            </li>
            <li className="mb-1">
              <Link className="underline" onClick={() => scrollToSection(section4Ref)}>
                4. Content and Intellectual Property
              </Link>
              <ul className="ml-10">
                <li className="mb-1">
                  <Link className="underline" onClick={() => scrollToSection(section41Ref)}>
                    4.1. Ownership
                  </Link>
                </li>
                <li className="mb-1">
                  <Link className="underline" onClick={() => scrollToSection(section42Ref)}>
                    4.2. Usage
                  </Link>
                </li>
                <li className="mb-1">
                  <Link className="underline" onClick={() => scrollToSection(section43Ref)}>
                    4.3. User-Generated Content
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mb-1">
              <Link className="underline" onClick={() => scrollToSection(section5Ref)}>
                5. User Conduct
              </Link>
              <ul className="ml-10">
                <li className="mb-1">
                  <Link className="underline" onClick={() => scrollToSection(section51Ref)}>
                    5.1. Prohibited Activities
                  </Link>
                </li>
                <li className="mb-1">
                  <Link className="underline" onClick={() => scrollToSection(section52Ref)}>
                    5.2. Account Security
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mb-1">
              <Link className="underline" onClick={() => scrollToSection(section6Ref)}>
                6. Contributor Responsibilities
              </Link>
              <ul className="ml-10">
                <li className="mb-1">
                  <Link className="underline" onClick={() => scrollToSection(section61Ref)}>
                    6.1. Content Accuracy
                  </Link>
                </li>
                <li className="mb-1">
                  <Link className="underline" onClick={() => scrollToSection(section62Ref)}>
                    6.2. Source Referencing
                  </Link>
                </li>
                <li className="mb-1">
                  <Link className="underline" onClick={() => scrollToSection(section63Ref)}>
                    6.3. Editorial Oversight
                  </Link>
                </li>
                <li className="mb-1">
                  <Link className="underline" onClick={() => scrollToSection(section64Ref)}>
                    6.4. Liability and Legal Compliance
                  </Link>
                </li>
                <li className="mb-1">
                  <Link className="underline" onClick={() => scrollToSection(section65Ref)}>
                    6.5. Dispute Resolution
                  </Link>
                </li>
                <li className="mb-1">
                  <Link className="underline" onClick={() => scrollToSection(section66Ref)}>
                    6.6. Contributor Agreement
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mb-1">
              <Link className="underline" onClick={() => scrollToSection(section7Ref)}>
                7. Advertising and Sponsorship
              </Link>
            </li>
            <li className="mb-1">
              <Link className="underline" onClick={() => scrollToSection(section8Ref)}>
                8. Dispute Resolution
              </Link>
              <ul className="ml-10">
                <li className="mb-1">
                  <Link className="underline" onClick={() => scrollToSection(section81Ref)}>
                    8.1. Negotiation and Informal Resolution
                  </Link>
                </li>
                <li className="mb-1">
                  <Link className="underline" onClick={() => scrollToSection(section82Ref)}>
                    8.2. Arbitration
                  </Link>
                </li>
                <li className="mb-1 text">
                  <Link className="underline" onClick={() => scrollToSection(section83Ref)}>
                    8.3. Waiver of Jury Trial and Class Action Waiver
                  </Link>
                </li>
                <li className="mb-1">
                  <Link className="underline" onClick={() => scrollToSection(section84Ref)}>
                    8.4. Exceptions
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mb-1">
              <Link className="underline" onClick={() => scrollToSection(section9Ref)}>
                9. Internship Opportunity
              </Link>
            </li>
            <li className="mb-1">
              <Link className="underline" onClick={() => scrollToSection(section10Ref)}>
                10. Termination
              </Link>
            </li>
            <li className="mb-1">
              <Link className="underline" onClick={() => scrollToSection(section11Ref)}>
                11. Defamation and Legal Protections
              </Link>
            </li>
            <li className="mb-1">
              <Link className="underline" onClick={() => scrollToSection(section12Ref)}>
                12. Changes to Terms
              </Link>
            </li>
            <li className="mb-1">
              <Link className="underline" onClick={() => scrollToSection(section13Ref)}>
                13. Contact Information
              </Link>
            </li>
          </ul>
        </section>
      </div>
      <section className="text-sm flex flex-col gap-4 mt-8" ref={section1Ref}>
        <h2 className="font-medium lg:text-base">1. Introduction</h2>
        <p>
          Welcome to Jadetimes Media LLC's Terms of Service. These terms govern your use of our website{" "}
          <a href="http://" className="underline" target="_blank">
            (www.jadetimes.com)
          </a>{" "}
          and all related services provided by Jadetimes Media LLC ("Jadetimes," "we," "us," or "our"). By accessing or using our website and services, you agree to comply with these Terms of Service.
        </p>
        <p>Please read these terms carefully before accessing or using our website. If you do not agree with any part of these terms, you may not access the website or use any of our services.</p>
        <p>
          Jadetimes Media LLC reserves the right to modify these Terms of Service at any time. Any changes will be effective immediately upon posting on this page. Your continued use of our website
          and services after any such modifications constitutes your acknowledgment of the modified terms and your agreement to abide and be bound by the modified terms.
        </p>
        <p>
          If you have any questions or concerns regarding these terms, please contact us at info@jadetimes.com. Thank you for choosing Jadetimes Media LLC. We hope you enjoy your experience with us!
        </p>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8" ref={section2Ref}>
        <h2 className="font-medium lg:text-base">2. Acceptance of Terms</h2>
        <p>
          By accessing or using Jadetimes Media LLC's website{" "}
          <a href="http://" className="underline" target="_blank">
            (www.jadetimes.com)
          </a>{" "}
          or any of our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not access the
          website or use our services. These Terms of Service constitute a legally binding agreement between you and Jadetimes Media LLC. They govern your use of our website and services, including
          any updates, enhancements, new features, and/or the addition of new properties. You acknowledge that your continued use of our website and services after any modifications to these Terms of
          Service constitutes acceptance of those modifications. It is your responsibility to review these Terms of Service periodically for changes.
        </p>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8" ref={section3Ref}>
        <h2 className="font-medium lg:text-base">3. Eligibility</h2>
        <p>
          By accessing or using Jadetimes Media LLC's website{" "}
          <a href="http://" className="underline" target="_blank">
            (www.jadetimes.com)
          </a>{" "}
          or any of our services, you represent and warrant that you are at least 16 years old and have the legal capacity to enter into these Terms of Service. If you are under the age of 16, you may
          only use our website and services with the consent and supervision of a parent or legal guardian who agrees to be bound by these Terms of Service. Our website and services are intended
          solely for users who are 16 years of age or older. Any use of our website or services by individuals under the age of 16 is strictly prohibited.
        </p>
        <p>
          If you are accessing or using our website and services on behalf of a company, organization, or other legal entity, you represent and warrant that you have the authority to bind such entity
          to these Terms of Service. Jadetimes Media LLC reserves the right to refuse service, terminate accounts, or restrict access to our website and services in its sole discretion, including,
          without limitation, if we believe that your use violates applicable laws or is harmful to our interests or the interests of others. ​
        </p>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8" ref={section4Ref}>
        <h2 className="font-medium lg:text-base">4. Content and Intellectual Property</h2>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section41Ref}>
          <h3 className="font-medium lg:text-base">4.1 Ownership</h3>
          <p>
            All content available on Jadetimes Media LLC's website{" "}
            <a href="http://" className="underline" target="_blank">
              (www.jadetimes.com)
            </a>{" "}
            including but not limited to text, graphics, logos, images, audio clips, video clips, data compilations, and software, is the property of Jadetimes Media LLC or its content suppliers and
            is protected by United States and international copyright, trademark, and other intellectual property laws.
          </p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section42Ref}>
          <h3 className="font-medium lg:text-base">4.2 Usage</h3>
          <p>
            You may access and view the content on Jadetimes Media LLC's website solely for your personal, non-commercial use. You may not modify, reproduce, distribute, create derivative works of,
            publicly display, publicly perform, republish, download, store, or transmit any of the content on our website without the prior written consent of Jadetimes Media LLC, except as provided
            in these Terms of Service.
          </p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section43Ref}>
          <h3 className="font-medium lg:text-base">4.3 User-Generated Content</h3>
          <p>
            Jadetimes Media LLC may allow users to submit or upload content to our website, including but not limited to comments, reviews, and other user-generated content ("User Content"). By
            submitting User Content to Jadetimes Media LLC, you grant us a non-exclusive, perpetual, irrevocable, royalty-free, worldwide license to use, reproduce, modify, adapt, publish, translate,
            create derivative works from, distribute, and display such User Content in any media. You represent and warrant that you own or have the necessary rights, licenses, consents, and
            permissions to grant the foregoing licenses to Jadetimes Media LLC.
          </p>
        </section>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8" ref={section5Ref}>
        <h2 className="font-medium lg:text-base">5. User Conduct</h2>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section51Ref}>
          <h3 className="font-medium lg:text-base">5.1 Prohibited Activities</h3>
          <p>
            When using Jadetimes Media LLC's website{" "}
            <a href="http://" className="underline" target="_blank">
              (www.jadetimes.com)
            </a>{" "}
            and services, you agree not to engage in any of the following prohibited activities:
          </p>
          <ul className="list-outside list-disc ml-8 flex flex-col gap-2">
            <li>
              <span className="font-medium">Violating Laws and Regulations:</span> Use our website and services in any way that violates applicable local, state, national, or international laws or
              regulations.
            </li>
            <li>
              <span className="font-medium">Intellectual Property Infringement:</span> Infringe upon the intellectual property rights of others, including copyrights, trademarks, patents, trade
              secrets, or other proprietary rights.
            </li>
            <li>
              <span className="font-medium">Unauthorized Access:</span> Access, use, or attempt to access or use another user’s account, password, or personal information without permission.
            </li>
            <li>
              <span className="font-medium">Interference:</span> Interfere with or disrupt the operation of Jadetimes Media LLC's website or services, including transmitting viruses, worms, or other
              malicious code.
            </li>
            <li>
              <span className="font-medium">Harassment or Harm:</span> Harass, abuse, threaten, or harm other users of our website or services.
            </li>
            <li>
              <span className="font-medium">False Information:</span> Provide false, misleading, or inaccurate information when using our website or services.
            </li>
            <li>
              <span className="font-medium">Commercial Use:</span> Use our website or services for commercial purposes without our prior written consent.
            </li>
            <li>
              <span className="font-medium">Automated Use:</span> Use any automated system, including but not limited to bots, scripts, or spiders, to access or interact with our website or services.
            </li>
          </ul>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section52Ref}>
          <h3 className="font-medium lg:text-base">5.2 Account Security</h3>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify Jadetimes Media LLC
            immediately of any unauthorized use of your account or any other breach of security.
          </p>
        </section>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8" ref={section6Ref}>
        <h2 className="font-medium lg:text-base">6. Contributor Responsibilities</h2>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section61Ref}>
          <h3 className="font-medium lg:text-base">6.1. Content Accuracy</h3>
          <ul className="list-outside list-disc ml-8 flex flex-col gap-2">
            <li>
              <span className="font-medium">Verification:</span> Contributors are responsible for ensuring that all content submitted for publication is accurate and fact-checked. This includes
              verifying the authenticity of information, statistics, and quotes.
            </li>
            <li>
              <span className="font-medium">Research:</span> Contributors must conduct thorough research and use reliable sources to support their claims and statements. Proper attribution to original
              sources is required.
            </li>
            <li>
              <span className="font-medium">Corrections:</span> If inaccuracies are discovered in published content, contributors must promptly notify JadeTimes Media and cooperate in making necessary
              corrections or updates.
            </li>
          </ul>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section62Ref}>
          <h3 className="font-medium lg:text-base">6.2. Source Referencing</h3>
          <ul className="list-outside list-disc ml-8 flex flex-col gap-2">
            <li>
              <span className="font-medium">Attribution:</span> All sources of information used in articles must be cited accurately. This includes providing clear references to original sources and
              attributing any third-party content appropriately.
            </li>
            <li>
              <span className="font-medium">Transparency:</span> Contributors should ensure transparency in their reporting by disclosing any potential conflicts of interest and providing context
              where necessary.
            </li>
          </ul>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section63Ref}>
          <h3 className="font-medium lg:text-base">6.3. Editorial Oversight</h3>
          <ul className="list-outside list-disc ml-8 flex flex-col gap-2">
            <li>
              <span className="font-medium">Submission Process:</span> All content submitted by contributors will be reviewed by JadeTimes Media’s editorial team before publication. Contributors must
              adhere to the review process and be open to feedback and revisions.
            </li>
            <li>
              <span className="font-medium">Compliance:</span> Articles must comply with JadeTimes Media’s editorial guidelines and legal standards. Contributors are expected to adhere to these
              standards to ensure the content meets our quality and compliance requirements.
            </li>
          </ul>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section64Ref}>
          <h3 className="font-medium lg:text-base">6.4. Liability and Legal Compliance</h3>
          <ul className="list-outside list-disc ml-8 flex flex-col gap-2">
            <li>
              <span className="font-medium">Responsibility:</span> Contributors are legally responsible for the content they produce, including any claims of defamation, copyright infringement, or
              other legal issues arising from their articles.
            </li>
            <li>
              <span className="font-medium">Legal Standards:</span> Contributors must ensure that their content adheres to applicable laws and regulations, including defamation and intellectual
              property laws. JadeTimes Media will provide general guidance but will not assume legal responsibility for contributors' content.
            </li>
          </ul>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section65Ref}>
          <h3 className="font-medium lg:text-base">6.5. Dispute Resolution</h3>
          <ul className="list-outside list-disc ml-8 flex flex-col gap-2">
            <li>
              <span className="font-medium">Feedback Handling:</span> Contributors must be responsive to feedback and disputes related to their content. JadeTimes Media provides a mechanism for
              readers to submit concerns or complaints, and contributors are expected to cooperate in resolving these issues.
            </li>
            <li>
              <span className="font-medium">Content Review:</span> In case of disputes, JadeTimes Media will review the content and take appropriate action, which may include content removal or
              revisions.
            </li>
          </ul>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section66Ref}>
          <h3 className="font-medium lg:text-base">6.6. Contributor Agreement</h3>
          <ul className="list-outside list-disc ml-8 flex flex-col gap-2">
            <li>
              <span className="font-medium">Terms of Engagement:</span> By registering as a contributor, individuals agree to these responsibilities and acknowledge their commitment to maintaining
              content accuracy and legal compliance.
            </li>
            <li>
              <span className="font-medium">Agreement Acceptance:</span> Continued participation as a contributor signifies acceptance of these terms and conditions.
            </li>
          </ul>
        </section>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8" ref={section7Ref}>
        <h2 className="font-medium lg:text-base">7. Advertising and Sponsorship</h2>
        <p>
          Jadetimes Media LLC may display a variety of advertisements, promotions, sponsorships, and other forms of commercial content ("Advertising") on its website{" "}
          <a href="http://" className="underline" target="_blank">
            (www.jadetimes.com)
          </a>{" "}
          and within its services. These Advertising placements may be targeted based on various factors, including the content of information stored on the website, queries made through the website,
          or other information collected.
        </p>
        <section className="text-sm flex flex-col gap-4 ml-4">
          <h3 className="font-medium lg:text-base">Advertiser Responsibility</h3>
          <p>
            Advertisers and sponsors are solely responsible for ensuring that the material submitted for inclusion in Advertising on Jadetimes Media LLC's website complies with all applicable laws,
            regulations, and industry standards. Jadetimes Media LLC does not endorse or guarantee the accuracy or reliability of any Advertising displayed on its website.
          </p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4">
          <h3 className="font-medium lg:text-base">Sponsored Content</h3>
          <p>
            From time to time, Jadetimes Media LLC may publish sponsored content on its website. Sponsored content is created or commissioned by advertisers or sponsors and is intended to promote
            products, services, or viewpoints. Sponsored content is distinct from editorial content and will be clearly labeled as "Sponsored" or with a similar disclosure to distinguish it from
            regular content.
          </p>
          <p>
            The views expressed in sponsored content are those of the advertiser or sponsor and do not necessarily reflect the views or opinions of Jadetimes Media LLC. However, Jadetimes Media LLC
            strives to ensure that sponsored content meets our standards of quality, relevance, and transparency.
          </p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4">
          <h3 className="font-medium lg:text-base">Disclosure and Compensation</h3>
          <p>
            Jadetimes Media LLC may receive compensation from advertisers or sponsors based on user interactions with Advertising or sponsored content displayed on the website. This compensation may
            influence the placement, content, or availability of Advertising on our website. However, such compensation does not impact the independence, objectivity, or integrity of our editorial
            content.
          </p>
        </section>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8" ref={section8Ref}>
        <h2 className="font-medium lg:text-base">8. Dispute Resolution</h2>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section81Ref}>
          <h3 className="font-medium lg:text-base">8.1 Negotiation and Informal Resolution</h3>
          <p>
            In the event of any dispute, claim, or controversy arising out of or relating to your use of Jadetimes Media LLC's website{" "}
            <a href="http://" className="underline" target="_blank">
              (www.jadetimes.com)
            </a>{" "}
            or services, we encourage you to contact us first to seek a resolution informally.
          </p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section82Ref}>
          <h3 className="font-medium lg:text-base">8.2 Arbitration</h3>
          <p>
            If a resolution cannot be reached through negotiation or informal means, you agree that any dispute, claim, or controversy arising out of or relating to these Terms of Service or the
            breach, termination, enforcement, interpretation, or validity thereof, including the determination of the scope or applicability of this agreement to arbitrate, shall be determined by
            arbitration in New Mexico, USA before one arbitrator.
          </p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section83Ref}>
          <h3 className="font-medium lg:text-base">8.3 Waiver of Jury Trial and Class Action Waiver</h3>
          <p>
            You agree that by entering into these Terms of Service, you and Jadetimes Media LLC are each waiving the right to a trial by jury or to participate in a class action, collective action, or
            representative proceeding.
          </p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4" ref={section84Ref}>
          <h3 className="font-medium lg:text-base">8.4 Exceptions</h3>
          <p>
            Notwithstanding the above, Jadetimes Media LLC may seek injunctive relief or other equitable relief to protect its intellectual property rights or confidential information in any court of
            competent jurisdiction.
          </p>
        </section>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8" ref={section9Ref}>
        <h2 className="font-medium lg:text-base">9. Internship Opportunity</h2>
        <p>
          We are excited to offer an exclusive opportunity for motivated and passionate individuals to join our team and gain invaluable experience in the media industry. Please review the following
          guidelines to understand the program structure, requirements, and expectations.
        </p>
        <section className="text-sm flex flex-col gap-4 ml-4">
          <h3 className="font-medium lg:text-base">Internship Duration</h3>
          <p>Jadetimes Media LLC offers two internship duration options:</p>
          <ul className="list-outside list-disc ml-8 flex flex-col gap-2">
            <li>
              <span className="font-medium">3 Month Program:</span> 90 Days
            </li>
            <li>
              <span className="font-medium">6 Month Program:</span> 180 Days
            </li>
          </ul>
          <p>Upon successful completion, interns will receive an official Internship Completion Letter from Jadetimes Media LLC, acknowledging their contribution and accomplishments.</p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4">
          <h3 className="font-medium lg:text-base">Work Requirements</h3>
          <ul className="list-outside list-disc ml-8 flex flex-col gap-2">
            <li>
              <span className="font-medium">Daily Work Commitment:</span> Interns are required to work 1 hour daily (online) on assigned tasks.
            </li>
            <li>
              <span className="font-medium">Attendance:</span> Attendance must be marked daily through the Jadetimes UMS platform. Failure to mark attendance may affect the internship record.
            </li>
            <li>
              <span className="font-medium">Missed Attendance:</span> Interns who miss marking attendance may request HR to reinstate their attendance record within 3 days of the missed session.
            </li>
            <li>
              <span className="font-medium">Unpaid Internship:</span> This program is unpaid, providing valuable exposure, hands-on experience, and the prestige of working with Jadetimes Media LLC.
            </li>
          </ul>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4">
          <h3 className="font-medium lg:text-base">Leave Policy</h3>
          <p>Interns are permitted 5 leaves per month:</p>
          <ul className="list-outside list-disc ml-8 flex flex-col gap-2">
            <li>
              <span className="font-medium">3 Planned Leaves:</span> These must be applied for in advance through UMS.
            </li>
            <li>
              <span className="font-medium">2 Emergency Leaves:</span> For unplanned events, interns must inform both HR and their current supervisor immediately.
            </li>
            <li>
              <span className="font-medium">Special Emergency Leave:</span> Jadetimes acknowledges that unexpected situations or emergencies can arise. In such cases, interns may be granted special
              emergency leave upon notifying HR and their supervisor. Upon returning, interns are required to provide appropriate evidence to HR supporting the emergency leave, ensuring transparency
              and accountability.
            </li>
          </ul>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4">
          <h3 className="font-medium lg:text-base">Notice of Resignation</h3>
          <p>
            If an intern wishes to leave the internship program, they are required to provide 2 months’ notice in advance, as per the terms of the internship agreement. This allows adequate time for
            transitions and continuity of work.
          </p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4">
          <h3 className="font-medium lg:text-base">Code of Conduct and Agreement Compliance</h3>
          <p>Adhering to the Jadetimes Media LLC Internship Agreement is mandatory. Breaking the agreement or failing to follow company guidelines will result in:</p>
          <ul className="list-outside list-disc ml-8 flex flex-col gap-2">
            <li>Immediate Termination.</li>
            <li>A Disciplinary Inquiry, depending on the nature of the infraction.</li>
          </ul>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4">
          <h3 className="font-medium lg:text-base">Professional Behavior and Conduct Expectations</h3>
          <p>To maintain a productive and positive internship experience, please follow these additional guidelines:</p>
          <ul className="list-outside list-disc ml-8 flex flex-col gap-2">
            <li>
              <span className="font-medium">Confidentiality and Discretion:</span> Interns are expected to handle all company information with confidentiality and are not permitted to disclose
              internal discussions, project details, or sensitive information outside of Jadetimes Media LLC.
            </li>
            <li>
              <span className="font-medium">Task Ownership and Completion:</span> Interns must take ownership of all assigned tasks, completing them punctually and with attention to quality. This not
              only demonstrates responsibility but is also essential for personal growth and professional development.
            </li>
            <li>
              <span className="font-medium">Special Emergency Leave:</span> Jadetimes acknowledges that unexpected situations or emergencies can arise. In such cases, interns may be granted special
              emergency leave upon notifying HR and their supervisor. Upon returning, interns are required to provide appropriate evidence to HR supporting the emergency leave, ensuring transparency
              and accountability.
            </li>
            <li>
              <span className="font-medium">Feedback and Self-Improvement:</span> Interns are encouraged to seek feedback and consistently work on areas of improvement. Self-reflection and
              adaptability are key to maximizing the learning experience.
            </li>
            <li>
              <span className="font-medium">Professional Attitude:</span> Interns are representatives of Jadetimes, even online. Displaying a professional attitude in all interactions—whether with
              teammates, supervisors, or clients—reflects positively on both the intern and the company.
            </li>
          </ul>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4">
          <h3 className="font-medium lg:text-base">Benefits of the Internship Experience</h3>
          <p>This program offers:</p>
          <ul className="list-outside list-disc ml-8 flex flex-col gap-2">
            <li>
              <span className="font-medium">Networking Opportunities:</span> Engage with seasoned professionals and expand your industry network.
            </li>
            <li>
              <span className="font-medium">Skill Development:</span> Gain real-world experience in a media environment, fostering essential skills and professional growth.
            </li>
            <li>
              <span className="font-medium">Professional Recognition:</span> Completing an internship with Jadetimes provides reputable experience and insight into media operations, a notable addition
              to any resume.
            </li>
          </ul>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4">
          <h3 className="font-medium lg:text-base">Reporting Concerns</h3>
          <p>If interns have any concerns or issues to report, they are encouraged to contact Jadetimes directly:</p>
          <ul className="list-outside list-disc ml-8 flex flex-col gap-2">
            <li>
              <span className="font-medium">Email:</span> info@jadetimes.com/report@ums.jadetimes.com
            </li>
            <li>
              <span className="font-medium">Website:</span> Visit our contact page on the official Jadetimes website
            </li>
          </ul>
        </section>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8" ref={section10Ref}>
        <h2 className="font-medium lg:text-base">10. Termination</h2>
        <section className="text-sm flex flex-col gap-4 ml-4">
          <h3 className="font-medium lg:text-base">Termination by Jadetimes Media LLC</h3>
          <p>
            Jadetimes Media LLC reserves the right to suspend or terminate your access to its website{" "}
            <a href="http://" className="underline" target="_blank">
              (www.jadetimes.com)
            </a>{" "}
            and services, in whole or in part, at any time and for any reason, without prior notice or liability to you. Reasons for such termination may include, but are not limited to, breaches of
            these Terms of Service or violations of applicable laws or regulations.
          </p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4">
          <h3 className="font-medium lg:text-base">Effect of Termination</h3>
          <p>Upon termination of your access to Jadetimes Media LLC's website and services:</p>
          <ul className="list-outside list-disc ml-8 flex flex-col gap-2">
            <li>All rights and licenses granted to you under these Terms of Service will immediately cease.</li>
            <li>You must immediately cease all use of the website and services.</li>
            <li>Jadetimes Media LLC may delete or deactivate your account and all related information and files associated with your account.</li>
          </ul>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4">
          <h3 className="font-medium lg:text-base">Survival</h3>
          <p>
            Sections of these Terms of Service that by their nature should survive termination shall survive termination, including but not limited to Sections related to Intellectual Property,
            Dispute Resolution, Limitation of Liability, and Miscellaneous Provisions.
          </p>
        </section>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8" ref={section11Ref}>
        <h2 className="font-medium lg:text-base">11. Defamation and Legal Protections</h2>
        <ul className="list-outside list-disc ml-8 flex flex-col gap-2">
          <li>
            <span className="font-medium">Defamation Law:</span> JadeTimes Media LLC operates under the legal framework of New Mexico, which provides protections for freedom of speech and press under
            the U.S. Constitution. Defamation claims must meet stringent legal standards, including proving falsity and actual malice.
          </li>
          <li>
            <span className="font-medium">Freedom of Press:</span> As a U.S. - registered entity, JadeTimes Media LLC is protected by the First Amendment, which guarantees freedom of speech and press.
            Articles published on JadeTimes.com are intended to foster public dialogue and may include critical commentary or reporting on public figures and issues.
          </li>
          <li>
            <span className="font-medium">Publishing Rights:</span> Contributors grant JadeTimes Media LLC the right to publish, distribute, and promote their content across various platforms. This
            includes the right to make necessary edits and modifications to ensure compliance with editorial standards and legal requirements.
          </li>
        </ul>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8" ref={section12Ref}>
        <h2 className="font-medium lg:text-base">12. Changes to Terms</h2>
        <p>
          Jadetimes Media LLC reserves the right to modify or update these Terms of Service at any time. When we do, we will revise the "Effective Date" at the top of these Terms. We encourage you to
          review these Terms periodically for any updates or changes. Your continued use of Jadetimes Media LLC's website{" "}
          <a href="http://" className="underline" target="_blank">
            (www.jadetimes.com)
          </a>{" "}
          and services after the posting of any revised Terms constitutes your acceptance of the revised Terms.
        </p>
        <section className="text-sm flex flex-col gap-4 ml-4">
          <h3 className="font-medium lg:text-base">Notification of Changes</h3>
          <p>
            If we make material changes to these Terms, we may notify you by email or by posting a notice on our website prior to the effective date of the changes. It is your responsibility to ensure
            that we have your current email address and to check for any such notices.
          </p>
        </section>
        <section className="text-sm flex flex-col gap-4 ml-4">
          <h3 className="font-medium lg:text-base">Continuing to Use Services</h3>
          <p>
            If you do not agree with any changes to these Terms, your sole remedy is to discontinue your use of Jadetimes Media LLC's website and services. Continued use of the website and services
            after the effective date of changes indicates your acceptance of the modified Terms.
          </p>
        </section>
      </section>
      <section className="text-sm flex flex-col gap-4 mt-8" ref={section13Ref}>
        <h2 className="font-medium lg:text-base">13. Contact Information</h2>
        <p>If you have any questions, concerns, or feedback regarding these Terms of Service, please contact Jadetimes Media LLC using the following information:</p>
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
            <div>Info@jadetimes.com</div>
          </li>
          <li>
            <span className="font-medium">Live chat:</span>
            <div>Chat support is provided as a convenience and may not be available at all times.</div>
          </li>
        </ul>
      </section>
      <p className="mt-8 text-sm">Please ensure to provide sufficient information so we can respond appropriately to your inquiry. We strive to address all inquiries promptly and effectively.</p>
    </div>
  );
};

export default TermsAndConditions;
