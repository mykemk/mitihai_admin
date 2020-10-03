import React from "react";
import {
  Shorttext,
  Email,
  Select,
  Fileinput,
  LongDescription,
  Phonenumber,
} from "../form-components";

const PartnerForm = () => {
  return (
    <>
      {/* Partner's Information goes here */}
      <Shorttext
        label="Partner Name"
        name="partnerName"
        placeholder="e.g KWS"
        className="columnHalf"
      />
      <Shorttext
        className="columnHalf"
        label="Country"
        name="country"
        placeholder="e.g Kenya"
      />
      <Email
        className="columnHalf"
        label="Email"
        name="email"
        placeholder="username@example.com"
      />
      <Select
        className="columnHalf"
        name="partnerType"
        label="Partner Type"
        options={["Organization", "Individual"]}
      />
      <Phonenumber
        className="columnHalf"
        label="Phone Number"
        name="phoneNumber"
        placeholder="+2547..."
      />
      <Fileinput
        className="columnHalf"
        label="Logo:"
        name="image"
        placeholder="Choose logo"
      />
      <LongDescription
        label="Partneship Description"
        name="partnershipDesc"
        placeholder="Let us know the partner..."
      />
    </>
  );
};

export default PartnerForm;
