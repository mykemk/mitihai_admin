import React, { useEffect } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Longtext } from "../form-components";

const ListInput = ({
  name,
  label,
  placeholder,
  tableStyles,
  itemLabel,
  className = "",
  ...props
}) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
  });
  useEffect(() => {
    append({ [itemLabel]: "item" });
    return () => {
      return () => remove(0);
    };
  });

  return (
    <fieldset className={`tabularInput ${className}`} {...props}>
      <table style={tableStyles}>
        <tbody>
        <tr className="tabularInputLabels">
          <td>{label}</td>
          <td>
            <button
              type="button"
              className="primaryAction"
              onClick={() => append({ [itemLabel]: "item" })}>
              +
            </button>
          </td>
        </tr>
        {fields.map((field, index) => {
          return (
            <tr key={field.id}>
              <td>
                <Longtext
                  name={`${name}[${index}].${itemLabel}`}
                  placeholder={placeholder}
                />
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="primaryAction">
                  x
                </button>
              </td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </fieldset>
  );
};
export default ListInput;
