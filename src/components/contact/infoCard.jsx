import React from "react";

const InfoCard = (cardHeader, info, infoFooter) => {
  return (
    <div className="w-[294px] h-[133px] border rounded-lg">
      <h1>{cardHeader}</h1>
      <p>{info}</p>
      <p>{infoFooter}</p>
    </div>
  );
};

export default InfoCard;
