import React from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import styles from "./groups.module.css";
import PermisionSection from "./PermisionSection";

const PermisionsTable = ({ permisions }) => {
  const { register, control } = useFormContext();
  const { append } = useFieldArray({ control, name: "permisions" });
  return (
    <table className={styles.permisionsTable}>
      <thead>
        <tr>
          <td>Section</td>
          <td colSpan={4}>Permisions</td>
        </tr>
        <tr>
          <td></td>
          <td>Create</td>
          <td>Read</td>
          <td>Update</td>
          <td>Delete</td>
        </tr>
      </thead>
      <tbody>
        {permisions.map((permision, index) => {
          return (
            <PermisionSection
              key={`${permision}index`}
              append={append}
              permision={permision}>
              <td>{permision}</td>
              <td>
                <input
                  type="checkbox"
                  name={`permisions[${index}].${permision}.create`}
                  ref={register}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name={`permisions[${index}].${permision}.read`}
                  ref={register}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name={`permisions[${index}].${permision}.update`}
                  ref={register}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name={`permisions[${index}].${permision}.delete`}
                  ref={register}
                />
              </td>
            </PermisionSection>
          );
        })}
      </tbody>
    </table>
  );
};

export default React.memo(PermisionsTable);
