import React from "react";
import { Shorttext, Fileinput } from "../form-components";

const SubcategoryField = ({ remove, index }) => {
  return (
    <tr>
      <td>
        <Shorttext
          name={`subCategories[${index}].subcategoryName`}
          placeholder="Sub-category.."
        />
      </td>
      <td>
        <Fileinput name={`subCategories[${index}].subcategoryImage`} />
      </td>
      <td>
        <button
          type="button"
          className="table-action-btns primaryAction"
          onClick={() => remove(index)}>
          x
        </button>
      </td>
    </tr>
  );
};

export default SubcategoryField;
