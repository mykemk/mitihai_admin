import React from "react";
import {
  Longtext,
  Select,
  Dateinput,
  Timeinput,
  Costinput,
} from "components/form-components";
import PercentageInput from "components/form-components/PercentageInput";

const OfferForm = () => {
  return (
    <>
      <Longtext label="Offer Name" placeholder="offer name" name="offerName" />
      <Select
        label="Select Product"
        name="productId"
        options={["Product 1", "Product 2"]}
      />
      <PercentageInput
        label="Discount(%)"
        name="discount"
        placeholder="e.g 2"
      />
      <Dateinput label="Start Date" name="startDate" />
      <Timeinput label="Start Time" name="startTime" />
      <Costinput label="Duration" name="duration" placeholder="Number of days" />
    </>
  );
};

export default OfferForm;
