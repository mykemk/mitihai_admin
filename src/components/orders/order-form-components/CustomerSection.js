import React from "react";
import { Shorttext, Phonenumber, Longtext } from "../../form-components";

const CustomerSection = () => {
  return (
    <fieldset className="shortInputs">
      <Longtext
        label="Customer Name"
        name="customerName"
        placeholder="Customer Name"
      />
      <Shorttext
        label="Customer Address"
        name="customerAddress"
        placeholder="e.g Nairobi"
      />
      <Phonenumber
        label="Phone Number"
        name="customerPhone"
        placeholder="+2547..."
      />
    </fieldset>
  );
};

export default CustomerSection;
