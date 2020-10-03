import React from "react";
import { Shorttext, Fileinput, LongDescription } from "../form-components";

const CategoriesForm = () => {
  return (
    <fieldset>
      <Shorttext
        label="Category Name"
        name="name"
        placeholder="e.g Lifestyle"
      />
      <Fileinput label="Category Photo" name="categoryImage" />
      <LongDescription
        style={{ height: "10vh" }}
        label="Description"
        name="description"
        placeholder="How best can you describe the category...?"
      />
    </fieldset>
  );
};

export default CategoriesForm;
