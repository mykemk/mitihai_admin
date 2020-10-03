import React from "react";
import {
  vendorRequestsActions,
  vendorRequestsColumns,
  vendorRequestsTestData,
} from "contexts/VendorsContext";
import ActionTable from "components/tables/ActionTable";

const VendorRequests = () => {
  return (
    <ActionTable
      columns={vendorRequestsColumns}
      data={vendorRequestsTestData}
      actions={vendorRequestsActions}
    />
  );
};
export default React.memo(VendorRequests);
