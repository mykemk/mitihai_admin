import React from "react";
import {
  partnersTableColumns,
  partnersTestData,
  partnersTableActions,
} from "contexts/PartnersContext";
import ActionTable from "components/tables/ActionTable";

const PartnersTable = () => {
  return (
    <ActionTable
      columns={partnersTableColumns}
      actions={partnersTableActions}
      data={partnersTestData}
    />
  );
};

export default PartnersTable;
