"use client";
import Layout from "components/layout";
import CalendlyWidget from "components/calendlyWidget";
import Container from "components/Alluvium-Redesign-2026/common/container";
import FormSection from "components/Alluvium-Redesign-2026/formSection";

const ContactUs = () => {
  const data = [
    {
      icon: "/assets/icons/meet.svg",
      contact: "Contact Sales",
      subcontent:
        "Speak to our sales team about plans, pricing, enterprise contracts, or request a demo.",
      btn: "Book a Meeting",
      url: "/support/contact#schedule-a-call",
    },
    {
      icon: "/assets/icons/contact.svg",
      contact: "Contact Support",
      subcontent:
        "Have a specific request? Fill out the support form, and our team will get back to you as soon as possible.",
      btn: "Contact Support",
      url: "/contact-us/contact-sales-team",
    },
    {
      icon: "/assets/icons/contact.svg",
      contact: "Create Support ticket",
      subcontent:
        "Need assistance? Reach out to our support team for help with your questions or issues",
      btn: "Create a Ticket",
      url: "https://support.portal.alluvium.net/servicedesk/customer/portals",
    },
  ];

  const officeLocation = [
    {
      country: "London",
      location: "Kemp House 160, City Road London, EC1V 2NX.",
      tel: "+442035762028",
      url: "tel:+442035762028",
      icon: "/assets/Alluvium-Redesign-2026/contact-us/london.png",
    },
    {
      country: "Stamford",
      location: "Connecticut: 680 E Main Street Ste AStamford, CT 06901 US.",
      tel: "+1 (207) 360-7252",
      url: "tel:+12073607252",
      icon: "/assets/Alluvium-Redesign-2026/contact-us/stanford.png",
    },

    {
      country: "Orlando",
      location:
        "27345 W Sand Lake Rd, STE 210 Office 3190 Orlando, Florida  32819 US.",
      tel: "+1 (567) 331-0070",
      url: "tel:+15673310070",
      icon: "/assets/Alluvium-Redesign-2026/contact-us/orlando.png",
    },

    {
      country: "Nairobi",
      location:
        "4th Floor, Laiboni Centre, Lenana Road, Kilimani, Nairobi, Kenya.",
      tel: "+254 742 090807",
      url: "tel:+254742090807",
      icon: "/assets/Alluvium-Redesign-2026/contact-us/nairobi.png",
    },
  ];

  return (
    <Layout withoutForm={true}>
      {/* <div style={{ maxWidth: "1272px", margin: "auto" }}>
        <Lines variant={"primary"} />
      </div> */}
      <section className="w-full bg-secondary-900 overflow-hidden">
        <Container className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16">
          <div className="flex-1 flex flex-col justify-between gap-10">
            <div className="flex flex-col items-start gap-6">
              <div className="flex items-center gap-2">
                <span className="w-6 h-1 bg-default-100" />
                <span className="text-white text-sm font-bold font-sans uppercase tracking-wide">
                  Contact us
                </span>
              </div>
              <h1 className="max-w-xl text-white text-4xl md:text-5xl font-bold font-serif lg:leading-[60px]">
                Tell us what you are trying to solve.
              </h1>
              <p className="max-w-xl text-white text-lg md:text-xl font-medium font-sans leading-relaxed">
                Whether you&apos;re starting with Atlassian, scaling what you
                have, or adopting AI across your teams, we can help.
              </p>
            </div>

            <p className="text-white text-lg font-medium font-sans leading-relaxed">
              Tell us about your project at{" "}
              <a
                href="mailto:contact@alluvium.net"
                className="text-default-100 font-bold"
              >
                contact@alluvium.net
              </a>
              . You can also use the contact form, and we will get back to you
              within one business day.
            </p>
          </div>

          <div
            id="schedule-a-call"
            className="w-full lg:w-[620px] shrink-0 bg-white rounded-2xl overflow-hidden"
          >
            <CalendlyWidget />
          </div>
        </Container>
      </section>

      <section className="w-full bg-white border-b border-slate-200 overflow-hidden">
        <Container className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
          <div className="flex-1 flex flex-col items-start gap-6">
            <h2 className="max-w-xl text-[#1D2939] text-3xl font-bold font-serif leading-tight">
              Prefer to send us a message?
            </h2>
            <p className="text-[#344054] text-xl font-medium font-sans leading-relaxed">
              Whether you&apos;re starting with Atlassian, scaling what you
              have, or adopting AI across your teams, we can help.
            </p>
          </div>

          <div className="w-full lg:w-[562px] shrink-0 p-8 bg-white rounded-lg border border-slate-200">
            <FormSection />
          </div>
        </Container>
      </section>

      {/* <ContactSection withLines={false} /> */}

      <section className="w-full bg-white overflow-hidden">
        <Container className="flex flex-col items-center gap-12">
          <h2 className="text-center text-[#1D2939] text-3xl md:text-4xl font-bold font-serif leading-tight">
            Our Locations
          </h2>

          <div className="w-full flex flex-col sm:flex-row justify-start items-start gap-6">
            {officeLocation.map((office) => (
              <div
                key={office.country}
                className="flex-1 flex flex-col items-start gap-2"
              >
                <span className="text-[#1D2939] text-xl font-bold font-serif leading-relaxed">
                  {office.country}
                </span>
                <p className="max-w-xs text-[#344054] text-lg font-medium font-sans leading-relaxed">
                  {office.location}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default ContactUs;
