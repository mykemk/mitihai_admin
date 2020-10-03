import React from "react";
import {
  productsAlertsColumns,
  productsAlertsTestData,
  productsAlertActions,
} from "contexts/ProductsContext";
import ActionTable from "components/tables/ActionTable";

const ProductsAlerts = () => {
  return (
    <ActionTable
      columns={productsAlertsColumns}
      actions={productsAlertActions}
      data={productsAlertsTestData}
    />
  );
};

export default ProductsAlerts;
