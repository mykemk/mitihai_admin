import React from "react";
import {
  productsTableActions,
  productsTableColumns,
  productsTestData,
} from "contexts/ProductsContext";
import ActionTable from "components/tables/ActionTable";
const ProductsTable = () => {
  return (
    <ActionTable
      columns={productsTableColumns}
      actions={productsTableActions}
      data={productsTestData}
    />
  );
};

export default ProductsTable;
