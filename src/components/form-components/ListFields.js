import React, { useEffect } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import * as fieldNames from "../form-components";

const ListInput = ({ inputFields, labels, listName }) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: listName,
  });

  useEffect(() => {
    append(
      inputFields.forEach(({ name }) => {
        return { [name]: "value" };
      }),
    );
  });

  return (
    <fieldset className="tabularInput">
      <table>
        <tbody>
        <tr className="tabularInputLabels">
          {labels.map((label) => {
            return <td>{label}</td>;
          })}
          <td>
            <button
              onClick={() =>
                append(
                  inputFields.forEach((inputField) => {
                    return { [inputField.name]: "value" };
                  }),
                )
              }>
              +
            </button>
          </td>
        </tr>
        {fields.map((field, index) => {
          return (
            <tr key={field.id}>
              {inputFields.map(({ fieldName, name, ...props }) => {
                return (
                  <td>
                    {React.createElement(
                      `${fieldNames}.${fieldName}`,
                      [
                        {
                          name: `${listName}[${index}].${name}`,
                        },
                        { ...props },
                      ],
                      null,
                    )}
                  </td>
                );
              })}
              {/* <td>
                <Longtext
                  name={`${name}[${index}].${itemLabel}`}
                  placeholder={placeholder}
                />
              </td> */}
              <td>
                <button onClick={() => remove(index)}>x</button>
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
