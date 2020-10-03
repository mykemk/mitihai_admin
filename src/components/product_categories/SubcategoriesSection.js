import React, { useEffect } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import SubcategoryField from "./SubcategoryField";

const SubcategoriesSection = ({ tableStyles }) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "subCategories",
  });

  useEffect(() => {
    append({ subcategoryName: "", subcategoryImage: "" });
  }, [append]);

  return (
    <fieldset className="tabularInput">
      <table style={tableStyles}>
        <thead className="tabularInputLabels">
          <tr>
            <td>Name</td>
            <td>Image</td>
            <td>
              <button
                type="button"
                className="table-action-btns primaryAction"
                onClick={() => {
                  append({ subcategoryName: "", subcategoryImage: "" });
                }}>
                +
              </button>
            </td>
          </tr>
        </thead>
        <tbody>
          {fields.map((field, index) => {
            return (
              <SubcategoryField key={field.id} remove={remove} index={index} />
            );
          })}
        </tbody>
      </table>
    </fieldset>
  );
};

export default SubcategoriesSection;
