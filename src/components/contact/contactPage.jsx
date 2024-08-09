import React from "react";
import ContactCard from "./contactCard";
import ContactForm from "./contactForm";

const ContactPage = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-5 p-28">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-semibold">Contact us</h1>
          <p className="w-[624px] h-[103px] text-[#696A75]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <div className="flex gap-10">
          <ContactCard
            title="Address"
            info="1328 Oak Ridge Drive, Saint Louis,"
            infoBot="Missouri"
          />
          <ContactCard
            title="Contact"
            info="313-332-8662"
            infoBot="info@email.com"
          />
        </div>
        <ContactForm />
      </div>
    </>
  );
};

export default ContactPage;
