import React from "react";
import InfoCard from "./infoCard";

const Contact = () => {
  return (
    <div>
      <h1>Contact us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam
      </p>
      <div>
        <InfoCard
          cardHeader="Address"
          info="1328 Oak Ridge Drive, Saint Louis, Missouri"
        />
      </div>
    </div>
  );
};

export default Contact;
