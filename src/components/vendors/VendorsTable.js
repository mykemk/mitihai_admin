import React from "react";
import {
  vendorsTableActions,
  vendorsTableColumns,
  vendorsTestData,
} from "contexts/VendorsContext";
import ActionTable from "components/tables/ActionTable";

const VendorRequests = () => {
  return (
    <ActionTable
      columns={vendorsTableColumns}
      data={vendorsTestData}
      actions={vendorsTableActions}
    />
  );
};
export default React.memo(VendorRequests);
