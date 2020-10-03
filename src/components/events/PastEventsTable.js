import React from "react";
import {
  pastEventsActions,
  pastEventsTableColumns,
  eventsSampleData,
} from "contexts/EventsContext";
import ActionTable from "components/tables/ActionTable";
const PastEventsTable = () => {
  return (
    <ActionTable
      columns={pastEventsTableColumns}
      data={eventsSampleData}
      actions={pastEventsActions}
    />
  );
};

export default React.memo(PastEventsTable);
