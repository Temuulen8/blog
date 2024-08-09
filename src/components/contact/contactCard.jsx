import React from "react";

const ContactCard = ({ title, info, infoBot }) => {
  //   const { title } = props;
  return (
    <div className="border w-[294px] h-[133px] rounded-xl">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-[#696A75]">{info}</p>
      <p className="text-[#696A75]">{infoBot}</p>
    </div>
  );
};

export default ContactCard;
