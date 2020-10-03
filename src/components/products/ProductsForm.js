import React from "react";
import {
  Select,
  Fileinput,
  LongDescription,
  Shorttext,
  Costinput,
  Quantityinput,
} from "../form-components";
const ProductsForm = () => {
  return (
    <>
      <Select
        label="Product Category"
        className="columnHalf"
        name="category"
        options={["Category1", "Category2", "Category2"]}
      />
      <Shorttext
        label="Product Type"
        name="type"
        className="columnHalf"
        placeholder="e.g Female Watches"
      />
      <Shorttext
        label="Product Name"
        name="name"
        className="columnHalf"
        placeholder="e.g flower cover"
      />
      <Fileinput className="columnHalf" name="image" label="Product Image" />
      <LongDescription
        label="Description"
        name="description"
        placeholder="How can you describe it to customers ?"
        className="columnHalf"
      />
      <Costinput
        className="columnHalf"
        label="Price"
        name="price"
        placeholder="KES 0.00"
      />
      <Costinput
        className="columnHalf"
        label="Production Cost"
        placeholder="Product Cost"
        name="production_cost"
      />
      <Quantityinput
        label="Quantity to get an alert"
        className="columnHalf"
        name="alert_quantity"
        placeholder="Minimum Quantity"
      />
    </>
  );
};

export default React.memo(ProductsForm);
