import React, { useContext } from "react";
import { TableContext } from "../../contexts/TableContext";
import { Icon } from "@blueprintjs/core";

const ActionTableHead = () => {
  const { headerGroups } = useContext(TableContext);
  return (
    <thead>
      {headerGroups.map((headerGroup) => {
        return (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => {
              return (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <span>
                    <Icon icon="sort" iconSize={Icon.SIZE_STANDARD} />
                  </span>
                  {column.render("Header")}
                  {/* <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span> */}
                </th>
              );
            })}
            <td>Actions</td>
          </tr>
        );
      })}
    </thead>
  );
};

export default React.memo(ActionTableHead);
