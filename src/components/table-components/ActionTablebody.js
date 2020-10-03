import React, { useContext } from "react";
import { TableContext } from "../../contexts/TableContext";
import ActionSection from "../table-components/ActionSection";

const ActionTablebody = ({ actions }) => {
  const { page, getTableBodyProps, prepareRow } = useContext(TableContext);
  return (
    <tbody {...getTableBodyProps()}>
      {page.map((row) => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map((cell) => {
              return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
            })}
            <ActionSection actions={actions} />
          </tr>
        );
      })}
    </tbody>
  );
};

export default ActionTablebody;
