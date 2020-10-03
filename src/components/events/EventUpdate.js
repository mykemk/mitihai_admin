import React from "react";
import { Quantityinput } from "components/form-components";
import ImageUpload from "components/ui-utils/ImageUpload";

const EventUpdate = () => {
  return (
    <div>
      <Quantityinput
        label="Trees Planted"
        placeholder="How many ?.."
        name="treesPlanted"
        className="columnHalf"
      />
      <Quantityinput
        label="Number of Attendees"
        placeholder="How many ?.."
        name="attendees"
        className="columnHalf"
      />
      <ImageUpload label="Add event photos" />
    </div>
  );
};

export default EventUpdate;
