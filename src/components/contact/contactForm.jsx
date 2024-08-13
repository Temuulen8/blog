import React from "react";

const ContactForm = () => {
  return (
    <div className="w-[643px] h-[440px] bg-[#F6F6F7] rounded-xl flex flex-col gap-6 justify-center pl-[35px]">
      <h1 className="font-semibold	text-lg	">Leave message</h1>
      <div className="flex gap-6 w-[478px] justify-between">
        <input
          type="text"
          placeholder="Your Name"
          className="border h-[38px] rounded-md w-[225px] pl-4"
        />
        <input
          type="text"
          placeholder="Your Email"
          className="border h-[38px] rounded-md w-[225px] pl-4"
        />
      </div>
      <input
        type="text"
        placeholder="Subject"
        className="border h-[38px] w-[478px] rounded-md pl-4"
      />
      <input
        type="text"
        placeholder="Write a message"
        className="border h-[134px] w-[478px] rounded-md pl-4 pb-[88px]"
      />
      <button className="w-[130px] h-[40px] bg-[#4B6BFB] text-white rounded-md font-medium	text-sm	">
        send Message
      </button>
    </div>
  );
};

export default ContactForm;
