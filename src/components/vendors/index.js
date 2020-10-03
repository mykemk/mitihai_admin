import createManagePage from "utils/component-utils/createManagePage";
import RequestsTable from "./VendorRequests";
import VendorTable from "./VendorsTable";

export const VendorsTable = createManagePage(VendorTable, "Vendor", false);
export const VendorRequests = createManagePage(
  RequestsTable,
  "Vendor Request",
  false,
);
