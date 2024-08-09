import React from "react";

const ContactForm = () => {
  return (
    <div className="w-[643px] h-[440px] bg-[#F6F6F7] rounded-xl flex flex-col gap-6">
      <h1>Leave message</h1>
      <div className="flex gap-7">
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Your Email" />
      </div>
      <input type="text" placeholder="Subject" />
      <input type="text" placeholder="Write a message" />
      <button>send Message</button>
    </div>
  );
};

export default ContactForm;
