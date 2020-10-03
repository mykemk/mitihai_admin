import React from "react";
import { Select, Shortdescription, LongDescription } from "../form-components";

const FaqForm = () => {
  return (
    <fieldset>
      <Select
        name="faqCatecory"
        label="Question Category"
        options={["Product1", "Product2", "Product3"]}
      />
      <Shortdescription
        placeholder="What question did they ask...?"
        label="Question"
        name="question"
      />
      <LongDescription
        label="Answer"
        name="answer"
        placeholder="What aswer would you like to give them ...?"
      />
    </fieldset>
  );
};

export default FaqForm;
