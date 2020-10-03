import React, { useEffect } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import Productdetails from "./ProductField";

const ProductSection = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "products",
  });

  useEffect(() => {
    console.log("rendering...");
    append({});
  }, [append]);

  return (
    <fieldset className="tabularInput">
      <table>
        <thead className="tabularInputLabels">
          <tr>
            <td>Product</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Engrave Charge</td>
            <td>Total</td>
            <td>
              <button
                type="button"
                className="table-action-btns primaryAction"
                onClick={() => {
                  append({});
                }}>
                +
              </button>
            </td>
          </tr>
        </thead>
        <tbody>
          {fields.map((field, index) => {
            return (
              <Productdetails key={field.id} remove={remove} index={index} />
            );
          })}
        </tbody>
      </table>
    </fieldset>
  );
};

export default ProductSection;
