import React from "react";
import {
  ordersTableColumns,
  ordersTableActions,
  ordersTestData,
} from "contexts/OrderContext";
import ActionTable from "components/tables/ActionTable";

const OrderTable = () => {
  return (
    <ActionTable
      columns={ordersTableColumns}
      actions={ordersTableActions}
      data={ordersTestData}
    />
  );
};

export default OrderTable;
