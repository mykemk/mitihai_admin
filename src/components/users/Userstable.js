import React from "react";
import {
  usersTableActions,
  usersTableColumns,
  usersTestData,
} from "contexts/UsersContext";

import ActionTable from "components/tables/ActionTable";

const UsersTable = () => {
  return (
    <ActionTable
      columns={usersTableColumns}
      data={usersTestData}
      actions={usersTableActions}
    />
  );
};
export default React.memo(UsersTable);
