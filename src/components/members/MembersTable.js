import React from "react";
import {
  membersTableActions,
  membersTableColumns,
  membersTestData,
} from "contexts/MembersContext";
import ActionTable from "components/tables/ActionTable";

const MembersTable = () => {
  return (
    <ActionTable
      columns={membersTableColumns}
      data={membersTestData}
      actions={membersTableActions}
    />
  );
};
export default React.memo(MembersTable);
