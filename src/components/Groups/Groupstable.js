import React from "react";
import {
  groupsSampleData,
  groupsTableColumns,
  groupsTableActions,
} from "contexts/GroupsContext";
import ActionTable from "components/tables/ActionTable";
let state = { loading: false, error: "No fata" };

const Groupstable = () => {
  return (
    <ActionTable
      columns={groupsTableColumns}
      data={groupsSampleData}
      actions={groupsTableActions}
      state={state}
    />
  );
};

export default Groupstable;
