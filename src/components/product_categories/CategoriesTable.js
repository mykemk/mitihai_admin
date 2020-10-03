import React from "react";
import {
  categoriesTableActions,
  categoriesTableColumns,
  categoriesTestData,
} from "contexts/CategoriesContext";
import ActionTable from "components/tables/ActionTable";
const CategoriesTable = () => {
  return (
    <ActionTable
      columns={categoriesTableColumns}
      actions={categoriesTableActions}
      data={categoriesTestData}
    />
  );
};

export default CategoriesTable;
