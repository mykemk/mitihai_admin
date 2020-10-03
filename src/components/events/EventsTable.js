import React from "react";
import {
  eventsSampleData,
  eventsTableColumns,
  eventsActions,
} from "../../contexts/EventsContext";
import ActionTable from "components/tables/ActionTable";

let state = { lading: false, error: "No data" };
const EventsTable = () => {
  return (
    <ActionTable
      columns={eventsTableColumns}
      state={state}
      data={eventsSampleData}
      actions={eventsActions}
    />
  );
};

export default EventsTable;
